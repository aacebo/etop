import { SystemService } from './system.service';
import { Store } from '../../../shared';

describe('SystemService', () => {
  let service: SystemService;
  let store: Store;

  beforeEach(() => {
    store = new Store({});
    service = new SystemService(store);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('value should equal store state', () => {
    expect(service.value).toEqual({});
  });

  it('should set os value', () => {
    const spy = spyOn(store, 'next');
    service.set('system', null);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
