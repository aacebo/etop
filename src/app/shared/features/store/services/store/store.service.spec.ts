import { StoreService } from './store.service';

describe('StoreService', () => {
  let service: StoreService<any>;

  beforeEach(() => {
    service = new StoreService<any>({ test: 'test' });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
