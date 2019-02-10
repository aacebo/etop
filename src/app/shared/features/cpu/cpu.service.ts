import { Injectable, Inject } from '@angular/core';
import { Systeminformation } from 'systeminformation';

import { ICpuState } from './cpu.state';
import { StoreService } from '../store';
import { QueueServiceTemplate } from '../../templates';

@Injectable()
export class CpuService extends QueueServiceTemplate<Systeminformation.CpuData> {
  constructor(
    @Inject('cpu') readonly storeService: StoreService<ICpuState>,
  ) { super(storeService); }
}
