import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchProvider{

  private value = new Subject<String>();
  private enabled = new Subject<Boolean>();

  constructor() { }

  setSearch(value: String): void {
    this.value.next(value);
  }

  enable(): void {
    this.enabled.next(true);
  }

  disable(): void {
    this.enabled.next(false);
  }

  clearSearch(): void {
    this.value.next();
  }

  getActivation(): Observable<Boolean> {
    return this.enabled.asObservable();
  }

  getValue(): Observable<String> {
    return this.value.asObservable();
  }

}
