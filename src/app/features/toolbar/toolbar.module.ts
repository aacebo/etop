import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
} from '@angular/material';

import { ToolbarComponent } from './components';

const components = [ToolbarComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class ToolbarModule { }
