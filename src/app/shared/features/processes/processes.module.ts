import { NgModule } from '@angular/core';

import { StoreModule } from '../store';
import { ProcessesService } from './processes.service';
import { IProcessesState } from './processes.state';

@NgModule({
  imports: [
    StoreModule.forFeature<IProcessesState>('processes', {}),
  ],
  providers: [
    ProcessesService,
  ],
})
export class ProcessesModule { }
