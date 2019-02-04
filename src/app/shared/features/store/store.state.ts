import { StoreService } from './services';

export class StoreState {
  private static _instance: StoreState;

  static get instance() {
    /* istanbul ignore else */
    if (!StoreState._instance) {
        StoreState._instance = new StoreState();
    }

    return StoreState._instance;
  }

  state: StoreService = new StoreService({});

  private constructor() { }
}
