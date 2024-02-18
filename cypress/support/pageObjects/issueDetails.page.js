class IssueDetailsPage {

    get categoryDropdown() {
        return cy.get('[id="category_id"]');
    }

    get reproducibilityDropdown() {
        return cy.get('[id="reproducibility"]');
    }

    get severityDropdown() {
        return cy.get('[id="severity"]');
    }

    get priorityDropdown() {
        return cy.get('[id="priority"]');
    }

    get expandProfileInputs() {
        return cy.get('[id="profile_closed_link"]');
    }

    get profilePlatformInput() {
        return cy.get('[id="platform"]');
    }

    get osPlatformInput() {
        return cy.get('[id="os"]');
    }

    get osVersionPlatformInput() {
        return cy.get('[id="os_build"]');
    }

    get productVersionDropdown() {
        return cy.get('[id="product_version"]');
    }

    get summaryInput() {
        return cy.get('[id="summary"]');
    }

    get descriptionInput() {
        return cy.get('[id="description"]');
    }

    get stepsToReproduce() {
        return cy.get('[id="steps_to_reproduce"]');
    }

    get additionalInfoInput() {
        return cy.get('[id="additional_info"]');
    }

    get publicCheckbox() {
        return cy.get('input.ace[value="10"][tabindex="14"]');
    }

    get privateCheckbox() {
        return cy.get('input.ace[value="50"][tabindex="15"]');
    }

    get submitIssueButton() {
        return cy.get('input[type="submit"].btn.btn-primary.btn-white.btn-round[value="Submit Issue"]');
    }
}
    
export default new IssueDetailsPage();