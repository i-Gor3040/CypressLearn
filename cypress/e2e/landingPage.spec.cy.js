import { faker } from "@faker-js/faker";
// import { onLandingPage } from "../support/pageObject/landingPage";
// import { onSignUpPage } from "../support/pageObject/signUpPage";

const USERNAME = faker.person.firstName() + faker.number.int({ min: 1, max: 100 });

describe("Start testing", () => {
  beforeEach("open app", () => {
    cy.visit("/");
  });

  // Add test with user name already taken
  it("sign up", () => {
    cy.contains("Sign up").click();
    cy.get('[placeholder="Username"]').clear().type(USERNAME);

    cy.get('[placeholder="Email"]')
      .clear()
      .type(USERNAME + "@yopmail.com");

    cy.get('[placeholder="Password"]')
      .clear()
      .type("Test123@");

    cy.get("button").click();

    cy.get('[show-authed="true"] li')
      .eq(3)
      .should(($div) => {
        expect($div.get(0).innerText).to.eq(USERNAME);
      });

    cy.get('[show-authed="true"] li').eq(3).click();

    cy.contains("Edit Profile Settings").click();

    cy.contains("button", "Or click here to logout.").click();
  });

  it("login with invalid email", () => {
    cy.contains('Sign in').click();

    cy.get('[placeholder="Email"]')
      .clear()
      .type(USERNAME + "@yopmal.com");

    cy.get('[placeholder="Password"]')
      .clear()
      .type("Test123@");

      cy.get("button")
        .contains('Sign in')
        .click();

      cy.contains('email or password is invalid')
      .should('be.visible');
    });

    it("login with empty email", () => {
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

  it("login with invalid password", () => {
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

  it("login with empty password", () => {
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
    cy.contains('Sign in').click();

    cy.get('[placeholder="Email"]')
      .clear()
      .type(USERNAME + "@yopmail.com");

    cy.get('[placeholder="Password"]')
      .clear()
      .type("Test123@");

      cy.get("button").contains('Sign in').click();

      cy.get('[show-authed="true"] li')
      .eq(3)
      .should(($div) => {
        expect($div.get(0).innerText).to.eq(USERNAME);
      });

  })
});
