/// <reference types="cypress" /> // is this really needed?
import { onLandingPage } from "../support/pageObject/landingPage";
import { onSignUpPage } from "../support/pageObject/signUpPage";

describe("Start testing", () => {
    before('open app', () => {
        cy.visit('/');
    })
   it("sign up", () => { 
   /*  cy.contains("Sign up").click();
    cy.get('[placeholder="Username"]').clear().type('Igor963');
    
    cy.get('[placeholder="Email"]').clear().type('igor@yopmail.com');

    cy.get('[placeholder="Password"]').clear().type('Test123@'); 

    cy.get('button').click() */
       onLandingPage.clickSignUpLink;
      onSignUpPage.enterUserName;
      onSignUpPage.enterEmail;
      onSignUpPage.enterPSWD;
      onSignUpPage.clickSignUpBtn; 

      //assert
    }); 
  });

