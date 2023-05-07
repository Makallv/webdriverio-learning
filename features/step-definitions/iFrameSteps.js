import { Given, When, Then } from "@wdio/cucumber-framework";
import {tests} from "../support/tests.js"

Given("User opens iFrame page", async function() {
    await tests.IFrameTest.openIFramePage()
});

Then("User checks iFrame", async function(){
    await tests.IFrameTest.checkIFrmaeHeading()
})

