import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { EqualizeiFrontAppComponent} from './app/equalizei-front.component';
import { environment } from './app/environment';

if (environment.production) {
  enableProdMode();
}

bootstrap(EqualizeiFrontAppComponent, [ROUTER_PROVIDERS]);
