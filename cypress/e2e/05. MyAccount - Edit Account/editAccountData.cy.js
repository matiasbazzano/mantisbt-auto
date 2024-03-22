import DeepUrl from "../../data/deepUrl.js";
import AccountData from "../../data/account.js";
import Header from "../../support/pageObjects/header.page.js";
import UpdateAccountData from "../../data/updateAccount.js";
import RandomData from "../../data/randomData.js";
import MyAccountPage from "../../support/pageObjects/myAccount.page.js";

describe("Mantis BT - My Account - Edit Account Tests", () => {

    beforeEach(() => {
        cy.loginByRequest(AccountData.validUser, AccountData.validPassword, "loginByRequest");
        cy.visit(DeepUrl.myAccount);
    });
  
    it("@Smoke - Edit Account with random valid email", () => {
        const randomEmail = UpdateAccountData.emails[Math.floor(Math.random() * UpdateAccountData.emails.length)];
        MyAccountPage.emailInput.clear();
        MyAccountPage.emailInput.type(`${RandomData.randomValue}+${randomEmail}`);
        MyAccountPage.updateUserButton.click();
        Header.accountOptionsDropdown.click();
        Header.myAccountOptionLink.click();
        MyAccountPage.emailInput.should('have.value', `${RandomData.randomValue}+${randomEmail}`);
    });

    it("@Smoke - Edit Account with random valid real name", () => {
        const randomRealName = UpdateAccountData.names[Math.floor(Math.random() * UpdateAccountData.names.length)];
        MyAccountPage.realNameInput.clear();
        MyAccountPage.realNameInput.type(randomRealName);
        MyAccountPage.updateUserButton.click();
        Header.accountOptionsDropdown.click();
        Header.myAccountOptionLink.click();
        MyAccountPage.realNameInput.should('have.value', randomRealName);
    });
  });