Feature: Access Denied
  As an unauthenticated user
  I want to try to access some restricted page
  So that I can check if the system is secure

  Scenario: User tries to access some restricted feature unsuccessfully
    Given I am not authenticated
    When I try to access some restricted feature
    Then I should be redirected to the 'Sign In' page
