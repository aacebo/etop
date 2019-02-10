import { NgModule } from '@angular/core';

import { StoreModule } from '../store';
import { ICpuState } from './cpu.state';
import { CpuService } from './cpu.service';

@NgModule({
  imports: [
    StoreModule.forFeature<ICpuState>('cpu', {
      history: [],
    }),
  ],
  providers: [
    CpuService,
  ],
})
export class CpuModule { }
