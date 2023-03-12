import {pages} from "../support/pages";
import {data} from "../support/data";

export class RegistrationTest{
    async openDemoBlazePage(){
       await browser.url('https://www.demoblaze.com/')

        await pages.basePage.pageTitle().getText()
        expect(pages.basePage.pageTitle().getText()).toEqual('PRODUCT STORE')
    }

    async openSignUpModal() {
        await pages.basePage.getSignUpButton().click({button: 'left'})
        await pages.basePage.getSignUpModal().waitForDisplayed(0)
    }

    async fillRegistrationForm() {
        await pages.basePage.getSignUpUsername().setValue(await data.UserData.newUser.userName)
        await pages.basePage.getSignUpPassword().setValue(await data.UserData.newUser.password)
    }

    async submitRegistration() {
        await pages.basePage.getSignUpBtn().click({button: 'left'})

    }
}