export class LandingPage {
  /* interceptCall(NAME, METHOD, URL, STATUSCODE) {
    cy.intercept({
      method: METHOD, // "GET"
      url: URL, // "https://api.realworld.io/api/tags"
    }).as(NAME); // "Popular Tags"
    cy.wait(`@${NAME}`).then(({response}) => {
      console.log(response.body)
      expect(response.statusCode).to.eq(STATUSCODE)
      expect(response.body).to.have.property("tags")
      console.log(response.body.tags)
    })
  }
 */

  interceptAndMockCall(name, method, url, statusCode, obj) {
    cy.intercept({
      method: method,
      url: url},
      (req) => {
      req.reply({
        statusCode: statusCode,
        body: obj,
      });
    }).as(name);
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
