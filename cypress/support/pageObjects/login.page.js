class LoginPage {

    get usernameInput() {
      return cy.get('[id="username"]');
    }

    get passwordInput() {
        return cy.get('[id="password"]');
      }

    get loginButton() {
        return cy.get('input[type="submit"][value="Login"]');
      }

    get dangerAlert() {
        return cy.get('.alert.alert-danger');
      }

    get registerLink() {
        return cy.get('.back-to-login-link.pull-left');
      }

    get loginAnonymously() {
        return cy.get('.back-to-login-link.pull-right');
      }

    login(user, password) {
        this.usernameInput.type(user);
        this.loginButton.click();
        this.passwordInput.type(password);
        this.loginButton.click();
      }
}
    
export default new LoginPage();