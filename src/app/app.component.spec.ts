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
import { SpyLocation } from '@angular/common/testing';

import { Component, provide, ComponentResolver, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageService, MessageComponent } from './shared/message/index';

beforeEachProviders(() => {
  let config: RouterConfig = [{path: '', component: AppComponent}];
  return [
    RouterOutletMap,
    {provide: UrlSerializer, useClass: DefaultUrlSerializer},
    {provide: Location, useClass: SpyLocation},
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