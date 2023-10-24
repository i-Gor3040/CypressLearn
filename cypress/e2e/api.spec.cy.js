/// <reference types="cypress" />
import { onLandingPage } from "../support/pageObject/landingPage";

let name;
let method;
let url;
let statusCode;
// let ARR;
let obj;

describe("API intercept", () => {
  beforeEach("open app", () => {
    cy.log("opening web page");
    onLandingPage.openBasePage();
  });


  it("Tags mock", () => {
    name = "tags";
    method = "GET";
    url = "https://api.realworld.io/api/tags";
    obj = {
      "tags": [
        "Warsaw",
        "Krakow",
        "Lodz",
        "Wroclaw",
        "Gdansk",
        "Szczecin",
        "Bydgoszcz",
        "Lublin ",
        "Białystok",
      ],
    }
    statusCode = 202;

    onLandingPage.interceptAndMockCall(name, method, url, statusCode, obj)
  });

 /*  it("Articles mock", () => {
    NAME = "articles";
    METHOD = "GET";
    URL = "https://api.realworld.io/api/articles?limit=10&offset=0";
    STATUSCODE = 200;

    onLandingPage.interceptAndMockCall(NAME, METHOD, URL, STATUSCODE)
  }); */
 /*  it("Tags request", () => {
    NAME = "Popular Tags";
    METHOD = "GET";
    URL = "https://api.realworld.io/api/tags";
    STATUSCODE = 200;

    onLandingPage.interceptCall(NAME, METHOD, URL, STATUSCODE)
  }); */

 /*  it("Articles request", () => {
    NAME = "Articles";
    METHOD = "GET";
    URL = "https://api.realworld.io/api/articles?limit=10&offset=0";
    STATUSCODE = 200;

    onLandingPage.interceptCall(NAME, METHOD, URL, STATUSCODE)
  }); */

});
