import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  LineChartModule,
  AreaChartModule,
  PieChartModule,
} from '@swimlane/ngx-charts';

import {
  LineChartComponent,
  AreaChartComponent,
  PieChartComponent,
} from './components';

@NgModule({
  declarations: [
    LineChartComponent,
    AreaChartComponent,
    PieChartComponent,
  ],
  exports: [
    LineChartComponent,
    AreaChartComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    LineChartModule,
    AreaChartModule,
    PieChartModule,
    FlexLayoutModule,
  ],
})
export class ChartModule { }
