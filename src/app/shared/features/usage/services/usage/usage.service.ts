import { Injectable } from '@angular/core';

import { IUsageState } from '../../usage.state';
import { StoreService } from '../../../store';
import { IUsage } from '../../models';

@Injectable()
export class UsageService {
  get value() { return this.storeService.value; }

  constructor(private readonly storeService: StoreService<IUsageState>) { }

  set(key: keyof IUsageState, value: IUsage) {
    this.storeService.set(key, value);
  }
}
