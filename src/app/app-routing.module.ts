import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsComponent } from './features';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/charts',
    pathMatch: 'full',
  },
  {
    path: 'charts',
    component: ChartsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
