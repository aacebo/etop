import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { LineChartModule, AreaChartModule } from '@swimlane/ngx-charts';

import { ChartsComponent } from './pages';
import {
  LineChartComponent,
  LoadChartComponent,
  CpuLoadChartComponent,
  MemoryUsageChartComponent,
} from './components';

const pages = [ChartsComponent];
const components = [
  LineChartComponent,
  LoadChartComponent,
  CpuLoadChartComponent,
  MemoryUsageChartComponent,
];

@NgModule({
  declarations: [ ...components, ...pages ],
  exports: [ ...components ],
  imports: [
    CommonModule,
    LineChartModule,
    AreaChartModule,
    MatCardModule,
  ],
})
export class ChartModule { }
