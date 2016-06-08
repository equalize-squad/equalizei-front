@Ignore
Feature: Dashboard
  As an authenticated user
  I want to be able to access the 'Dashboard' page
  In order to manage my profile and certification processes

  Background:
    Given I am authenticated

  Scenario: User sees the 'Profile' menu
    When I am at the 'Dashboard' page
    Then I should see the 'Profile' menu
