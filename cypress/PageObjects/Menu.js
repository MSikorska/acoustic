class Menu {

  mainPage() {
    cy.fixture("example.json");
    return cy.visit("https://www.demoblaze.com/index.html");
  }

  logIn() {
    cy.get("#login2").click();
    cy.get(".modal-content");
    cy.wait(1000);
  }

  cart() {
    cy.get("#cartur").click();
    cy.wait(1000);
  }

  phones() {
    cy.get('[id="itemc"]');
    cy.contains("Phones").click();
  }

  laptops() {
    cy.get('[id="itemc"]');
    cy.contains("Laptops").click();
    cy.wait(1000);
  }
}

export default Menu