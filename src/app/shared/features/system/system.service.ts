import { Injectable, Inject } from '@angular/core';

import { ISystemState } from './system.state';
import { StoreService } from '../store';

@Injectable()
export class SystemService {
  get value() { return this.storeService.value; }

  constructor(
    @Inject('system') private readonly storeService: StoreService<ISystemState>,
  ) { }

  set(key: keyof ISystemState, value: ISystemState[keyof ISystemState]) {
    this.storeService.set(key, value);
  }
}
