Feature: Purchase process of smartphone
  Scenario: Successful purchase process of smartphone
    Given I go to the demoblaze store website
    And I choose Log in
    And Log in as "msikorska"
    When I choose a category Phones
    And I choose phone "Samsung galaxy s6"
    And Add to cart
    And I'm going to the cart
    And In cart there is a phone "Samsung galaxy s6"
    And Place order
    And Entry of shipping data
    Then The purchase has been completed