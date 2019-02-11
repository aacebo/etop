import { Component, ChangeDetectionStrategy } from '@angular/core';

import { StoreService } from '../../../store';

@Component({
  selector: 'app-store-debug-dialog',
  templateUrl: './store-debug-dialog.component.html',
  styleUrls: ['./store-debug-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreDebugDialogComponent {
  constructor(private readonly storeService: StoreService) {
  }
}
