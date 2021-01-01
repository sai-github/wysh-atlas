import { Component, OnInit } from '@angular/core';
import { WyshAtlasService } from '../../services/wysh-atlas.service';
import { Observable } from 'rxjs';
import { BDay } from '../../models/BDay.model';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wysh',
  templateUrl: './wysh.component.html',
  styleUrls: ['./wysh.component.scss'],
})
export class WyshComponent implements OnInit {
  title = 'wysh-atlas';
  items$: Observable<BDay>;
  picURL$: Observable<string>;
  wysh$: Observable<string>;
  isLoading = true;

  constructor(
    private wyshAtlasService: WyshAtlasService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParamMap.get('id');
    if (id) {
      this.items$ = this.wyshAtlasService.getSpecificBDay(id).pipe(
        map((res) => {
          this.isLoading = false;
          if (res) {
            this.picURL$ = this.getPicture(res.data.picLocation);
            this.wysh$ = this.getWysh(res.id);
          }

          return res;
        })
      );
    } else {
      this.items$ = this.wyshAtlasService.getBDay().pipe(
        map((res) => {
          this.isLoading = false;
          if (res) {
            this.picURL$ = this.getPicture(res.data.picLocation);
            this.wysh$ = this.getWysh(res.id);
          }

          return res;
        })
      );
    }
  }

  getPicture(fileName: string) {
    return this.wyshAtlasService.getPicture(fileName);
  }

  getWysh(id: string) {
    return this.wyshAtlasService.getWysh(id);
  }
}
