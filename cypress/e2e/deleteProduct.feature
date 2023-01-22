Feature: Process of removing laptop from shopping cart
  Scenario: Successful process of removing laptop from shopping cart
    Given I go to the demoblaze store website
    And I choose Log in
    And Log in as "msikorska"
    And I choose a category Laptops
    And I choose "MacBook air"
    And Add to cart
    And I'm going to the cart
    And In cart there is a laptop "MacBook air"
    When I remove the laptop from the cart
    Then In the basket there is no "MacBook air"