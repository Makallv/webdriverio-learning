import { FormPage } from "../page-objects/formPage.js";
import { IFramePage } from "../page-objects/iFramePage";
import { SortingPage } from "../page-objects/sortingPage";
import { ChatPage } from "../page-objects/chatPage";

class Pages {
    constructor(){
        this.formPage = new FormPage()
        this.iFramePage = new IFramePage()
        this.sortingPage = new SortingPage()
        this.chatPage = new ChatPage()
    }
}

export const pages = new Pages()