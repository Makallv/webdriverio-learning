import {Given, When, Then} from "@wdio/cucumber-framework";
import { tests } from "../support/tests";


Given ('I am on the login page', async function() {
    await tests.RegisterTest.openFormPage()
})
When ('I register with username and password', async function() {
    await tests.RegisterTest.fillUserInfo()
    await tests.RegisterTest.submitForm()
})
Then ('I should see a flash message saying message', async function() {

})
