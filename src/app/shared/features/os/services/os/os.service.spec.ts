import { OperatingSystemService } from './os.service';
import { StoreService } from '../../../store';

describe('OperatingSystemService', () => {
  let service: OperatingSystemService;
  let store: StoreService;

  beforeEach(() => {
    store = new StoreService({});
    service = new OperatingSystemService(store);
  });

  it('value should equal store state', () => {
    expect(service.value).toEqual({});
  });

  it('should set os value', () => {
    const spy = spyOn(store, 'next');
    service.setOs(null);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
