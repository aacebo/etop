import { map } from 'rxjs/operators';

import { StoreService } from '../features/store';
import { environment } from '../../../environments/environment';

export class QueueServiceTemplate<T> {
  get value() { return this.storeService.value; }
  get active() { return this.storeService.pipe(map(v => v.active)); }
  get history() { return this.storeService.pipe(map(v => v.history)); }

  constructor(
    readonly storeService: StoreService<{ active?: T; history: T[]; }>,
  ) { }

  setActive(value: T) {
    const active = this.value.active;
    const history = this.value.history.slice();

    if (history.length === environment.queueSize) {
      history.pop();
    }

    history.unshift(active);

    this.storeService.set('active', value);
    this.storeService.set('history', history);
  }
}
