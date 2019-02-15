import { Injectable, Inject } from '@angular/core';
import { Systeminformation } from 'systeminformation';

import { INetworkState } from './network.state';
import { Store } from '../store';
import { QueueServiceTemplate } from '../../templates';

@Injectable()
export class NetworkService extends QueueServiceTemplate<Systeminformation.NetworkStatsData[]> {
  constructor(
    @Inject('network') readonly store: Store<INetworkState>,
  ) { super(store); }
}
