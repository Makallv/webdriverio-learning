Feature: The Internet Guinea Pig Website

  @register
  Scenario: As a user, I can register on page

    Given I am on the login page
    When I register with username and password
    Then I should see a flash message saying message

