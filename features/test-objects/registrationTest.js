import { pages } from "../support/pages";
import { data } from "../support/data";

const { expect } = require('chai');

export class BlazeRegistration {
    async openDemoBlazePage() {
        await browser.url("https://www.demoblaze.com/index.html")
        const pageTitle = await pages.basePage.pageTitle()
        const demo = "PRODUCT STORE"
        await expect(await pageTitle.getText()).to.equal(demo)
    }

    async openSignUpModal() {
        await browser.pause(5000)
        await pages.basePage.getSignUpButton().click({button: "left"})
    }

    async fillRegistrationForm() {
        await pages.basePage.getSignUpUsername().setValue(await data.UserData.newUser.userName)
        await pages.basePage.getSignUpPassword().setValue(await data.UserData.newUser.password)
    }

    async submitRegistration() {
        await pages.basePage.getSignUpBtn().click({button: "left"})

    }
}