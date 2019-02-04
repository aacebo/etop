import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartModule } from '@swimlane/ngx-charts';

import { ChartsComponent } from './pages';
import { LineChartComponent } from './components';

const components = [ChartsComponent, LineChartComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    LineChartModule,
  ],
})
export class ChartModule { }
