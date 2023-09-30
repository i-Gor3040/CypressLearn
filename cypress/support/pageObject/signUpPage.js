export class SignUpPage {

    enterUserName() {
        cy.get('[placeholder="Username"]').clear().type('Igor'); // 1) move to fixures or use faker; 2) what if username is taken?
    }
    enterEmail() {
        cy.get('[placeholder="Email"]').clear().type('igor@yopmail.com'); // move to fixures
    }

    enterPSWD() {
        cy.get('[placeholder="Password"]').clear().type('Test123@'); // move to fixures
    }

    clickSignUpBtn() {
      cy.contains("Sign up").click();
    }
  }
  
  export const onSignUpPage = new SignUpPage();