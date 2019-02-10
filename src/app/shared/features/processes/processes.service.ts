import { Injectable, Inject } from '@angular/core';

import { IProcessesState } from './processes.state';
import { StoreService } from '../store';

@Injectable()
export class ProcessesService {
  get value() { return this.storeService.value; }

  constructor(
    @Inject('processes') private readonly storeService: StoreService<IProcessesState>,
  ) { }

  set(key: keyof IProcessesState, value: IProcessesState[keyof IProcessesState]) {
    this.storeService.set(key, value);
  }
}
