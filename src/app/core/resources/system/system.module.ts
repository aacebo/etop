import { NgModule } from '@angular/core';

import { StoreModule } from '../../../shared';
import { SystemService } from './system.service';
import { ISystemState } from './system.state';

@NgModule({
  imports: [
    StoreModule.forFeature<ISystemState>('system', {}),
  ],
  providers: [
    SystemService,
  ],
})
export class SystemModule { }
