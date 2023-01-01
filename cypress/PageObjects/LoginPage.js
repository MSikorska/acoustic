class LoginPage{

    enterUsername(){
        cy.get("#loginusername").type("msikorska");
    }

    enterPassword(){
        cy.get("#loginpassword").type("Passwd456$");
    }

    submit() {
        cy.get(".btn").contains("Log in").click();
    }
}
export default LoginPage