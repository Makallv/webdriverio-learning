export class ChatPage{

    assertSuccessConnection(userId) {
        return browser[`user${userId}`].$('.text-success')
    }

    getNicknameInputField(userId) {
        return browser[`user${userId}`].$('#user')
    }

    getConnectionButton(userId) {
        return browser[`user${userId}`].$('#connectBtn')
    }

    assertJoinChat(userId, userName) {
        return browser[`user${userId}`].$(`//div[text()="${userName} has joined the chat"]`)
    }

    assertUserName(userId, userName) {
        return browser[`user${userId}`].$(`//*[@id='userList']//*[contains(text(),"${userName}")]`)
    }

    getChatInputField(userId) {
        return browser[`user${userId}`].$('#sendMessage')
    }

    getSendMessageButton(userId) {
        return browser[`user${userId}`].$('#replyBtn')
    }

    getUserMessage(userId, userName, userMessage) {
        return browser[`user${userId}`].$(`//div[text()="${userName}: ${userMessage}"]`)
    }

    getDisconnectButton(userId) {
        return browser[`user${userId}`].$('#disconnectBtn')
    }

    assertDisconnectedChat(userId, userName) {
        return browser[`user${userId}`].$(`//div[text()="${userName}: has disconnected"]`)
    }

}