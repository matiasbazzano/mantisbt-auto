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

      it("@Smoke - Report New Issue - mantisbt Project", () => {
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

      it("@Smoke - Report New Issue - Mylyn Connector Project", () => {
        Header.reportIssueButton.click();
        ChooseProjectPage.selectProjectDropdown.select('20');
        ChooseProjectPage.selectProjectButton.click();
        IssueDetailsPage.categoryDropdown.select('75');
        IssueDetailsPage.reproducibilityDropdown.select('10');
        IssueDetailsPage.severityDropdown.select('10');
        IssueDetailsPage.priorityDropdown.select('10');
        IssueDetailsPage.profilePlatformInput.type(NewIssue.platform);
        IssueDetailsPage.osPlatformInput.type(NewIssue.os);
        IssueDetailsPage.osVersionPlatformInput.type(NewIssue.osVersion);
        IssueDetailsPage.productVersionDropdown.select('3.0.1');
        IssueDetailsPage.summaryInput.type(NewIssue.summary);
        IssueDetailsPage.descriptionInput.type(NewIssue.description);
        IssueDetailsPage.stepsToReproduce.type(NewIssue.steps);
        IssueDetailsPage.additionalInfoInput.type(NewIssue.additionalInfo);
        IssueDetailsPage.submitIssueButton.click();
        cy.url().should("include", DeepUrl.viewIssueDetals);
      });

      it("@Regression - Report New Issue - Leave the required dropdowns empty (category)", () => {
        Header.reportIssueButton.click();
        ChooseProjectPage.selectProjectDropdown.select('20');
        ChooseProjectPage.selectProjectButton.click();
        cy.get('[id="category_id"]').then(($select) => {
          expect($select[0].validationMessage).to.eq('Please select an item in the list.')
        })
        cy.url().should("eq", DeepUrl.bugReport);
      });

      it("@Regression - Report New Issue - Leave the required fields empty (summary) ", () => {
        Header.reportIssueButton.click();
        ChooseProjectPage.selectProjectDropdown.select('20');
        ChooseProjectPage.selectProjectButton.click();
        IssueDetailsPage.categoryDropdown.select('75');
        IssueDetailsPage.reproducibilityDropdown.select('10');
        cy.get('[id="summary"]').then(($input) => {
          expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
        cy.url().should("eq", DeepUrl.bugReport);
      });

      it("@Regression - Report New Issue - Leave the required fields empty (description)", () => {
        Header.reportIssueButton.click();
        ChooseProjectPage.selectProjectDropdown.select('20');
        ChooseProjectPage.selectProjectButton.click();
        IssueDetailsPage.categoryDropdown.select('75');
        cy.get('[id="description"]').then(($input) => {
          expect($input[0].validationMessage).to.eq('Please fill out this field.')
        })
        cy.url().should("eq", DeepUrl.bugReport);
      });

      //do a test to check the status of an issue created, private/public in viewIssueDetails (involves pageobject and saving the private and public checkbox)
  });