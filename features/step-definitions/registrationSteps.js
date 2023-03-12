import {Given, When, Then} from "@wdio/cucumber-framework";
import { test } from "../support/test";


Given ('I am on the login page', async function() {
    await test.RegisterTest.openFormPage()
})
When ('I register with username and password', async function() {
    await test.RegisterTest.fillUserInfo()
    await test.RegisterTest.submitForm()
})
Then ('I should see a flash message saying message', async function() {

})
