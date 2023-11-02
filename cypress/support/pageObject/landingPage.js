export class LandingPage {

  tagList = ".tag-list";
  favoriteBtnArticle = "favorite-btn.pull-xs-right";
  author = ".author";
  title = "h1.ng-binding";

  getTagList() {
   return cy.get(this.tagList);
  }  

  getFavoriteBtnArticle() {
    return cy.get(this.favoriteBtnArticle)
  }

  getAuthor() {
    return cy.get(this.author);
  }

  getTitle() {
    return cy.get(this.title);
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

    cy.wait(`@${name}`);
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

    cy.wait(`@${name}`);
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
