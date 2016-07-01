import {Callback, expect} from '../support/config';
import {SignUpPage} from '../pages/sign_up.po';

export = function() {

  let page = new SignUpPage();
  const INVALID_DATA = "";
  const NAME = "Rafa";
  const EMAIL = "rafa@gmail.com";

  this.Given(/^I am at the 'Sign Up' page$/, (callback:Callback) => {
    page.goToSignUp();
    callback();
  });

  this.When(/^I sign up with invalid data$/, (callback:Callback) => {
    page.signUp(INVALID_DATA, INVALID_DATA).then(() => {
      callback();
    });
  });

  this.Then(/^I should not be able to sign up$/, (callback:Callback) => {
    expect(page.canSubmit()).to.eventually.equal(false)
                            .and.notify(callback);
  });

  this.When(/^I sign up with valid data$/, (callback:Callback) => {
    page.signUp(NAME, EMAIL).then(() => {
      callback();
    });
  });

  this.Then(/^I should see a sign up success message$/, (callback:Callback) => {
    expect(page.getGreetings()).to.eventually.equal(`user works!`)
                               .and.notify(callback);
  });

  this.When(/^I sign up with existent data$/, (callback:Callback) => {
    page.signUp(NAME, EMAIL).then(() => {
      callback();
    });
  });

  this.Then(/^I should see a sign up error message$/, (callback:Callback) => {
    expect(page.getAlert()).to.eventually.equal(`Email already in use`)
                               .and.notify(callback);
  });
};
