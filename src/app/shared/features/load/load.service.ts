import { Injectable, Inject } from '@angular/core';
import { Systeminformation } from 'systeminformation';

import { ILoadState } from './load.state';
import { StoreService } from '../store';
import { QueueServiceTemplate } from '../../templates';

@Injectable()
export class LoadService extends QueueServiceTemplate<Systeminformation.CurrentLoadData> {
  constructor(
    @Inject('load') readonly storeService: StoreService<ILoadState>,
  ) { super(storeService); }
}
