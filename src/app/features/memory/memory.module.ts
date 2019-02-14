import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../chart';
import { MemoryUsageChartComponent } from './components';

@NgModule({
  declarations: [MemoryUsageChartComponent],
  exports: [MemoryUsageChartComponent],
  imports: [CommonModule, ChartModule, MatCardModule],
})
export class MemoryModule { }
