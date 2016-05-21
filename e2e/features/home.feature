Feature: Home

  As an unauthenticated user
  I want to go to Equalize Home Page
  So that I can see a pretty neat welcome message

  Scenario: User sees a welcome message

    Given I am not authenticated
    When I go to Home
    Then I should see the text 'Equalizei rocks!'
