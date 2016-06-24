export class BasePage {

  private PAGE_USERS = '/users';
  private PAGE_SIGN_UP = '/sign-up';

  constructor() { }

  goToUsers() {
    return browser.get(this.PAGE_USERS);
  }

  goToSignUp() {
    return browser.get(this.PAGE_SIGN_UP);
  }

  currentTitle():webdriver.promise.Promise<string> {
    return element(by.css('title')).getInnerHtml();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }
}
