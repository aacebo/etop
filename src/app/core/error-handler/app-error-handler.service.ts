import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandlerService implements ErrorHandler {
  handleError(error: any) {
    console.error(error);
  }
}
