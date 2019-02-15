import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MemoryModule as SharedMemoryModule } from '../../shared';
import { ChartModule } from '../chart';
import { MemoryUsageChartComponent } from './components';
import { MemoryComponent } from './pages';

@NgModule({
  declarations: [MemoryUsageChartComponent, MemoryComponent],
  exports: [MemoryUsageChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    MatCardModule,
    FlexLayoutModule,
    SharedMemoryModule,
  ],
})
export class MemoryModule { }
