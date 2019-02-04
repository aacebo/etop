import { UsageService } from './usage.service';
import { StoreService } from '../../../store';

describe('UsageService', () => {
  let service: UsageService;
  let store: StoreService;

  beforeEach(() => {
    store = new StoreService({ active: {}, history: [] });
    service = new UsageService(store);
  });

  it('should set active', () => {
    const spy = spyOn(store, 'next');
    service.setActive(null);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should set active and remove one history', () => {
    const arr = [];

    for (let i = 0; i < 100; i++) {
      arr.push(i);
    }

    store.next({
      active: {},
      history: arr,
    });

    const spy = spyOn(store, 'next');
    service.setActive(null);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
