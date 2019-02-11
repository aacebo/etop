import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { StoreModule } from '../store';
import { StoreDebugComponent, StoreDebugDialogComponent, StoreDebugTreeComponent } from './components';

@NgModule({
  declarations: [StoreDebugComponent, StoreDebugDialogComponent, StoreDebugTreeComponent],
  exports: [StoreDebugComponent],
  entryComponents: [StoreDebugDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    StoreModule,
  ],
})
export class StoreDebugModule { }
