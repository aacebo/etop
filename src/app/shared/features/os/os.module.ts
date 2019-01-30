import { NgModule } from '@angular/core';

import { StoreModule } from '../store';
import { OperatingSystemService } from './services';
import { IOperatingSystemState } from './os.state';

@NgModule({
  imports: [
    StoreModule.forFeature<IOperatingSystemState>('os', {}),
  ],
  providers: [
    OperatingSystemService,
  ],
})
export class OperatingSystemModule { }
