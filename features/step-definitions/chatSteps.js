import {Given, When, Then} from "@wdio/cucumber-framework"
import { tests } from "../support/test.js"

Given ("User sees both user have opened the page and connected to the server", async function() {
    await tests.ChatTest.openChatPage(1)
    await tests.ChatTest.openChatPage(2)
    await tests.ChatTest.openChatPage(3)

    await tests.ChatTest.assertSuccessfulConnection()
})

When ("User sees that all users enter the nickname", async function() {
    await tests.ChatTest.firstUserEntersChat()
    await tests.ChatTest.secondUserEntersChat()
    await tests.ChatTest.thirdUserEntersChat()
})

When ("User sees that all users connect to the broker", async function() {
    await tests.ChatTest.assertOtherJoin()
})

When ("User sees that both user see themselves and each other in the Connected list", async function() {
    await tests.ChatTest.assertUserJoin()
})

When ("User sees that user1 sends any message", async function() {
    await tests.ChatTest.firstUserMessage()
})

When ("User sees that user2 and user3 receives the sent message", async function() {
    await tests.ChatTest.secondUserAssertMsg()
    await tests.ChatTest.thirdUserAssertMsg()
})

When ("User sees that user2 and user3 sends any message", async function() {
    await tests.ChatTest.secondUserMessage()
    await tests.ChatTest.thirdUserMessage()
})

Then ("User sees that user1 received the sent messages", async function() {
    await tests.ChatTest.firstUserAssertMsg()
})

When ("User sees that all users can disconnect and lose connection", async function() {
    await tests.ChatTest.firstUserDisconnect()

    await tests.ChatTest.secondUserAssertsFirstUserDsc()
    await tests.ChatTest.secondUserDisconnect()

    await tests.ChatTest.thirdUserAssertsUserDsc()
    await tests.ChatTest.thirdUserDisconnect()
})