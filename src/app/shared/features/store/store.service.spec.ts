import { Store } from './store.service';

describe('Store', () => {
  let service: Store<{ test: string }>;

  beforeEach(() => {
    service = new Store<{ test: string }>({ test: 'test' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get key value', () => {
    expect(service.get('test')).toEqual('test');
  });
});
