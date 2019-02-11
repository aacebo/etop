import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { StoreDebugDialogComponent } from '../store-debug-dialog';

@Component({
  selector: 'app-store-debug',
  templateUrl: './store-debug.component.html',
  styleUrls: ['./store-debug.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreDebugComponent {
  constructor(
    private readonly dialog: MatDialog,
  ) { }

  onClick() {
    this.dialog.open(StoreDebugDialogComponent);
  }
}
