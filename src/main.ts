import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { AUTH_PROVIDERS, authService } from 'angular2-devise-token-auth';
import { AppComponent} from './app/app.component';
import { environment } from './app/environment';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent,
  [
    ROUTER_PROVIDERS,
    AUTH_PROVIDERS,
    authService(`${environment.apiEndpoint}/auth`)
  ]
);
