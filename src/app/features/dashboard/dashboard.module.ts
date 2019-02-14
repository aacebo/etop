import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CpuModule } from '../cpu';
import { MemoryModule } from '../memory';
import { NetworkModule } from '../network';
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
  ],
})
export class DashboardModule { }
