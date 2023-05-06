export class FormPage {

    getFirstNameInput() {
        return $('#firstName')
    }

    getLastNameInput() {
        return $('#lastName')
    }

    getEmailInput() {
        return $('#userEmail')
    }

    getOtherGender() {
        return $('#gender-radio-3').click({button: 'left'})
    }

    getUserMobNumber() {
        return $('#userNumber')
    }

    getSubmitButton() {
        return $('#submit').click({button: 'left'})
    }


}