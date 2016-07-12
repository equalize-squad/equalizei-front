import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

import { ActivatedRoute, DefaultUrlSerializer, Router, RouterConfig, RouterOutletMap, UrlSerializer } from '@angular/router';
import { Location, LocationStrategy } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';

import { By } from '@angular/platform-browser';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide, ComponentResolver, Injector} from '@angular/core';
import { Headers, HTTP_PROVIDERS, BaseRequestOptions, XHRBackend, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AUTH_PROVIDERS, authService } from 'angular2-devise-token-auth';
import { AppComponent} from '../app.component';
import { SignInComponent } from './sign-in.component';

describe('Component: SignIn', () => {
  let builder: TestComponentBuilder;

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
      AUTH_PROVIDERS,
      authService(`http://localhost/auth`),
      SignInComponent
    ];
  });

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([XHRBackend, SignInComponent], (mockBackend: MockBackend, component: SignInComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SignInComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SignInComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-sign-in></app-sign-in>
  `,
  directives: [SignInComponent]
})
class SignInComponentTestController {
}
