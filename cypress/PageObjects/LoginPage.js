const usernameInput = "#loginusername"
const passwordInput = "#loginpassword"
const submitButton = ".btn"

class LoginPage {
    enterUsername(username) {
        cy.get(usernameInput).type(username)
    }
    enterPassword(password) {
        cy.get(passwordInput).type(password);
    }
    submit() {
        cy.get(submitButton).contains("Log in").click();
    }
}
export default LoginPage