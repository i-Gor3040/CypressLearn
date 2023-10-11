export class SignUpPage {

    userNameInput = '[placeholder="Username"]';

    enterUserName(userName) {
        cy.get(this.userNameInput).clear().type(userName);
    }
    enterEmail(email) {
        cy.get('[placeholder="Email"]').clear().type(email);
    }
    enterPSWD(password) {
        cy.get('[placeholder="Password"]').clear().type(password);
    }

    clickSignUpBtn() {
      cy.get('button').click();
    }
}
  
  export const onSignUpPage = new SignUpPage();