import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

import { AppComponent} from '../app.component';
import { AUTH_PROVIDERS, authService } from 'angular2-devise-token-auth';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import { Headers, HTTP_PROVIDERS, BaseRequestOptions, XHRBackend, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { SignUpComponent } from './sign-up.component';

describe('Component: SignUp', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    provide(XHRBackend, {useClass: MockBackend}),
    AUTH_PROVIDERS,
    authService(`http://localhost/auth`),
    SignUpComponent
  ]);

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SignUpComponent], (component: SignUpComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SignUpComponentTestController)
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
