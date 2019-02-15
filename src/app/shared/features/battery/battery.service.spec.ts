import { async } from '@angular/core/testing';

import { BatteryService } from './battery.service';
import { Store } from '../store';

describe('BatteryService', () => {
  let service: BatteryService;
  let store: Store;

  beforeEach(async(() => {
    store = new Store({});
    service = new BatteryService(store);
  }));

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('value should equal store state', () => {
    expect(service.value).toEqual({});
  });

  it('should set battery', () => {
    const spy = spyOn(store, 'next');
    service.set('battery', {} as any);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
