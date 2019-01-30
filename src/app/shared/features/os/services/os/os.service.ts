import { Injectable } from '@angular/core';

import { IOperatingSystemState } from '../../os.state';
import { StoreService } from '../../../store';
import { IOperatingSystem } from '../../models';

@Injectable()
export class OperatingSystemService {
  get value() { return this.storeService.value; }

  constructor(private readonly storeService: StoreService<IOperatingSystemState>) { }

  set(data: IOperatingSystem) {
    this.storeService.set('os', data);
  }
}
