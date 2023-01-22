class LoginPage{

    enterPassword(){
        cy.get("#loginpassword").type("Passwd456$");
    }

    submit() {
        cy.get(".btn").contains("Log in").click();
    }
}
export default LoginPage