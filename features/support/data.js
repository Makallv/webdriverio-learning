import UserData from "./data/userData";
import UserChat from "./data/chatData";

class Data{
    constructor() {
        this.UserData = new UserData()
        this.UserChat = new UserChat()
    }
}

export const data = new Data()