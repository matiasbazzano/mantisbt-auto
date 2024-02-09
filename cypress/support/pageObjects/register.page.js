class RegisterPage {

    get usernameInput() {
        return cy.get('[id="username"]');
        }
  
    get emailInput() {
        return cy.get('[id="email-field"]');
        }

    get captchaInput() {
        return cy.get('[id="captcha-field"]');
        }

    get signupButton() {
        return cy.get('input[type="submit"][value="Signup"]');
        }

    get loginLink() {
        return cy.get('.back-to-login-link.pull-left');
        }

    get lostYourPasswordLink() {
        return cy.get('.back-to-login-link.pull-right');
        }
}
    
export default new RegisterPage();