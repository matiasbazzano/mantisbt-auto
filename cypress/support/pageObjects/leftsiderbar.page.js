class LeftSidebar {

    get myViewSidebarButton() {
        return cy.get('span.menu-text').contains('My View');
      }

      get viewIssuesButton() {
        return cy.get('span.menu-text').contains('View Issues');
      }

      get changeLogButton() {
        return cy.get('span.menu-text').contains('Change Log');
      }

      get roadmapButton() {
        return cy.get('span.menu-text').contains('Roadmap');
      }

      get wikiButton() {
        return cy.get('span.menu-text').contains('Wiki');
      }

      get repositoriesButton() {
        return cy.get('span.menu-text').contains('Repositories');
      }

      get reduceSidebarButton() {
        return cy.get('i.ace-icon.fa.fa-angle-double-left');
      }
    
      get expandSidebarButton() {
        return cy.get('i.ace-icon.fa.fa-angle-double-right');
      }
}
    
export default new LeftSidebar();