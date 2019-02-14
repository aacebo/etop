import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LineChartModule, AreaChartModule } from '@swimlane/ngx-charts';

import { LineChartComponent, AreaChartComponent } from './components';

@NgModule({
  declarations: [LineChartComponent, AreaChartComponent],
  exports: [LineChartComponent, AreaChartComponent],
  imports: [
    CommonModule,
    LineChartModule,
    AreaChartModule,
    FlexLayoutModule,
  ],
})
export class ChartModule { }
