export class LandingPage {

  clickSignUpLink() {
    cy.contains("Sign up").click();
  }
}

export const onLandingPage = new LandingPage();
