import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '../../../store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-store-debug-dialog',
  templateUrl: './store-debug-dialog.component.html',
  styleUrls: ['./store-debug-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreDebugDialogComponent {
  readonly keys: Observable<string[]>;

  constructor(readonly store: Store) {
    this.keys = this.store.pipe(map(v => Object.keys(v)));
  }
}
