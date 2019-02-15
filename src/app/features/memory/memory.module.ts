import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { MemoryModule as SharedMemoryModule } from '../../shared';
import { ChartModule } from '../chart';
import { MemoryUsageChartComponent } from './components';

@NgModule({
  declarations: [MemoryUsageChartComponent],
  exports: [MemoryUsageChartComponent],
  imports: [CommonModule, ChartModule, MatCardModule, SharedMemoryModule],
})
export class MemoryModule { }
