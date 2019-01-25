import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
  exports: components,
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class SidenavModule { }
