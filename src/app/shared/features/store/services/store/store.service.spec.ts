import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService<{ test: string }>;

  beforeEach(() => {
    service = new StoreService<{ test: string }>({ test: 'test' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get key value', () => {
    expect(service.get('test')).toEqual('test');
  });
});
