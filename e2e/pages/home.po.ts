import {BasePage} from './base.po';

export class HomePage extends BasePage {

  constructor() {
    super();
  }

  getGreetings():webdriver.promise.Promise<string> {
    return element(by.css('equalizei-app h1')).getText();
  }
}
