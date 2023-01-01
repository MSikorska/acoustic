class Cart {
    placeOrder(){
        cy.get(".btn");
        cy.contains("Place Order").click();
    }
}
export default Cart