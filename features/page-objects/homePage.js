export class HomePage{

    getSignUpButton() {
        return $('#signin2').click({button: 'left'})
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
        return $('[onclick="register()"]').click({button: 'left'})
    }

    pageTitle() {
        return $('#nava')
    }

}