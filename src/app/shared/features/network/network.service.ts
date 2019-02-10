import { Injectable, Inject } from '@angular/core';
import { Systeminformation } from 'systeminformation';

import { INetworkState } from './network.state';
import { StoreService } from '../store';
import { QueueServiceTemplate } from '../../templates';

@Injectable()
export class NetworkService extends QueueServiceTemplate<Systeminformation.NetworkStatsData[]> {
  constructor(
    @Inject('network') readonly storeService: StoreService<INetworkState>,
  ) { super(storeService); }
}
