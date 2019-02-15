import { Injectable, Inject } from '@angular/core';

import { IBatteryState } from './battery.state';
import { Store } from '../store';

@Injectable()
export class BatteryService {
  get value() { return this.store.value; }

  constructor(
    @Inject('battery') private readonly store: Store<IBatteryState>,
  ) { }

  set(key: keyof IBatteryState, value: IBatteryState[keyof IBatteryState]) {
    this.store.set(key, value);
  }
}
