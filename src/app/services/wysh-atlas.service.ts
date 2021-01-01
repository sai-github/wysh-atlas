import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BDay } from '../models/BDay.model';
import { map, catchError, switchMap } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';
import { PicResponse } from '../models/PicResponse.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WyshAtlasService {
  constructor(public httpClient: HttpClient) {}

  WYSH_ATLAS_API = environment.wyshAtlasFnURL;

  getBDay(): Observable<BDay> {
    return this.httpClient
      .get<BDay[]>(this.WYSH_ATLAS_API + 'getBDay')
      .pipe(
        map((res) => (res.length > 0 ? res[0] : null)),
        catchError((err) => throwError(err))
      );
  }

  getSpecificBDay(id: string): Observable<BDay> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.httpClient
      .get<BDay[]>(this.WYSH_ATLAS_API + 'getSpecificBDay', {
        params,
      })
      .pipe(
        map((res) => (res.length > 0 ? res[0] : null)),
        catchError((err) => throwError(err))
      );
  }

  getPicture(fileName: string): Observable<string> {
    let params = new HttpParams();
    params = params.append('fileName', fileName);
    return this.httpClient
      .get<PicResponse>(this.WYSH_ATLAS_API + 'getWyshPic', {
        params,
      })
      .pipe(
        map((res) => res.fileURL),
        catchError((err) => throwError(err))
      );
  }

  getWysh(id: string): Observable<string> {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.httpClient
      .get<{ msg: string }>(this.WYSH_ATLAS_API + 'getPersonalWysh', {
        params,
      })
      .pipe(
        switchMap((res) => {
          if (res.msg) {
            return of(res.msg);
          } else {
            return this.getSomeWysh();
          }
        }),
        catchError((err) => throwError(err))
      );
  }

  getSomeWysh(): Observable<string> {
    return this.httpClient
      .get<{ msg: string }>(this.WYSH_ATLAS_API + 'getWysh')
      .pipe(
        map((res) => res.msg),
        catchError((err) => throwError(err))
      );
  }
}
