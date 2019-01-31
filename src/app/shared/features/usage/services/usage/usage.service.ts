import { Injectable, Inject } from '@angular/core';

import { IUsageState } from '../../usage.state';
import { StoreService } from '../../../store';
import { IUsage } from '../../models';

@Injectable()
export class UsageService {
  get value() { return this.storeService.value; }

  constructor(
    @Inject('usage') private readonly storeService: StoreService<IUsageState>,
  ) { }

  setActive(value: IUsage) {
    const active = this.value.active;
    const history = this.value.history.slice();

    if (history.length === 100) {
      history.pop();
    }

    history.unshift(active);

    this.storeService.set('active', value);
    this.storeService.set('history', history);
  }
}
