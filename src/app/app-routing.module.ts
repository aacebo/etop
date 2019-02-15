import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  DashboardComponent,
  CpuComponent,
  MemoryComponent,
  NetworkComponent,
  FileSystemComponent,
} from './features';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'cpu',
    component: CpuComponent,
  },
  {
    path: 'memory',
    component: MemoryComponent,
  },
  {
    path: 'network',
    component: NetworkComponent,
  },
  {
    path: 'file-system',
    component: FileSystemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
