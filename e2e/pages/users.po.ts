import {BasePage} from './base.po';

export class UsersPage extends BasePage {

  constructor() {
    super();
  }

  getGreetings():webdriver.promise.Promise<string> {
    return element(by.css('equalizei-app h1')).getText();
  }
}
