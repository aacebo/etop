import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MemoryModule as SharedMemoryModule } from '../../core';
import { ChartModule } from '../chart';
import { MemoryUsageChartComponent, SwapUsageChartComponent } from './components';
import { MemoryComponent } from './pages';

@NgModule({
  declarations: [MemoryUsageChartComponent, MemoryComponent, SwapUsageChartComponent],
  exports: [MemoryUsageChartComponent, SwapUsageChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    MatCardModule,
    FlexLayoutModule,
    SharedMemoryModule,
  ],
})
export class MemoryModule { }
