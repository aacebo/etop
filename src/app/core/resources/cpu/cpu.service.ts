import { Injectable, Inject } from '@angular/core';

import { ICpuState } from './cpu.state';
import { Store } from '../../../shared';

@Injectable()
export class CpuService {
  get value() { return this.store.value; }

  constructor(
    @Inject('cpu') readonly store: Store<ICpuState>,
  ) { }

  set(key: keyof ICpuState, value: ICpuState[keyof ICpuState]) {
    this.store.set(key, value);
  }
}
