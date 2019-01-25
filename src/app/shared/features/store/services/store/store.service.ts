import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StoreService<T> extends BehaviorSubject<T> {
  constructor(value: T) {
    super(value);
  }
}
