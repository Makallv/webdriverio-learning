import {Given, When, Then} from "@wdio/cucumber-framework"
import { tests } from "../support/test.js"

Given ("User sees both user have opened the page and connected to the server", async function() {
    await tests.ChatTest.openChatPage(1)
    await tests.ChatTest.openChatPage(2)

    await tests.ChatTest.assertSuccessfulConnection()
    await browser.pause(5000)
})

When ("User sees that both user enter the nickname", async function() {
    await tests.ChatTest.firstUserEntersChat()
    await tests.ChatTest.secondUserEntersChat()
    await browser.pause(5000)
})

When ("User sees that both user connect to the broker", async function() {
    await tests.ChatTest.assertOtherJoin()
})

When ("User sees that both user see themselves and each other in the Connected list", async function() {
    await tests.ChatTest.assertUserJoin()
})

When ("User sees that user1 sends any message", async function() {
    await tests.ChatTest.firstUserMessage()
})

When ("User sees that user2 receives the sent message", async function() {
    await tests.ChatTest.secondUserAssertMsg()
})

When ("User sees that user2 sends any message", async function() {
    await tests.ChatTest.secondUserMessage()
})

Then ("User sees that user1 received the sent message", async function() {
    await tests.ChatTest.firstUserAssertMsg()
})

When ("User sees that both user can disconnect and lose connection", async function() {
    await tests.ChatTest.firstUserDisconnect()

    await tests.ChatTest.secondUserAssertsFirstUserDsc()
    await tests.ChatTest.secondUserDisconnect()
})