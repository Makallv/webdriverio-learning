import { Given, When, Then } from "@wdio/cucumber-framework";
import {tests} from "../support/test.js"

Given ("User opens login page", async function() {
    await tests.RegistrationTest.openDemoBlazePage()
})

When ("User fill the registration form", async function() {
    await tests.RegistrationTest.openSignUpModal()
    await browser.pause(5000)
    await tests.RegistrationTest.fillRegistrationForm()
    await browser.pause(5000)
    await tests.RegistrationTest.submitRegistration()
    await browser.pause(5000)
})

Then ("User successfully registered", async function() {

})