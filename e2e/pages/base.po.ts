export class BasePage {

  private PAGE_HOME = '/';
  private PAGE_SIGN_UP = '/sign_up';

  constructor() { }

  goToHome() {
    return browser.get(this.PAGE_HOME);
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
