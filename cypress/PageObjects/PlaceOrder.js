class PlaceOrder {
    
    enterName(){
        cy.get("#name").type('Martyna');
    }

    enterCountry(){
        cy.get("#country").type('Poland');
    }

    enterCity(){
        cy.get("#city").type('Gdansk');
    }
    
    enterCreditCard(){
        cy.get("#card").type('Visa');
    }

    enterMonth(){
        cy.get("#month").type('January');
    }

    enterYear(){
        cy.get("#year").type('2023');
    }

    purchase(){
        cy.get('[onclick="purchaseOrder()"]').click();
    }

}
export default PlaceOrder