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

When("Log in as {string}", (username) => {
    const login = new LoginPage();
    cy.get("#loginusername").type(username);
    login.enterPassword();
    login.submit();
});

Then("On the website I can see the title: Welcome {string}", (username) => {
    cy.get("#nameofuser").should("contain", ("Welcome msikorska"));
  });