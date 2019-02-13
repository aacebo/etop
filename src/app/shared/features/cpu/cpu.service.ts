import { Injectable, Inject } from '@angular/core';

import { ICpuState } from './cpu.state';
import { StoreService } from '../store';

@Injectable()
export class CpuService {
  get value() { return this.storeService.value; }

  constructor(
    @Inject('cpu') readonly storeService: StoreService<ICpuState>,
  ) { }

  set(key: keyof ICpuState, value: ICpuState[keyof ICpuState]) {
    this.storeService.set(key, value);
  }
}
