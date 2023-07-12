const nameInput = "#name"
const countryInput = "#country"
const cityInput = "#city"
const cardInput = "#card"
const monthInput = "#month"
const yearInput = "#year"
const purchaseButton = '[onclick="purchaseOrder()"]'

class PlaceOrder {

  enterName(name) {
    cy.get(nameInput).type(name);
  }

  enterCountry(country) {
    cy.get(countryInput).type(country);
  }

  enterCity(city) {
    cy.get(cityInput).type(city);
  }

  enterCreditCard(card) {
    cy.get(cardInput).type(card);
  }

  enterMonth(month) {
    cy.get(monthInput).type(month);
  }

  enterYear(year) {
    cy.get(yearInput).type(year);
  }

  purchase() {
    cy.get(purchaseButton).click();
  }

}
export default PlaceOrder