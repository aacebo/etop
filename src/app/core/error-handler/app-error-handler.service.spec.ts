import { TestBed, async } from '@angular/core/testing';
import { ErrorHandler } from '@angular/core';

import { AppErrorHandlerService } from './app-error-handler.service';

describe('AppErrorHandlerService', () => {
  let errorHandler: AppErrorHandlerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ErrorHandler,
          useClass: AppErrorHandlerService,
        },
      ],
    });

    errorHandler = TestBed.get(ErrorHandler);
  }));

  it('should be defined', () => {
    expect(errorHandler).toBeDefined();
  });

  it('should handle error', () => {
    const spy = spyOn(console, 'error');
    errorHandler.handleError(new Error('test'));
    expect(spy).toHaveBeenCalled();
  });
});
