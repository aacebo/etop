import { NgModule } from '@angular/core';

import { StoreModule } from '../../../shared';
import { IMemoryState } from './memory.state';
import { MemoryService } from './memory.service';

@NgModule({
  imports: [
    StoreModule.forFeature<IMemoryState>('memory', {
      history: [],
    }),
  ],
  providers: [
    MemoryService,
  ],
})
export class MemoryModule { }
