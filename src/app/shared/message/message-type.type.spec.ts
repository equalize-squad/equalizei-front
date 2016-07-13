import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MessageType } from './message-type.type';

let type: MessageType;

describe('Type: MessageType', () => {
  it('should accept value "success"', () => {
    this.type = 'success';
    expect(this.type).toEqual('success');
  });
  it('should accept value "error"', () => {
    this.type = 'error';
    expect(this.type).toEqual('error');
  });
});
