class Menu{

    logIn(){
    cy.get("#login2").click();
    cy.get(".modal-content");
    cy.wait(1000);
    }

    cart(){
        cy.get("#cartur").click();
    }
    
    phones(){
        cy.get('[id="itemc"]');
        cy.contains("Phones").click();
    }
}

export default Menu