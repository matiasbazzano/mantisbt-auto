class TimelinePanel {

    get usernameTimeline() {
        return cy.get('.username');
    }

    get collapseButton() {
        return cy.get('[data-action="collapse"]');
    }
}
    
export default new TimelinePanel();