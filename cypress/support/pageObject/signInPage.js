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
  
  export const ErrorMsgText = {
    NOT_VALID_EMAIL_OR_PSWD: 'email or password is invalid',
    REQUIRED_EMAIL: "email can't be blank",
    REQUIRED_PSWD: "password can't be blank"
  }

  export const onSignInPage = new SignInPage();