import { async } from '@angular/core/testing';

import { ProcessesService } from './processes.service';
import { Store } from '../../../shared';

describe('ProcessesService', () => {
  let service: ProcessesService;
  let store: Store;

  beforeEach(async(() => {
    store = new Store({});
    service = new ProcessesService(store);
  }));

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('value should equal store state', () => {
    expect(service.value).toEqual({});
  });

  it('should set processes', () => {
    const spy = spyOn(store, 'next');
    service.set('processes', {} as any);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
