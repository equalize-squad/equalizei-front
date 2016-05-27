export class BasePage {

  private pages: Object;

  constructor() {
    this.pages = {
      'home': '/',
      'sign_up': '/sign_up'
    };
  }

  goToHome() {
    return browser.get(`${this.pages['home']}`);
  }

  goToSignUp() {
    return browser.get(`${this.pages['sign_up']}`);
  }

  currentTitle():webdriver.promise.Promise<string> {
    return element(by.css('title')).getInnerHtml();
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  wait():Promise<any> {
    return new Promise<any>((resolve) => {
      this.verifySpinner(resolve);
    });
  }

  fill(input, value:string) {
    return value.split('').forEach((c) => input.sendKeys(c));
  }

  private verifySpinner(resolve):webdriver.promise.Promise<any> {
    return element(by.css('ion-spinner')).isPresent()
      .then(
        (present) => {
          if (present) {
            setTimeout(() => this.verifySpinner(resolve), 100);
          } else {
            resolve();
          }
        }
      );
  }
}
