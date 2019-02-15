import { map } from 'rxjs/operators';

import { Store } from '../features/store';
import { environment } from '../../../environments/environment';

export class QueueServiceTemplate<T> {
  get value() { return this.store.value; }
  get active() { return this.store.pipe(map(v => v.active)); }
  get history() { return this.store.pipe(map(v => v.history)); }

  constructor(
    readonly store: Store<{ active?: T; history: T[]; }>,
  ) { }

  setActive(value: T) {
    const active = this.value.active;
    const history = this.value.history.slice();

    if (history.length === environment.queueSize) {
      history.shift();
    }

    history.push(active);

    this.store.set('active', value);
    this.store.set('history', history);
  }
}
