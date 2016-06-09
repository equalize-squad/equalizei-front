import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import { AppComponent } from './app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: EqualizeiFront', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Equalizei rocks!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('Equalizei rocks!');
  }));
});
