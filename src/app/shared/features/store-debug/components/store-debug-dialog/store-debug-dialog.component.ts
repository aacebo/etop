import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { StoreService } from '../../../store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-store-debug-dialog',
  templateUrl: './store-debug-dialog.component.html',
  styleUrls: ['./store-debug-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreDebugDialogComponent {
  readonly keys: Observable<string[]>;

  constructor(readonly storeService: StoreService) {
    this.keys = this.storeService.pipe(map(v => Object.keys(v)));
  }
}
