import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  async
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Message } from './message.model';
import { MessageComponent } from './message.component';
import { MessageComponentPage } from './message.component.po';
import { MessageType } from './message-type.type';

describe('Component: Message', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MessageComponent]);

  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MessageComponent], (component: MessageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MessageComponentControllerUsingObject)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MessageComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  describe('Using message object', () => {

    let componentDebugElement,
        componentInstance: MessageComponent,
        componentControllerInstance: MessageComponentControllerUsingObject,
        po: MessageComponentPage;

    it('should render a message', () => {
        return builder.createAsync(MessageComponentControllerUsingObject).then((fixture: ComponentFixture<any>) => {
          componentDebugElement = fixture.debugElement.query(By.directive(MessageComponent));
          componentControllerInstance = fixture.debugElement.componentInstance;
          componentInstance = componentDebugElement.componentInstance;

          let type: MessageType = 'success'
          let title: String = 'YAY';
          let description: String = `There's a success!`;
          let success = new Message(type, title, description);
          componentControllerInstance.message = success;
          fixture.detectChanges();

          po = new MessageComponentPage(componentDebugElement.nativeElement);
          expect(componentInstance.message).toBe(success);
          expect(po.isVisible()).toBe(true);
          expect(po.getClass()).toBe(type);
          expect(po.getTitle()).toBe(title);
          expect(po.getContent()).toContain(description);
        });
    });

    it('should not render a message when a message is not given or has no type', ()=> {
      return builder.createAsync(MessageComponentControllerUsingObject).then((fixture: ComponentFixture<any>) => {
          componentDebugElement = fixture.debugElement.query(By.directive(MessageComponent));
          componentControllerInstance = fixture.debugElement.componentInstance;
          componentInstance = componentDebugElement.componentInstance;

          let messageNull = null;
          let messageWithoutType = new Message(null, 'a title', 'some description');
          [messageNull, messageWithoutType].forEach((message)=> {

            componentControllerInstance.message = message;            
            fixture.detectChanges();

            po = new MessageComponentPage(componentDebugElement.nativeElement);
            expect(po.isVisible()).toBe(false);
          })
        });
    });
  });

  describe('Using parameters', () => {

    let componentDebugElement,
        componentInstance: MessageComponent,
        componentControllerInstance: MessageComponentControllerUsingParameters,
        po: MessageComponentPage;

    it('should render a message', () => {
        return builder.createAsync(MessageComponentControllerUsingParameters).then((fixture: ComponentFixture<any>) => {
          componentDebugElement = fixture.debugElement.query(By.directive(MessageComponent));
          componentControllerInstance = fixture.debugElement.componentInstance;
          componentInstance = componentDebugElement.componentInstance;

          let type: MessageType = 'error'
          let title: String = 'Ops!';
          let description: String = `There's a problem!`;
          componentControllerInstance.type = type
          componentControllerInstance.title = title
          componentControllerInstance.description = description
          fixture.detectChanges();

          po = new MessageComponentPage(componentDebugElement.nativeElement);
          expect(po.isVisible()).toBe(true);
          expect(po.getClass()).toBe(type);
          expect(po.getTitle()).toBe(title);
          expect(po.getContent()).toContain(description);
        });
    });

    it('should not render a message when type is not given', () => {
        return builder.createAsync(MessageComponentControllerUsingParameters).then((fixture: ComponentFixture<any>) => {
          componentDebugElement = fixture.debugElement.query(By.directive(MessageComponent));
          componentControllerInstance = fixture.debugElement.componentInstance;
          componentInstance = componentDebugElement.componentInstance;

          componentControllerInstance.type = null;
          componentControllerInstance.title = 'Ops!';
          componentControllerInstance.description = `There's a problem!`;
          fixture.detectChanges();

          po = new MessageComponentPage(componentDebugElement.nativeElement);
          expect(po.isVisible()).toBe(false);
        });
    });
  });
});

@Component({
  selector: 'test',
  template: `
    <app-message [message]="message"></app-message>
  `,
  directives: [MessageComponent]
})
class MessageComponentControllerUsingObject {
  message:Message = null;
}

@Component({
  selector: 'test',
  template: `
    <app-message [type]="type" [title]="title" [description]="description"></app-message>
  `,
  directives: [MessageComponent]
})
class MessageComponentControllerUsingParameters {
  type:String = null;
  title:String = null;
  description:String = null;
}
