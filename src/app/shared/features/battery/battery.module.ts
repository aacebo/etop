import { NgModule } from '@angular/core';

import { StoreModule } from '../store';
import { BatteryService } from './battery.service';
import { IBatteryState } from './battery.state';

@NgModule({
  imports: [
    StoreModule.forFeature<IBatteryState>('battery', {}),
  ],
  providers: [
    BatteryService,
  ],
})
export class BatteryModule { }
