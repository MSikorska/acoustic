const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import Menu from "../PageObjects/Menu.js";
import LoginPage from "../PageObjects/LoginPage.js";
import Cart from "../PageObjects/Cart.js";
import PlaceOrder from "../PageObjects/PlaceOrder.js";

Given("I go to the demoblaze store website", () => {
    const mainMenu = new Menu();
    mainMenu.mainPage();
});

Given("I choose Log in", () => {
    const mainMenu = new Menu();
    mainMenu.logIn();
});

When("Log in as {string}", (username) => {
    const login = new LoginPage();
    cy.get("#loginusername").type(username);
    login.enterPassword();
    login.submit();
});

When("I choose a category Phones", () => {
  const mainMenu = new Menu();
    mainMenu.phones();
});

When("I choose phone {string}", (phoneName) => {
  cy.get(".hrefch");
  cy.contains(phoneName).click();
});

When("Add to cart", () => {
  cy.get(".btn");
  cy.contains("Add to cart").click();
});

When("I'm going to the cart", () => {
  const mainMenu = new Menu();
  mainMenu.cart();
});

When("In cart there is a phone {string}",(phoneName)=> {
  cy.get('tr:nth-child(1) td:nth-child(2)').should("contain", (phoneName));
})

When("Place order", () => {
  const cartPage = new Cart();
  cartPage.placeOrder();
});

Then("Entry of shipping data", () => {
  const order = new PlaceOrder;
  order.enterName();
  order.enterCountry();
  order.enterCity();
  order.enterCreditCard();
  order.enterMonth();
  order.enterYear();
  order.purchase()
});

Then("The purchase has been completed",() => {
  cy.get("h2").should("contain", ("Thank you for your purchase!"));
})
