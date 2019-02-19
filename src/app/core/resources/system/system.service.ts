import { Injectable, Inject } from '@angular/core';

import { ISystemState } from './system.state';
import { Store } from '../../../shared';

@Injectable()
export class SystemService {
  get value() { return this.store.value; }

  constructor(
    @Inject('system') private readonly store: Store<ISystemState>,
  ) { }

  set(key: keyof ISystemState, value: ISystemState[keyof ISystemState]) {
    this.store.set(key, value);
  }
}
