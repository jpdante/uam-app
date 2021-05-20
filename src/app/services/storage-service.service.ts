import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {

  }

  async init() {
    console.log("Init");
    const storage = await this.storage.create();
    this._storage = storage;
    console.log("Finish Init");
  }

  public async set(key: string, value: any): Promise<any> {
    console.log("Set " + key + " = " + value);
    return this._storage.set(key, value);
  }

  public async get(key: string): Promise<any> {
    console.log("Get " + key);
    return this._storage.get(key);
  }
}