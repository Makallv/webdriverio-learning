Feature:Testing Demo Blaze page

  @blazeReg
  Scenario: As a user, I can register to a page

    Given I am on the login page
    When I register with username and password
    Then I should see a flash message saying message

#
#  Scenario Outline: As a user, I can login to a page
#
#    Given I am on the login page
#    When I fill the <username> and <password>
#    Then I should see a <message>
#
#    Examples:
#      |username|password|message|
#      |Adming976231|Qwerty||