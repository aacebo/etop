import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../chart';
import { FileSystemComponent } from './pages';
import { DeviceUsageChartComponent } from './components';
import { FileSystemModule as SharedFileSystemModule } from '../../core';

@NgModule({
  declarations: [FileSystemComponent, DeviceUsageChartComponent],
  exports: [DeviceUsageChartComponent],
  imports: [CommonModule, ChartModule, MatCardModule, SharedFileSystemModule],
})
export class FileSystemModule { }
