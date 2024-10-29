import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './db-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(NgxIndexedDBModule.forRoot(dbConfig))
  ]
};