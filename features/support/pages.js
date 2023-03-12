import { FormPage } from "../page-objects/formPage.js";
import { HomePage } from "../page-objects/homePage.js";

class Pages {
    constructor(){
        this.formPage = new FormPage()
        this.basePage = new HomePage()
    }
}

export const pages = new Pages()