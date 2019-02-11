import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '../store';
import { StoreComponent } from './components';

@NgModule({
  declarations: [StoreComponent],
  exports: [StoreComponent],
  imports: [CommonModule, StoreModule],
})
export class StoreDebugModule { }
