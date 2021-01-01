import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WyshComponent } from './components/wysh/wysh.component';

const routes: Routes = [
  { path: 'wysh', component: WyshComponent },
  { path: '', redirectTo: '/wysh', pathMatch: 'full' }, // redirect to `wysh`
  { path: '**', redirectTo: '/wysh', pathMatch: 'full' }, // Wildcard route to wysh page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
