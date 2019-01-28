import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    MatToolbarModule,
    MatIconModule,
  ],
})
export class ToolbarModule { }
