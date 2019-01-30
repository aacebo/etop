export class StoreState {
  private static _instance: StoreState;

  static get instance() {
    if (!StoreState._instance) {
        StoreState._instance = new StoreState();
    }

    return StoreState._instance;
  }

  state: any = {};

  private constructor() { }
}
