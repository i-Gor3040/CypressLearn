export class SignUpPage {

    enterUserName(userName) {
        cy.get('[placeholder="Username"]').clear().type(userName);
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