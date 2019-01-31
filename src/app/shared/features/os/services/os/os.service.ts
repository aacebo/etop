import { Injectable, Inject } from '@angular/core';

import { IOperatingSystemState } from '../../os.state';
import { StoreService } from '../../../store';
import { IOperatingSystem } from '../../models';

@Injectable()
export class OperatingSystemService {
  get value() { return this.storeService.value; }

  constructor(
    @Inject('os') private readonly storeService: StoreService<IOperatingSystemState>,
  ) { }

  setOs(data: IOperatingSystem) {
    this.storeService.set('os', data);
  }
}
