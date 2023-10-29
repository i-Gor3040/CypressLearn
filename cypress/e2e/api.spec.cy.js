/// <reference types="cypress" />
import { onLandingPage } from "../support/pageObject/landingPage";
import tags from "../fixtures/mockTags.json"
import articles from "../fixtures/mockArticles.json"

let name;
let method;
let url;
let statusCode;
let obj;

describe("API Mocking using intercept", () => {
  beforeEach("open app", () => {
    cy.log("opening web page");
    onLandingPage.openBasePage();
  });

   it("Tags mock", () => {
    name = "tags";
    method = "GET";
    url = "https://api.realworld.io/api/tags";
    statusCode = 202;
    obj = tags;

    onLandingPage.interceptAndMockCallArticles(name, method, url, statusCode, obj);
    cy.log("verifying mock values are displayed in Tags");
    onLandingPage.getTagList()
    .should("contain", "Warsaw")
    .and("contain", "Krakow")
    .and("contain", "Lodz")
    .and("contain", "Wroclaw");
  });

  it("Articles mock", () => {
    name = "articles";
    method = "GET";
    url = "https://api.realworld.io/api/articles?limit=10&offset=0";
    statusCode = 200;
    obj = articles;

    onLandingPage.interceptAndMockCallArticles(name, method, url, statusCode, obj);
    cy.log("verifying mocked author is displayed");
    onLandingPage.getAuthor()
    .should("contain", "Carter Capocaccia");
    cy.log("verifying mocked number of favorites is displayed");
    onLandingPage.getFavoriteBtnArticle()
    .should("contain", "666");
    cy.log("verifying mocked title is displayed");
    onLandingPage.getTitle()
    .contains("Hello World!");
  });

});
