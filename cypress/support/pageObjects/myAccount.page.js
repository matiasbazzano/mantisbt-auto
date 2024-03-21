class MyAccountPage {

    get emailInput() {
        return cy.get('[name="email"]');
      }

    get realNameInput() {
        return cy.get('[id="realname"]');
    }

    get updateUserButton() {
        return cy.get('.btn.btn-primary.btn-white.btn-round[value="Update User"]');
    }
}
    
export default new MyAccountPage();