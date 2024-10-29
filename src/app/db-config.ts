import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'username', keypath: 'username', options: { unique: true } },
      { name: 'password', keypath: 'password', options: { unique: false } }
    ]
  }]
};