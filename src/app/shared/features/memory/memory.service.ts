import { Injectable, Inject } from '@angular/core';
import { Systeminformation } from 'systeminformation';

import { IMemoryState } from './memory.state';
import { Store } from '../store';
import { QueueServiceTemplate } from '../../templates';

@Injectable()
export class MemoryService extends QueueServiceTemplate<Systeminformation.MemData> {
  constructor(
    @Inject('memory') readonly store: Store<IMemoryState>,
  ) { super(store); }
}
