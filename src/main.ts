import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AUTH_PROVIDERS, authService } from 'angular2-devise-token-auth';
import { AppComponent} from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { environment } from './app/environment';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent,
  [
    AUTH_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    authService(`${environment.apiEndpoint}/auth`)
  ]
);
