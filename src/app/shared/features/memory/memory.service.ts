import { Injectable, Inject } from '@angular/core';
import { Systeminformation } from 'systeminformation';

import { IMemoryState } from './memory.state';
import { StoreService } from '../store';
import { QueueServiceTemplate } from '../../templates';

@Injectable()
export class MemoryService extends QueueServiceTemplate<Systeminformation.MemData> {
  constructor(
    @Inject('memory') readonly storeService: StoreService<IMemoryState>,
  ) { super(storeService); }
}
