import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { ChartModule } from '../chart';
import { FileSystemComponent } from './pages';

@NgModule({
  declarations: [FileSystemComponent],
  exports: [],
  imports: [CommonModule, ChartModule, MatCardModule],
})
export class FileSystemModule { }
