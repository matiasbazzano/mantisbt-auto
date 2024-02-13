import LoginPage from "../../support/pageObjects/login.page.js";
import Header from "../../support/pageObjects/header.page.js";
import ChooseProjectPage from "../../support/pageObjects/chooseProject.page.js";
import IssueDetailsPage from "../../support/pageObjects/issueDetails.page.js";
import AccountData from "../../data/account.js";
import NewIssue from "../../data/newIssue.js";
import DeepUrl from "../../data/deepUrl.js"

describe("Mantis BT - Report Issue Page Tests", () => {

    beforeEach(() => {
      cy.visit(DeepUrl.login);
      LoginPage.login(AccountData.validUser, AccountData.validPassword);
    });

      it("@Smoke - Report New Issue", () => {
        Header.reportIssueButton.click();
        ChooseProjectPage.selectProjectDropdown.select('1');
        ChooseProjectPage.selectProjectButton.click();
        IssueDetailsPage.categoryDropdown.select('2');
        IssueDetailsPage.reproducibilityDropdown.select('10');
        IssueDetailsPage.severityDropdown.select('10');
        IssueDetailsPage.priorityDropdown.select('10');
        IssueDetailsPage.profilePlatformInput.type(NewIssue.platform);
        IssueDetailsPage.osPlatformInput.type(NewIssue.os);
        IssueDetailsPage.osVersionPlatformInput.type(NewIssue.osVersion);
        IssueDetailsPage.productVersionDropdown.select('2.0.0');
        IssueDetailsPage.summaryInput.type(NewIssue.summary);
        IssueDetailsPage.descriptionInput.type(NewIssue.description);
        IssueDetailsPage.stepsToReproduce.type(NewIssue.steps);
        IssueDetailsPage.additionalInfoInput.type(NewIssue.additionalInfo);
        IssueDetailsPage.submitIssueButton.click();
        cy.url().should("include", DeepUrl.viewIssueDetals);
      });
  });