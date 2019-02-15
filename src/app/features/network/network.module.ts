import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NetworkModule as SharedNetworkModule } from '../../shared';
import { ChartModule } from '../chart';
import { NetworkUsageChartComponent } from './components';
import { NetworkComponent } from './pages';

@NgModule({
  declarations: [NetworkUsageChartComponent, NetworkComponent],
  exports: [NetworkUsageChartComponent],
  imports: [
    CommonModule,
    ChartModule,
    MatCardModule,
    FlexLayoutModule,
    SharedNetworkModule,
  ],
})
export class NetworkModule { }
