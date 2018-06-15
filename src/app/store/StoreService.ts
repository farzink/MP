import { Injectable } from '@angular/core';
import { defaultStore } from './default-store'

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  store: any
  constructor() {
    this.store = defaultStore;
  }

  getDefaultStore() {
    return this.store;
  }

  getDefaultState() {
    return this.store.getState();
  }

}