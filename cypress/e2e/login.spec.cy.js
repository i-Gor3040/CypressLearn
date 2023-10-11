import { onLandingPage } from "../support/pageObject/landingPage";
import { onHomePage } from "../support/pageObject/homePage";
import { ErrorMsgText, onSignInPage } from "../support/pageObject/signInPage";

describe("Start testing", () => {
  beforeEach("open app", () => {
    cy.log("opening web page");
    onLandingPage.openBasePage();
  });

  it("should not login with incorrect email", () => {
    cy.log("clicking on Sign in link");
    onLandingPage.clickSignInLink();
    cy.log("entering incorrect email");
    onSignInPage.enterEmail(Cypress.env("incorrectEmail"));
    cy.log("entering password");
    onSignInPage.enterPSWD(Cypress.env("password"));
    cy.log("clicking Sign in button");
    onSignInPage.clickSignInBtn();
    cy.log("verifying error message is displayed");
    cy.contains(ErrorMsgText.NOT_VALID_EMAIL_OR_PSWD).should("be.visible");
  });

  it("should not login with empty email", () => {
    cy.log("clicking on Sign in link");
    onLandingPage.clickSignInLink();
    cy.log("entering password");
    onSignInPage.enterPSWD(Cypress.env("password"));
    cy.log("clicking Sign in button");
    onSignInPage.clickSignInBtn();
    cy.log("verifying error message is displayed");
    cy.contains(ErrorMsgText.REQUIRED_EMAIL).should("be.visible");
  });

  it("should not login with incorrect password", () => {
    cy.log("clicking on Sign in link");
    onLandingPage.clickSignInLink();
    cy.log("entering email");
    onSignInPage.enterEmail(Cypress.env("email"));
    cy.log("entering incorrect password");
    onSignInPage.enterPSWD(Cypress.env("incorrectPSWD"));
    cy.log("clicking Sign in button");
    onSignInPage.clickSignInBtn();
    cy.log("verifying error message is displayed");
    cy.contains(ErrorMsgText.NOT_VALID_EMAIL_OR_PSWD).should("be.visible");
  });

  it("should not login with empty password", () => {
    cy.log("clicking on Sign in link");
    onLandingPage.clickSignInLink();
    cy.log("entering email");
    onSignInPage.enterEmail(Cypress.env("email"));
    cy.log("clicking Sign in button");
    onSignInPage.clickSignInBtn();
    cy.log("verifying error message is displayed");
    cy.contains(ErrorMsgText.REQUIRED_PSWD).should("be.visible");
  });

  it("should login with valid credentials", () => {
    cy.log("clicking on Sign in link");
    onLandingPage.clickSignInLink();
    cy.log("entering email");
    onSignInPage.enterEmail(Cypress.env("email"));
    cy.log("entering password");
    onSignInPage.enterPSWD(Cypress.env("password"));
    cy.log("clicking Sign in button");
    onSignInPage.clickSignInBtn();
    cy.log("verifying correct username is displayed");
    onHomePage.verifyUserName(Cypress.env("username"));
  });
});
