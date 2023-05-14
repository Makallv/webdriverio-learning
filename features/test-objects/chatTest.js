import { data } from "../support/data.js";
import { pages } from "../support/pages.js";

export class ChatTest {
    async openChatPage(userId) {
        await browser[`user${userId}`].url('https://demos.mqtt.cool/chat/')
    }

    async assertSuccessfulConnection() {
        await browser.maximizeWindow()
        await pages.chatPage.assertSuccessConnection(1)
        await browser.pause(1000)
        await browser.maximizeWindow()
        await pages.chatPage.assertSuccessConnection(2)
        await browser.pause(1000)
        await browser.maximizeWindow()
        await pages.chatPage.assertSuccessConnection(3)
        await browser.pause(1000)
    }

    async firstUserEntersChat() {
        await pages.chatPage.getNicknameInputField(1).click()
        await pages.chatPage.getNicknameInputField(1).setValue(await data.UserChat.firstUser.firstName)
        await pages.chatPage.getConnectionButton(1).click()
    }

    async secondUserEntersChat() {
        await pages.chatPage.getNicknameInputField(2).click()
        await pages.chatPage.getNicknameInputField(2).setValue(await data.UserChat.secondUser.firstName)
        await pages.chatPage.getConnectionButton(2).click()
    }

    async thirdUserEntersChat() {
        await pages.chatPage.getNicknameInputField(3).click()
        await pages.chatPage.getNicknameInputField(3).setValue(await data.UserChat.thirdUser.firstName)
        await pages.chatPage.getConnectionButton(3).click()
    }

    // Asserting ourselves
    async assertUserJoin() {
        await pages.chatPage.assertJoinChat(1, await data.UserChat.firstUser.firstName)
        await pages.chatPage.assertUserName(1, await data.UserChat.firstUser.firstName)

        await pages.chatPage.assertJoinChat(2, await data.UserChat.secondUser.firstName)
        await pages.chatPage.assertUserName(2, await data.UserChat.secondUser.firstName)

        await pages.chatPage.assertJoinChat(3, await data.UserChat.thirdUser.firstName)
        await pages.chatPage.assertUserName(3, await data.UserChat.thirdUser.firstName)
    }

    // asserting others
    async assertOtherJoin() {
        await pages.chatPage.assertJoinChat(2, await data.UserChat.firstUser.firstName)
        await pages.chatPage.assertUserName(2, await data.UserChat.firstUser.firstName)
        await pages.chatPage.assertUserName(2, await data.UserChat.thirdUser.firstName)
        await pages.chatPage.assertJoinChat(2, await data.UserChat.thirdUser.firstName)


        await pages.chatPage.assertJoinChat(1, await data.UserChat.secondUser.firstName)
        await pages.chatPage.assertUserName(1, await data.UserChat.secondUser.firstName)
        await pages.chatPage.assertUserName(1, await data.UserChat.thirdUser.firstName)
        await pages.chatPage.assertJoinChat(1, await data.UserChat.thirdUser.firstName)

        await pages.chatPage.assertJoinChat(3, await data.UserChat.firstUser.firstName)
        await pages.chatPage.assertUserName(3, await data.UserChat.firstUser.firstName)
        await pages.chatPage.assertUserName(3, await data.UserChat.secondUser.firstName)
        await pages.chatPage.assertJoinChat(3, await data.UserChat.secondUser.firstName)
    }
    async firstUserMessage() {
        await pages.chatPage.getChatInputField(1).click()
        await pages.chatPage.getChatInputField(1).setValue(await data.UserChat.firstUser.lorem)
        await pages.chatPage.getSendMessageButton(1).click()
    }

    async secondUserMessage() {
        await pages.chatPage.getChatInputField(2).click()
        await pages.chatPage.getChatInputField(2).setValue(await data.UserChat.secondUser.lorem)
        await pages.chatPage.getSendMessageButton(2).click()
    }

    async thirdUserMessage() {
        await pages.chatPage.getChatInputField(3).click()
        await pages.chatPage.getChatInputField(3).setValue(await data.UserChat.thirdUser.lorem)
        await pages.chatPage.getSendMessageButton(3).click()
    }

    async firstUserAssertMsg() {
        await pages.chatPage.getUserMessage(1, await data.UserChat.secondUser.firstName, await data.UserChat.secondUser.lorem)
        await pages.chatPage.getUserMessage(1, await data.UserChat.thirdUser.firstName, await data.UserChat.thirdUser.lorem)
    }

    async secondUserAssertMsg() {
        await pages.chatPage.getUserMessage(2, await data.UserChat.firstUser.firstName, await data.UserChat.firstUser.lorem)
    }

    async thirdUserAssertMsg() {
        await pages.chatPage.getUserMessage(3, await data.UserChat.firstUser.firstName, await data.UserChat.firstUser.lorem)
    }

    async firstUserDisconnect() {
        await pages.chatPage.getDisconnectButton(1).click()
        await pages.chatPage.assertDisconnectedChat(1, await data.UserChat.firstUser.firstName)
    }

    async secondUserAssertsFirstUserDsc() {
        await pages.chatPage.assertDisconnectedChat(2, await data.UserChat.firstUser.firstName)
    }

    async secondUserDisconnect() {
        await pages.chatPage.getDisconnectButton(2).click()
        await pages.chatPage.assertDisconnectedChat(2, await data.UserChat.secondUser.firstName)
    }

    async thirdUserAssertsUserDsc() {
        await pages.chatPage.assertDisconnectedChat(3, await data.UserChat.secondUser.firstName)
        await pages.chatPage.assertDisconnectedChat(3, await data.UserChat.firstUser.firstName)
    }

    async thirdUserDisconnect() {
        await pages.chatPage.getDisconnectButton(3).click()
        await pages.chatPage.assertDisconnectedChat(3, await data.UserChat.thirdUser.firstName)
    }
}