import { NgModule } from '@angular/core';

import { StoreModule } from '../store';
import { NetworkService } from './network.service';
import { INetworkState } from './network.state';

@NgModule({
  imports: [
    StoreModule.forFeature<INetworkState>('network', {
      history: [],
    }),
  ],
  providers: [
    NetworkService,
  ],
})
export class NetworkModule { }
