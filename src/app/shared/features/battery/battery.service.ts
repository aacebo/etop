import { Injectable, Inject } from '@angular/core';

import { IBatteryState } from './battery.state';
import { StoreService } from '../store';

@Injectable()
export class BatteryService {
  get value() { return this.storeService.value; }

  constructor(
    @Inject('battery') private readonly storeService: StoreService<IBatteryState>,
  ) { }

  set(key: keyof IBatteryState, value: IBatteryState[keyof IBatteryState]) {
    this.storeService.set(key, value);
  }
}
