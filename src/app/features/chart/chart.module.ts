import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsComponent } from './pages';

const components = [ChartsComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
  ],
})
export class ChartModule { }
