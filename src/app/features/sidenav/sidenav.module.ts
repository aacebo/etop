import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatIconModule,
  MatSidenavModule,
  MatTooltipModule,
  MatButtonModule,
  MatListModule,
} from '@angular/material';

import { SidenavComponent } from './components';

const components = [SidenavComponent];

@NgModule({
  declarations: components,
  exports: [
    ...components,
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class SidenavModule { }
