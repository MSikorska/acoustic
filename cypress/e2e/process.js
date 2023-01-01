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
  order.purchase();
});

// Then("Asercja",)