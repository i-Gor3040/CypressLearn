export class LandingPage {

  interceptAndMockCallTags(name, method, url, statusCode, obj) {
    cy.intercept(
      {
        method: method,
        url: url,
      },
      (req) => {
        req.reply({
          statusCode: statusCode,
          body: obj,
        });
      }
    ).as(name);

    cy.wait(`@${name}`).then(({ response }) => {
      expect(response.statusCode).to.eq(statusCode);
      expect(response.body).to.have.property(`${name}`);
      expect(response.body.tags).to.deep.equal(obj.tags)
    });
  }

  interceptAndMockCallArticles(name, method, url, statusCode, obj) {
    cy.intercept(
      {
        method: method,
        url: url,
      },
      (req) => {
        req.reply({
          statusCode: statusCode,
          body: obj,
        });
      }
    ).as(name);

    cy.wait(`@${name}`).then(({ response }) => {
      expect(response.statusCode).to.eq(statusCode);
      expect(response.body).to.have.property(`${name}`);
      expect(response.body.articles).to.deep.equal(obj.articles)
    });
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
