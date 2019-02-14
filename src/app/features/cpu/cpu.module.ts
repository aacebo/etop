import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../chart';
import { CpuLoadChartComponent, LoadChartComponent } from './components';

@NgModule({
  declarations: [CpuLoadChartComponent, LoadChartComponent],
  exports: [CpuLoadChartComponent, LoadChartComponent],
  imports: [CommonModule, ChartModule, MatCardModule],
})
export class CpuModule { }
