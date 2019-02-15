import { NgModule, ModuleWithProviders } from '@angular/core';

import { Store } from './store.service';
import { StoreState } from './store.state';

@NgModule({})
export class StoreModule {
  private static readonly _state = StoreState.instance;

  static forRoot<T>(state?: T): ModuleWithProviders {
    this._state.state = new Store<T>({
      ...state,
      ...this._state.state.value,
    });

    return {
      ngModule: StoreModule,
      providers: [{
        provide: Store,
        useValue: this._state.state,
      }],
    };
  }

  static forFeature<T>(name: string, state?: T): ModuleWithProviders {
    const value = this._state.state.value;
    value[name] = new Store<T>({ ...state });
    this._state.state.next(value);

    return {
      ngModule: StoreModule,
      providers: [{
        provide: name,
        useValue: this._state.state.value[name],
      }],
    };
  }
}
