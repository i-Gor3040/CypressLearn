export class LandingPage {
  openBasePage() {
    cy.visit("/");
  }

  clickSignUpLink() {
    cy.contains("Sign up").click();
  }

  clickSignInLink() {
    cy.contains("Sign in").click();
  }

  getSignInLink() {
    return cy.contains("Sign in");
  }
}

export const onLandingPage = new LandingPage();
