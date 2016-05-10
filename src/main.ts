import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { EqualizeiFrontAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(EqualizeiFrontAppComponent);
