import RecoverPasswordPage from "../../support/pageObjects/recoverPassword.page.js";
import DeepUrl from "../../data/deepUrl.js";
describe("Mantis BT - Recover Password Page Tests", () => {

    beforeEach(() => {
      cy.visit(DeepUrl.recoverPass);
    });

      it("@Smoke - Navigation link - Login", () => {
        RecoverPasswordPage.loginLink.click();
        cy.url().should("eq", DeepUrl.login);
      });

      it("@Smoke - Navigation link - Signup for a new account", () => {
        RecoverPasswordPage.registerLink.click();
        cy.url().should("eq", DeepUrl.register);
      });
  });