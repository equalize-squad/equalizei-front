import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EqualizeiFrontAppComponent } from '../app/equalizei-front.component';

beforeEachProviders(() => [EqualizeiFrontAppComponent]);

describe('App: EqualizeiFront', () => {
  it('should create the app',
      inject([EqualizeiFrontAppComponent], (app: EqualizeiFrontAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Equalizei rocks!\'',
      inject([EqualizeiFrontAppComponent], (app: EqualizeiFrontAppComponent) => {
    expect(app.title).toEqual('Equalizei rocks!');
  }));
});
