/// <reference types="cypress" />
import { onLandingPage } from "../support/pageObject/landingPage";

describe("API intercept", () => {
  beforeEach("open app", () => {
    cy.log("opening web page");
    onLandingPage.openBasePage();
  });

  it("Tags request", () => {
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
  });
});
