import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StoreService<T> extends BehaviorSubject<T> {
  constructor(value: T) {
    super(value);
  }

  set(key: keyof T, value: any) {
    const data = this.value;
    data[key] = value;
    this.next(data);
  }

  get(key: string) {
    return this.value[key];
  }
}
