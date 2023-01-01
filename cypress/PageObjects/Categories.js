class Categories{

    phones(){
        cy.get('[id="itemc"]');
        cy.contains("Phones").click();
    }
}

export default Categories