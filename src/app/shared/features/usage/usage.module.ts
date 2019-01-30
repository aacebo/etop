import { NgModule } from '@angular/core';

import { StoreModule } from '../store';
import { IUsageState } from './usage.state';
import { UsageService } from './services';

@NgModule({
  imports: [
    StoreModule.forFeature<IUsageState>('usage', {
      history: [],
    }),
  ],
  providers: [
    UsageService,
  ],
})
export class UsageModule { }
