import {Callback, expect} from '../support/config';
import {SignUpPage} from '../pages/sign_up.po';

export = function() {

  let page = new SignUpPage();
  const INVALID_DATA = '';
  const VALID_DATA = 'Rafa';

  this.Given(/^I am at the 'Sign Up' page$/, (callback:Callback) => {
    page.goToSignUp();
    callback();
  });

  this.When(/^I sign up with invalid data$/, (callback:Callback) => {
    page.signUp(INVALID_DATA).then(() => {
      callback();
    });
  });

  this.Then(/^I should not be able to sign up$/, (callback:Callback) => {
    expect(page.canSubmit()).to.eventually.equal(false)
                            .and.notify(callback);
  });

  this.When(/^I sign up with valid data$/, (callback:Callback) => {
    page.signUp(VALID_DATA).then(() => {
      callback();
    });
  });

  this.Then(/^I should see a successful sign up message$/, (callback:Callback) => {
    expect(page.getGreetings()).to.eventually.equal(`Welcome ${VALID_DATA}!`)
                               .and.notify(callback);
  });
};
