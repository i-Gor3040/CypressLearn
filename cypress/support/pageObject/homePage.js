export class HomePage {
  verifyUserName(USERNAME) {
    cy.get('[show-authed="true"] li')
      .eq(3)
      .should(($div) => {
        expect($div.get(0).innerText).to.eq(USERNAME);
      });
  }
  clickOnUserName() {
    cy.get('[show-authed="true"] li', { timeout: 3000 }).eq(3).click();
  }
}

export const onHomePage = new HomePage();
