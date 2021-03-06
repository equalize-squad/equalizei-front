Feature: Sign up
  As an unauthenticated user
  I want to be able to sign up for Equalizei
  In order to start a process to certify my company's products

  Background:
    Given I am not authenticated
    And I am at the 'Sign Up' page

  Scenario: User signs up with invalid data
    When I sign up with invalid data
    Then I should not be able to sign up

  Scenario: User signs up with valid data
    When I sign up with valid data
    Then I should be at the 'Sign in' page
    And I should see a success message

  Scenario: User signs up with existent data
    When I sign up with existent data
    Then I should see an error message
