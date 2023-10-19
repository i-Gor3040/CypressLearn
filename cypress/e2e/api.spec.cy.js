/// <reference types="cypress" />
import { onLandingPage } from "../support/pageObject/landingPage";

let NAME;
let METHOD;
let URL;
let STATUSCODE;

describe("API intercept", () => {
  beforeEach("open app", () => {
    cy.log("opening web page");
    onLandingPage.openBasePage();
  });

  it("Tags request", () => {
    NAME = "Popular Tags";
    METHOD = "GET";
    URL = "https://api.realworld.io/api/tags";
    STATUSCODE = 200;

    onLandingPage.interceptCall(NAME, METHOD, URL, STATUSCODE)
  });

  it("Articles request", () => {
    NAME = "Articles";
    METHOD = "GET";
    URL = "https://api.realworld.io/api/articles?limit=10&offset=0";
    STATUSCODE = 200;

    onLandingPage.interceptCall(NAME, METHOD, URL, STATUSCODE)
  });

  /* it("Tags request", () => {
    cy.intercept({
      method: "GET",
      url: "https://api.realworld.io/api/tags",
    }).as("Popular Tags");
    cy.wait("@Popular Tags").its("response.statusCode").should("eq", 200);
  });

  it("Articles request", () => {
    cy.intercept({
      method: "GET",
      url: "https://api.realworld.io/api/articles?limit=10&offset=0",
    }).as("Articles");
    cy.wait("@Articles").its("response.statusCode").should("eq", 200);
  }); */
});
