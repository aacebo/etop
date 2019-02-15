import { Store } from './store.service';

export class StoreState {
  private static _instance: StoreState;

  static get instance() {
    /* istanbul ignore else */
    if (!StoreState._instance) {
        StoreState._instance = new StoreState();
    }

    return StoreState._instance;
  }

  state = new Store({});

  private constructor() { }
}
