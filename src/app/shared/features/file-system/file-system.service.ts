import { Injectable, Inject } from '@angular/core';
import { Systeminformation } from 'systeminformation';

import { IFileSystemState } from './file-system.state';
import { Store } from '../store';
import { QueueServiceTemplate } from '../../templates';

@Injectable()
export class FileSystemService extends QueueServiceTemplate<Systeminformation.FsStatsData> {
  constructor(
    @Inject('file-system') readonly store: Store<IFileSystemState>,
  ) { super(store); }

  set(key: keyof IFileSystemState, value: IFileSystemState[keyof IFileSystemState]) {
    this.store.set(key, value);
  }
}
