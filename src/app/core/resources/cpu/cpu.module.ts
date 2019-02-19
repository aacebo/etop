import { NgModule } from '@angular/core';

import { StoreModule } from '../../../shared';
import { ICpuState } from './cpu.state';
import { CpuService } from './cpu.service';

@NgModule({
  imports: [
    StoreModule.forFeature<ICpuState>('cpu', {}),
  ],
  providers: [
    CpuService,
  ],
})
export class CpuModule { }
