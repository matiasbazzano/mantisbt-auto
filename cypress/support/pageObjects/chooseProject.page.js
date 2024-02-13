class ChooseProjectPage {

    get selectProjectDropdown() {
        return cy.get('#select-project-id');
      }

      get selectProjectButton() {
        return cy.get('input[type="submit"].btn.btn-primary.btn-white.btn-round[value="Select Project"]');
      }

      getProjectOption(value) {
        return this.selectProjectDropdown.find(`option[value="${value}"]`);
      }
    
      selectProject(value) {
        this.selectProjectDropdown.select(value);
      }
    }
    
export default new ChooseProjectPage();