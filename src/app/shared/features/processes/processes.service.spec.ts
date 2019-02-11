import { async } from '@angular/core/testing';

import { ProcessesService } from './processes.service';
import { StoreService } from '../store';

describe('ProcessesService', () => {
  let service: ProcessesService;
  let store: StoreService;

  beforeEach(async(() => {
    store = new StoreService({});
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
