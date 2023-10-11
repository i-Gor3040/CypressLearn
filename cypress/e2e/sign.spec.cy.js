import { faker } from "@faker-js/faker";
import { onLandingPage } from "../support/pageObject/landingPage";
import { onSignUpPage } from "../support/pageObject/signUpPage";
import { onHomePage } from "../support/pageObject/homePage";
import { onUserProfilePage } from "../support/pageObject/userProfilePage";
import { onUserSettingsPage } from "../support/pageObject/userSettingsPage";

let USERNAME;
let EMAIL;
let PSWD;

describe("Start testing", () => {
  beforeEach("open app", () => {
    USERNAME =
      faker.person.firstName() + faker.number.int({ min: 1, max: 100 });
    EMAIL = faker.internet.email();
    PSWD = faker.internet.password();
    cy.log("opening web page");
    onLandingPage.openBasePage();
    cy.log("clicking on Sign in link");
    onLandingPage.clickSignUpLink();

    cy.log("entering username");
    onSignUpPage.enterUserName(USERNAME);
    cy.log("entering email");
    onSignUpPage.enterEmail(EMAIL);
    cy.log("entering password");
    onSignUpPage.enterPSWD(PSWD);
    cy.log("clicking Sign up button");
    onSignUpPage.clickSignUpBtn();
  });

  it("should verify username", () => {
    cy.log("verifying correct username is displayed");
    onHomePage.verifyUserName(USERNAME);
  });

  it("should log out", () => {
    cy.log("clicking on username");
    onHomePage.clickOnUserName();
    cy.log("clicking on Edit Profile Settings btn");
    onUserProfilePage.editProfileSettingsButtonClick();
    cy.log("clicking on logout btn");
    onUserSettingsPage.clickLogOutButton();
    cy.log("verifying Sign in link is displayed");
    onLandingPage.getSignInLink().should("be.visible");
  });
});
