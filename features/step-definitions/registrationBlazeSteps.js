import { Given, When, Then } from "@wdio/cucumber-framework";
import {tests} from "../support/test.js"

Given ("User opens login page", async function() {
    await tests.RegistrationTest.openDemoBlazePage()
})

When ("User fill the registration form", async function() {
    await tests.RegistrationTest.openSignUpModal()
    await tests.RegistrationTest.fillRegistrationForm()
    await tests.RegistrationTest.submitRegistration()
})

Then ("User successfully registered", async function() {

})