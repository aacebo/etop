import { SystemService } from './system.service';
import { StoreService } from '../store';

describe('SystemService', () => {
  let service: SystemService;
  let store: StoreService;

  beforeEach(() => {
    store = new StoreService({});
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
