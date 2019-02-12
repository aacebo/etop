import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { StoreModule } from '../store';
import { JsonTreeModule } from '../json-tree';
import { StoreDebugComponent, StoreDebugDialogComponent } from './components';

@NgModule({
  declarations: [StoreDebugComponent, StoreDebugDialogComponent],
  exports: [StoreDebugComponent],
  entryComponents: [StoreDebugDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    StoreModule,
    JsonTreeModule,
  ],
})
export class StoreDebugModule { }
