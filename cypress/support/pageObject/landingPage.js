export class LandingPage {

  clickSignUpLink() {
    cy.contains("Sign up").click();
    //return this; 
  }

  clickSignInLink() {
    cy.contains("Sign in").click();
    //return this; 
  }
}

export const onLandingPage = new LandingPage();
