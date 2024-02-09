import LoginPage from "../../support/pageObjects/login.page.js";
import DeepUrl from "../../data/deepUrl.js";
import AccountData from "../../data/account.js";
describe("Mantis BT - Login Page Tests", () => {

    beforeEach(() => {
      cy.visit(DeepUrl.login);
    });
  
    it("@Smoke - Success Login", () => {
      LoginPage.login(AccountData.validUser, AccountData.validPassword);
      cy.url().should("eq", DeepUrl.myView);
    });
  
    it("@Regression - Login with invalid password", () => {
        LoginPage.login(AccountData.validUser, AccountData.invalidPassword);
        LoginPage.dangerAlert.should("be.visible");
      });

    it("@Regression - Login with invalid user", () => {
        LoginPage.login(AccountData.invalidUser, AccountData.validPassword);
        LoginPage.dangerAlert.should("be.visible");
      });
    
    it("@Regression - Login with invalid credentials", () => {
      LoginPage.login(AccountData.invalidUser, AccountData.invalidPassword);
      LoginPage.dangerAlert.should("be.visible");
      });

    it("@Regression - Login with empty username field", () => {
        LoginPage.usernameInput.clear();
        LoginPage.loginButton.click();
        LoginPage.dangerAlert.should("be.visible");
      });

    it("@Regression - Login with empty password field", () => {
        LoginPage.usernameInput.type(AccountData.validUser)
        LoginPage.loginButton.click();
        LoginPage.passwordInput.clear();
        LoginPage.loginButton.click();
        LoginPage.dangerAlert.should("be.visible");
      });

      it("@Smoke - Navigation link - Signup for a new account", () => {
        LoginPage.registerLink.click();
        cy.url().should("eq", DeepUrl.register);
      });

      it("@Smoke - Navigation link - Login Anonymously", () => {
        LoginPage.loginAnonymously.click();
        cy.url().should("eq", DeepUrl.myView);
        LoginPage.userInfoElement.should('be.visible').contains('anonymous');
      });
  });