class RecoverPasswordPage {

    get usernameInput() {
        return cy.get('[id="username"]');
      }

    get emailInput() {
        return cy.get('id="email-field"');
      }

    get submitButton() {
        return cy.get('input[type="submit"][value="Submit"]');
      }

    get loginLink() {
        return cy.get('.back-to-login-link.pull-left');
      }

    get registerLink() {
        return cy.get('.back-to-login-link.pull-right');
      }
}
    
export default new RecoverPasswordPage();