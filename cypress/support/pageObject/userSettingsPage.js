export class UserSettingsPage {
    clickLogOutButton() {
        cy.contains("button", "Or click here to logout.").click();
    }
}

export const onUserSettingsPage = new UserSettingsPage();