const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import DemoblazePage from "../PageObjects/DemoblazePage.js";
import LoginPage from "../PageObjects/LoginPage.js";
import Menu from "../PageObjects/Menu.js";

Given("I go to the demoblaze store website", () => {
    const page = new DemoblazePage();
    page.mainPage();
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

/*
Given("I enter Username {string}", (login) => {
  cy.get("#loginusername").type(login);
});

Given("I enter Password", () => {
  cy.get("#loginpassword").type('Passwd456$')
  .should('have.value', 'Passwd456$');;
});

When("I log in", () => {
  cy.get(".btn")
  cy.get('[onclick="logIn()"]').click();
});
*/

When("I choose a category Phones", () => {
  cy.get('[id="itemc"]')
  cy.contains("Phones").click()
});

When("I choose Samsung galaxy s6", () => {
  cy.get(".hrefch")
  cy.contains("Samsung galaxy s6").click()
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