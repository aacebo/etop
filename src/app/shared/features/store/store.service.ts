import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Store<T = any> extends BehaviorSubject<T> {
  constructor(value: T) {
    /* istanbul ignore next */
    super(value);
  }

  set(key: keyof T, value: T[keyof T]) {
    const data = this.value;
    data[key] = value;
    this.next(data);
  }

  get(key: keyof T) {
    return this.value[key];
  }
}
