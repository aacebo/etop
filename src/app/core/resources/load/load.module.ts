import { NgModule } from '@angular/core';

import { StoreModule } from '../../../shared';
import { ILoadState } from './load.state';
import { LoadService } from './load.service';

@NgModule({
  imports: [
    StoreModule.forFeature<ILoadState>('load', {
      history: [],
    }),
  ],
  providers: [
    LoadService,
  ],
})
export class LoadModule { }
