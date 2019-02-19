import { NgModule, ErrorHandler } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

import { AppErrorHandlerService } from './error-handler';
import {
  CpuModule,
  MemoryModule,
  SystemModule,
  ProcessesModule,
  BatteryModule,
  NetworkModule,
  LoadModule,
  FileSystemModule,
} from './resources';

const modules = [
  CpuModule,
  MemoryModule,
  SystemModule,
  ProcessesModule,
  BatteryModule,
  NetworkModule,
  LoadModule,
  FileSystemModule,
];

@NgModule({
  imports: modules,
  exports: modules,
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandlerService },
  ],
})
export class CoreModule {
  constructor(private readonly matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.setDefaultFontSetClass('mdi');
  }
}
