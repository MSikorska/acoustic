
Feature: Purchase process of smartphone
  Scenario: Successful purchase process of smartphone
    Given I go to the demoblaze store website
    And I choose Log in
    And I enter Username "msikorska"
    And I enter Password
    When I log in
    And I choose a category Phones
    And I choose Samsung galaxy s6
    And Add to cart
    And I'm going to the cart
    And Place order
    And Entry of shipping data
    Then Asercja