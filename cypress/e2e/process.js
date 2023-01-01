const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Menu from "../PageObjects/Menu.js";
import LoginPage from "../PageObjects/LoginPage.js";

Given("I go to the demoblaze store website", () => {
    const mainMenu = new Menu();
    mainMenu.mainPage();
});

Given("I choose Log in", () => {
    const mainMenu = new Menu();
    mainMenu.logIn();
});

Given("Log in", () => {
    const login = new LoginPage();
    login.enterUsername();
    login.enterPassword();
    login.submit();
});

When("I choose a category Phones", () => {
  const mainMenu = new Menu();
    mainMenu.phones();
});

When("I choose phone {string}", (phoneName) => {
  cy.get(".hrefch")
  cy.contains(phoneName).click()
});

When("Add to cart", () => {
  cy.get(".btn")
  cy.contains("Add to cart").click()
});

When("I'm going to the cart", () => {
  const mainMenu = new Menu();
  mainMenu.cart();
});

When("Place order", () => {
  cy.get(".btn")
  cy.contains("Place Order").click()
});

Then("Entry of shipping data", () => {
  cy.get("#name").type('Martyna')
  cy.get("#country").type('Poland')
  cy.get("#city").type('Gdansk')
  cy.get("#card").type('Visa')
  cy.get("#month").type('January')
  cy.get("#year").type('2023')
  cy.get('[onclick="purchaseOrder()"]').click();
});

// Then("Asercja",)