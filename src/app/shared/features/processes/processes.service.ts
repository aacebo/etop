import { Injectable, Inject } from '@angular/core';

import { IProcessesState } from './processes.state';
import { Store } from '../store';

@Injectable()
export class ProcessesService {
  get value() { return this.store.value; }

  constructor(
    @Inject('processes') private readonly store: Store<IProcessesState>,
  ) { }

  set(key: keyof IProcessesState, value: IProcessesState[keyof IProcessesState]) {
    this.store.set(key, value);
  }
}
