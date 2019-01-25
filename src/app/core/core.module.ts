import { NgModule, ErrorHandler } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

import { AppErrorHandlerService } from './error-handler';

const modules = [];

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
