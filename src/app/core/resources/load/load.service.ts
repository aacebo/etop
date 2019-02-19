import { Injectable, Inject } from '@angular/core';
import { Systeminformation } from 'systeminformation';

import { ILoadState } from './load.state';
import { Store, QueueServiceTemplate } from '../../../shared';

@Injectable()
export class LoadService extends QueueServiceTemplate<Systeminformation.CurrentLoadData> {
  constructor(
    @Inject('load') readonly store: Store<ILoadState>,
  ) { super(store); }
}
