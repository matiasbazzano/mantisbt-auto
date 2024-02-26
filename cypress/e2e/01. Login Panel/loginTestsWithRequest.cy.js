import DeepUrl from "../../data/deepUrl.js";
import AccountData from "../../data/account.js";
import Header from "../../support/pageObjects/header.page.js";
describe("Mantis BT - Login with API request", () => {

    beforeEach(() => {
      cy.visit(DeepUrl.login);
    });
  
    it("@Smoke - Success Login with API request", () => {
      cy.loginByRequest(AccountData.validUser, AccountData.validPassword, "loginByRequest");
      cy.visit(DeepUrl.myView);
      cy.url().should("eq", DeepUrl.myView);
      Header.mantisDashboardLinkButton.should('be.visible');
      Header.accountOptionsDropdown.should('be.visible').contains(AccountData.validUser);
    });
  });