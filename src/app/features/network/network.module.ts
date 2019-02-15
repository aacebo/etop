import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { NetworkModule as SharedNetworkModule } from '../../shared';
import { ChartModule } from '../chart';
import { NetworkUsageChartComponent } from './components';

@NgModule({
  declarations: [NetworkUsageChartComponent],
  exports: [NetworkUsageChartComponent],
  imports: [CommonModule, ChartModule, MatCardModule, SharedNetworkModule],
})
export class NetworkModule { }
