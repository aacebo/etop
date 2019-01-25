import { NgModule, ModuleWithProviders } from '@angular/core';

import { StoreService } from './services';

@NgModule({})
export class StoreModule {
  private static _state;

  static forRoot<T>(state: T): ModuleWithProviders {
    this._state = state;
    return {
      ngModule: StoreModule,
      providers: [{
        provide: StoreService,
        useValue: new StoreService<T>(this._state),
      }],
    };
  }

  static forFeature<T>(name: string, state: T): ModuleWithProviders {
    this._state[name] = state;
    return {
      ngModule: StoreModule,
      providers: [{
        provide: StoreService,
        useValue: new StoreService<T>(this._state[name]),
      }],
    };
  }
}
