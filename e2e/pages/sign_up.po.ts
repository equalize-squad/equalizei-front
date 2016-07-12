import {BasePage} from './base.po';

export class SignUpPage extends BasePage {

  private form;
  private nameInput;
  private emailInput;
  private passwordInput;
  private passwordConfirmationInput;
  private submitButton;
  private cancelButton;

  constructor() {
    super();
    this.form = element(by.id('sign-up-form'));
    this.nameInput = this.form.element(by.id('user-name-input'));
    this.emailInput = this.form.element(by.id('user-email-input'));
    this.passwordInput = this.form.element(by.id('user-password-input'));
    this.passwordConfirmationInput = this.form.element(by.id('user-password-confirmation-input'));
    this.submitButton = this.form.element(by.css('button[type="submit"]'));
    this.cancelButton = this.form.element(by.className('.md-warn'));
  }

  getGreetings():webdriver.promise.Promise<string> {
    return element(by.css('app-users p')).getText();
  }

  setName(value: string) {
    return this.nameInput.sendKeys(value);
  }

  setEmail(value: string) {
    return this.emailInput.sendKeys(value);
  }

  setPassword(value: string) {
    return this.passwordInput.sendKeys(value);
  }

  setPasswordConfirmation(value: string) {
    return this.passwordConfirmationInput.sendKeys(value);
  }

  signUp(name: string, email: string) {
    this.setName(name);
    this.setEmail(email);
    this.setPassword("rafa123eq");
    this.setPasswordConfirmation("rafa123eq");
    return this.submitButton.click();
  }

  canSubmit():webdriver.promise.Promise<boolean> {
    return this.submitButton.isEnabled();
  }

  cancel() {
    return this.cancelButton.click();
  }
}
