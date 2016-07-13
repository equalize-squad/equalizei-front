import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { Message } from './message.model';

describe('Model: Message', () => {
  it('should construct without Type, Title nor Description', () => {
    this.model = new Message();
    expect(this.model.type).toBeUndefined();
    expect(this.model.title).toBeUndefined();
    expect(this.model.description).toBeUndefined();
  });
  it('should construct with Type, Title and Description', () => {
    this.model = new Message('success', 'title', 'description');
    expect(this.model.type).toBe('success');
    expect(this.model.title).toBe('title');
    expect(this.model.description).toBe('description');
  });
});
