import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync,
} from '@angular/core/testing';

import { ActivatedRoute, DefaultUrlSerializer, Router, RouterConfig, RouterOutletMap, UrlSerializer } from '@angular/router';
import { Location, LocationStrategy } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { MockLocationStrategy } from '@angular/common/testing/mock_location_strategy';
import { SpyLocation } from '@angular/common/testing';

import { By } from '@angular/platform-browser';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide, ComponentResolver, Injector } from '@angular/core';
import { Headers, HTTP_PROVIDERS, BaseRequestOptions, XHRBackend, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AuthenticationService } from '../+users/shared/authentication.service';
import { AppComponent} from '../app.component';
import { SignUpComponent } from './sign-up.component';
import { MessageService, MessageComponent } from '../shared/message/index';
import { User } from '../+users/user/shared/user.model';

@Component({template:''})
export class EmptyComponent {}

class MockAuthenticationService extends AuthenticationService {
  constructor() {
    super(null);
  }
  public signUp(name:String, email:String, password:String, password_confirmation:String):Observable<User> {
    return Observable.create(observer => {
      observer.next(new User());
      observer.complete();
    });
  }
}
let authenticationServiceProviderMock = {provide: AuthenticationService, useFactory: () => { return new MockAuthenticationService()}};

describe('Component: SignUp', () => {
  let builder: TestComponentBuilder;

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
      authenticationServiceProviderMock,
      SignUpComponent
    ];
  });

  beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    builder = tcb;
  }));

  it('should inject the component', inject([SignUpComponent], (component: SignUpComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder
      .overrideProviders(SignUpComponent, [authenticationServiceProviderMock])
      .overrideDirective(SignUpComponent, MessageComponent, EmptyComponent)
      .createAsync(SignUpComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SignUpComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-sign-up></app-sign-up>
  `,
  directives: [SignUpComponent]
})
class SignUpComponentTestController {
}