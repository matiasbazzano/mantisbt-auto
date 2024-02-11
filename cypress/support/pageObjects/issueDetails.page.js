class IssueDetailsPage {

    get categoryDropdown() {
        return cy.get('[id="category_id"]');
    }

    getCategoryOption(value) {
        return this.categoryDropdown.find(`option[value="${value}"]`);
    }
    
    selectCategory(value) {
        this.categoryDropdown.select(value);
    }

    get reproducibilityDropdown() {
        return cy.get('[id="reproducibility"]');
    }

    getReproducibilityOption(value) {
        return this.reproducibilityDropdown.find(`option[value="${value}"]`);
    }
    
    selectReproducibility(value) {
        this.reproducibilityDropdown.select(value);
    }

    get severityDropdown() {
        return cy.get('[id="severity"]');
    }

    getSeverityOption(value) {
        return this.severityDropdown.find(`option[value="${value}"]`);
    }
    
    selectSeverity(value) {
        this.severityDropdown.select(value);
    }

    get priorityDropdown() {
        return cy.get('[id="priority"]');
    }

    getPriorityOption(value) {
        return this.priorityDropdown.find(`option[value="${value}"]`);
    }
    
    selectPriority(value) {
        this.priorityDropdown.select(value);
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

    getProductVersionOption(value) {
        return this.productVersionDropdown.find(`option[value="${value}"]`);
    }
    
    selectProductVersion(value) {
        this.productVersionDropdown.select(value);
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

    get submitIssueButton() {
        return cy.get('input[type="submit"].btn.btn-primary.btn-white.btn-round[value="Submit Issue"]');
      }
}
    
export default new IssueDetailsPage();