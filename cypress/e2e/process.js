const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("I go to the demoblaze store website", () => {
  cy.visit("https://www.demoblaze.com/index.html");
});

Given("I choose Log in", () => {
  cy.get("#login2").click();
});

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
  cy.get("#cartur").click()
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

Then("Asercja", )