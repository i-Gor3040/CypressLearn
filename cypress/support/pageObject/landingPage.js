export class LandingPage {
  interceptCall(NAME, METHOD, URL, STATUSCODE) {
    cy.intercept({
      method: METHOD, // "GET"
      url: URL, // "https://api.realworld.io/api/tags"
    }).as(NAME); // "Popular Tags"
    cy.wait(`@${NAME}`).its("response.statusCode").should("eq", STATUSCODE);
  }

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
