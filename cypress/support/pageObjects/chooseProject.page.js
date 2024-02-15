class ChooseProjectPage {

    get selectProjectDropdown() {
        return cy.get('#select-project-id');
      }

      get selectProjectButton() {
        return cy.get('input[type="submit"].btn.btn-primary.btn-white.btn-round[value="Select Project"]');
      }
    }
    
export default new ChooseProjectPage();