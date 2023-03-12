import { Given, When, Then} from "@wdio/cucumber-framework";
import {test} from "../support/test";

Given ('I am on the login page', async function() {
    await test.RegistrationTest.openDemoBlazePage()
})

When ('I register with username and password', async function() {
    await test.RegistrationTest.fillRegistrationForm()
})

Then ('I should see a flash message saying message', async function() {
    await test.RegistrationTest.submitRegistration()
})


Given ('I am on the login page', async function() {

})
When ('I fill the username and password', async function() {

})
Then ('I should see a message', async function() {

})