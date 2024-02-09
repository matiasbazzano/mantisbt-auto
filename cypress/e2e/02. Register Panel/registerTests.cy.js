import RegisterPage from "../../support/pageObjects/register.page.js";
import DeepUrl from "../../data/deepUrl.js";
describe("Mantis BT - Register Page Tests", () => {

    beforeEach(() => {
      cy.visit(DeepUrl.register);
    });

      it("@Smoke - Navigation link - Login", () => {
        RegisterPage.loginLink.click();
        cy.url().should("eq", DeepUrl.login);
      });

      it("@Smoke - Navigation link - Lost your password", () => {
        RegisterPage.lostYourPasswordLink.click();
        cy.url().should("eq", DeepUrl.recoverPass);
      });
  });