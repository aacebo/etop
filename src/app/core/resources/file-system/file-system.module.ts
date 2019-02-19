import { NgModule } from '@angular/core';

import { StoreModule } from '../../../shared';
import { IFileSystemState } from './file-system.state';
import { FileSystemService } from './file-system.service';

@NgModule({
  imports: [
    StoreModule.forFeature<IFileSystemState>('file-system', {
      history: [],
    }),
  ],
  providers: [
    FileSystemService,
  ],
})
export class FileSystemModule { }
