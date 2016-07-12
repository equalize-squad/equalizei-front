@Ignore
Feature: Sign in
  As an authenticated user
  I want to be able to sign in
  In order to get access to protected sections of the site

  Background:
    Given I am not authenticated
    And I am at the 'Sign In' page

  Scenario: User cannot sign in without data
    When I sign up without data
    Then I should not be able to sign in

  Scenario: Unregistred user cannot sign in
    Given I am not registred as an user
    When I sign in with valid credentials
    Then I should see an invalid login message
    And I should not be signed in

  Scenario: User signs in successfully
    Given I am already registred as an user
    When I sign in with valid credentials
    Then I should see a successful sign in message
    And I should be at the 'Dashboard' page
