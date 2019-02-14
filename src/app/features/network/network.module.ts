import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../chart';
import { NetworkUsageChartComponent } from './components';

@NgModule({
  declarations: [NetworkUsageChartComponent],
  exports: [NetworkUsageChartComponent],
  imports: [CommonModule, ChartModule, MatCardModule],
})
export class NetworkModule { }
