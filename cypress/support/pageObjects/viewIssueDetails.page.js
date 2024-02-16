class ViewIssueDetails {

    get projectLabel() {
        return cy.get('.bug-project');
    }

    
    get categoryLabel() {
        return cy.get('.bug-category');
    }

    get visibilityLabel() {
        return cy.get('.bug-view-status');
    }

    get reporterLabel() {
        return cy.get('.bug-reporter');
    }

    get priorityLabel() {
        return cy.get('.bug-priority');
    }

    get severityLabel() {
        return cy.get('.bug-severity');
    }

    get reproducibilityLabel() {
        return cy.get('.bug-reproducibility');
    }
}
    
export default new ViewIssueDetails();