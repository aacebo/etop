import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CpuModule } from '../cpu';
import { MemoryModule } from '../memory';
import { NetworkModule } from '../network';
import { FileSystemModule } from '../file-system';

import { DashboardComponent } from './pages';

@NgModule({
  declarations: [DashboardComponent],
  exports: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CpuModule,
    MemoryModule,
    NetworkModule,
    FileSystemModule,
  ],
})
export class DashboardModule { }
