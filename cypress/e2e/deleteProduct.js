const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Menu from "../PageObjects/Menu.js";
import LoginPage from "../PageObjects/LoginPage.js";
import Cart from "../PageObjects/Cart.js";

Given("I go to the demoblaze store website", () => {
    const mainMenu = new Menu();
    mainMenu.mainPage();
});

Given("I choose Log in", () => {
    const mainMenu = new Menu();
    mainMenu.logIn();
});

Given("Log in as {string}", (username) => {
    const login = new LoginPage();
    cy.get("#loginusername").type(username);
    login.enterPassword();
    login.submit();
});

Given("I choose a category Laptops", () => {
    const mainMenu = new Menu();
      mainMenu.laptops();
  });

Given("I choose {string}", (laptopName) => {
    cy.get(".hrefch");
    cy.contains(laptopName).click();
  });

Given("Add to cart", () => {
    cy.get(".btn");
    cy.contains("Add to cart").click();
  });

Given("I'm going to the cart", () => {
    const mainMenu = new Menu();
    mainMenu.cart();
  });

Given("In cart there is a laptop {string}",(laptopName) => {
    cy.get('tr:nth-child(1) td:nth-child(2)').should("contain", (laptopName));
  });

When("I remove the laptop from the cart", () => {
    cy.get('tr:nth-child(1) td:nth-child(3)');
    cy.contains("Delete").click();
});

Then("In the basket there is no {string}", (laptopName) => {
     cy.get("#page-wrapper").should('not.contain', (laptopName));
});