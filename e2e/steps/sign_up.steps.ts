import {Callback, expect} from '../support/config';
import {SignUpPage} from '../pages/sign_up.po';

export = function() {

  let page = new SignUpPage();

  this.Given(/^I am at the 'Sign Up' page$/, (callback:Callback) => {
    page.goToSignUp();
    callback();
  });

  this.When(/^I sign up without a data$/, (callback:Callback) => {
    page.submit();
    callback();
  });

  this.When(/^I sign up with valid data$/, (callback:Callback) => {
    page.setName("Rafa");
    page.setEmail("rafa@gmail.com");
    page.setPassword("rafa123eq");
    page.setPasswordConfirmation("rafa123eq");
    page.submit();
    callback();
  });

  this.Then(/^I should see a missing data message$/, (callback:Callback) => {
    expect(page.hasErrorMessages()).to.eventually.equal(true).and.notify(callback);
  });

  this.Then(/^I should see a successful sign up message$/, (callback:Callback) => {
      expect(page.getGreetings()).to.eventually.equal('Welcome Rafa!').and.notify(callback);
  });
};
