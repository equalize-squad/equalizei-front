import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';

import { SignUpComponent } from './sign-up.component';

describe('Component: SignUp', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SignUpComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SignUpComponent],
      (component: SignUpComponent) => {
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
