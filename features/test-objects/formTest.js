import { pages } from "../support/pages";
import { data } from "../support/data"

export class RegisterTest {
    async openFormPage() {
        await browser.url('https://demoqa.com/automation-practice-form')
    }

    async fillUserInfo() {
        await pages.formPage.getFirstNameInput().setValue(await  data.UserData.newUser.firstName)
        await pages.formPage.getLastNameInput().setValue(await data.UserData.newUser.lastName)
        await pages.formPage.getEmailInput().setValue(await data.UserData.newUser.email)
        await pages.formPage.getOtherGender()
        await pages.formPage.getUserMobNumber().setValue(await data.UserData.newUser.number)
    }

    async submitForm() {
        await pages.formPage.getSubmitButton()
    }
}