export class SignInPage {

    enterEmail(email) {
        cy.get('[placeholder="Email"]').clear().type(email);
    }
    
    enterPSWD(password) {
        cy.get('[placeholder="Password"]').clear().type(password);
    }

    clickSignInBtn() {
        cy.get('button').click();
      }
    
  }
  
  export const onSignInPage = new SignInPage();