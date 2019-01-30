import { NgModule, ModuleWithProviders } from '@angular/core';

import { StoreService } from './services';
import { StoreState } from './store.state';

@NgModule({})
export class StoreModule {
  private static _state = StoreState.instance;

  static forRoot<T>(state?: T): ModuleWithProviders {
    this._state.state = state ? state : {};

    return {
      ngModule: StoreModule,
      providers: [{
        provide: StoreService,
        useValue: new StoreService<T>({ ...this._state.state }),
      }],
    };
  }

  static forFeature<T>(name: string, state?: T): ModuleWithProviders {
    this._state.state[name] = state;

    return {
      ngModule: StoreModule,
      providers: [{
        provide: StoreService,
        useValue: new StoreService<T>({ ...this._state.state[name] }),
      }],
    };
  }
}
