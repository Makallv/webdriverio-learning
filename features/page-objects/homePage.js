export class HomePage{

    getSignUpButton() {
        return $('#signin2')
    }

    getSignUpUsername() {
        return $('#sign-username')
    }

    getSignUpModal() {
        return $('#signInModalLabel')
    }

    getSignUpPassword() {
        return $('#sign-password')
    }

    getSignUpBtn() {
        return $('[onclick="register()"]')
    }

    pageTitle() {
        return $('#nava')
    }

}