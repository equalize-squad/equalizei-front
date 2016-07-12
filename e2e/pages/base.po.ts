export class BasePage {

  public PAGE_DASHBOARD = '/dashboard';
  public PAGE_USERS = '/users';
  public PAGE_SIGN_UP = '/sign-up';
  public PAGE_SIGN_IN = '/sign-in';

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

  getAppMessage() {
    return element(by.css('app-message md-card'));
  }  
}