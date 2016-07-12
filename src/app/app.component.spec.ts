import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import { ActivatedRoute, DefaultUrlSerializer, Router, RouterConfig, RouterOutletMap, UrlSerializer } from '@angular/router';
import { Location, LocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { MockLocationStrategy } from '@angular/common/testing/mock_location_strategy';
import { SpyLocation } from '@angular/common/testing';

import { Component, provide, ComponentResolver, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageService, MessageComponent } from './shared/message/index';

class MockRouter extends Router {
  constructor() {
    super(null, null, null, null, null, null, null);
  }
}
let routerProviderMock = {provide: Router, useFactory: () => { return new MockRouter()}};

beforeEachProviders(() => {
  let config: RouterConfig = [{path: '', component: AppComponent}];
  return [
     RouterOutletMap,
      {provide: UrlSerializer, useClass: DefaultUrlSerializer},
      {provide: Location, useClass: SpyLocation},
      {provide: LocationStrategy, useClass: MockLocationStrategy},
      {
        provide: Router,
        useFactory: (resolver: ComponentResolver, urlSerializer: UrlSerializer, outletMap: RouterOutletMap, location: Location, injector: Injector) => {
          return new Router(AppComponent, resolver, urlSerializer, outletMap, location, injector, config);
        },
        deps: [ComponentResolver, UrlSerializer, RouterOutletMap, Location, Injector]
      },
      {provide: ActivatedRoute, useFactory: (r: Router) => r.routerState.root, deps: [Router]},
    MessageService,
    AppComponent
  ]
});

describe('App: AppComponent', () => {
  it('should create the app', inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));
  it('should have as title \'Equalize rocks!\'', inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('Equalize rocks!');
  }));
});
