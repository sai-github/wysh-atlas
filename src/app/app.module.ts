/**
 * Angular modules
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

/**
 * App modules
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * AngularFire modules
 */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

/**
 * Misc
 */
import { environment } from '../environments/environment';
import { WyshComponent } from './components/wysh/wysh.component';
import { GlowSpinnerComponent } from './components/glow-spinner/glow-spinner.component';

@NgModule({
  declarations: [AppComponent, WyshComponent, GlowSpinnerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
