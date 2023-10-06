import { faker } from "@faker-js/faker";
import { onLandingPage } from "../support/pageObject/landingPage";
import { onSignUpPage } from "../support/pageObject/signUpPage";
import { onHomePage } from "../support/pageObject/homePage";
import { onUserProfilePage } from "../support/pageObject/userProfilePage";
import { onUserSettingsPage } from "../support/pageObject/userSettingsPage";
import { onSignInPage } from "../support/pageObject/signInPage";

const USERNAME = faker.person.firstName() + faker.number.int({ min: 1, max: 100 });
const EMAIL = faker.internet.email();
const PSWD = faker.internet.password();

describe("Start testing", () => {
  beforeEach("open app", () => {
    cy.visit("/");
  });

  // TODO Add test with user name already taken
  it("sign up", () => {
    onLandingPage.clickSignUpLink();

    onSignUpPage.enterUserName(USERNAME);
    onSignUpPage.enterEmail(EMAIL);
    onSignUpPage.enterPSWD(PSWD);
    onSignUpPage.clickSignUpBtn();

    onHomePage.verifyUserName(USERNAME); //ask opinion about implementation
    onHomePage.clickOnUserName();

    onUserProfilePage.editProfileSettingsButtonClick();

    onUserSettingsPage.clickLogOutButton();
  });

  it("login with invalid email", () => {
    onLandingPage.clickSignInLink();

    onSignInPage.enterEmail('invalid@email.com');
    onSignInPage.enterPSWD(PSWD);
    onSignInPage.clickSignInBtn();

    cy.contains('email or password is invalid')
      .should('be.visible')
    });

    it.skip("login with empty email", () => {
      cy.contains('Sign in').click();
  
      cy.get('[placeholder="Password"]')
        .clear()
        .type("Test123@");
  
        cy.get("button")
          .contains('Sign in')
          .click();
  
        cy.contains("email can't be blank")
        .should('be.visible');
      });

  it.skip("login with invalid password", () => {
      cy.contains('Sign in').click();
  
      cy.get('[placeholder="Email"]')
        .clear()
        .type(USERNAME + "@yopmail.com");
  
      cy.get('[placeholder="Password"]')
        .clear()
        .type("Test123!");
  
        cy.get("button")
          .contains('Sign in')
          .click();
  
        cy.contains('email or password is invalid')
        .should('be.visible');
      });

  it.skip("login with empty password", () => {
        cy.contains('Sign in').click();
    
        cy.get('[placeholder="Email"]')
          .clear()
          .type(USERNAME + "@yopmail.com");
    
          cy.get("button")
            .contains('Sign in')
            .click();
    
          cy.contains("password can't be blank")
          .should('be.visible');
        });

  it("login with valid credentials", () => {
    /* cy.contains('Sign in').click(); */
    onLandingPage.clickSignInLink();
    onSignInPage.enterEmail(EMAIL);
    onSignInPage.enterPSWD(PSWD);
    onSignInPage.clickSignInBtn();

    onHomePage.verifyUserName(USERNAME);

    /* cy.get('[placeholder="Email"]')
      .clear()
      .type(USERNAME + "@yopmail.com"); */

   /*  cy.get('[placeholder="Password"]')
      .clear()
      .type("Test123@"); */

      // cy.get("button").contains('Sign in').click();

     /*  cy.get('[show-authed="true"] li')
      .eq(3)
      .should(($div) => {
        expect($div.get(0).innerText).to.eq(USERNAME);
      }); */

  })
});
