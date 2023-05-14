Feature: User chat test

  @chat
  Scenario: Chat with 3 users
    Given User sees both user have opened the page and connected to the server
    When User sees that all users enter the nickname
    And User sees that all users connect to the broker
    And User sees that both user see themselves and each other in the Connected list
    And User sees that user1 sends any message
    And User sees that user2 and user3 receives the sent message
    And User sees that user2 and user3 sends any message
    Then User sees that user1 received the sent messages
    And User sees that all users can disconnect and lose connection