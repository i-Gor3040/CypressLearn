export class UserProfilePage {

    editProfileSettingsButtonClick() {
        cy.contains('Edit Profile Settings').click();
    }
  }
  
  export const onUserProfilePage = new UserProfilePage();