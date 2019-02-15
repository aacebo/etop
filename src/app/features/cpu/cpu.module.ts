import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoadModule } from '../../shared';
import { ChartModule } from '../chart';
import { CpuLoadChartComponent, LoadChartComponent } from './components';
import { CpuComponent } from './pages';

@NgModule({
  declarations: [CpuLoadChartComponent, LoadChartComponent, CpuComponent],
  exports: [CpuLoadChartComponent, LoadChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    MatCardModule,
    FlexLayoutModule,
    LoadModule,
  ],
})
export class CpuModule { }
