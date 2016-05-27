Feature: Sign up
  As an unauthenticated user
  I want to be able to sign up for Equalizei
  In order to start a process to certify my company products

  Background:
    Given I am not authenticated
    And I am at the 'Sign Up' page

  Scenario: User signs up without name
    When I sign up without a data
    Then I should see a missing data message

  Scenario: User signs up with valid data
    When I sign up with valid data
    Then I should see a successful sign up message
