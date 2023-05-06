import { FormPage } from "../page-objects/formPage.js";
import { IFramePage } from "../page-objects/iFramePage";

class Pages {
    constructor(){
        this.formPage = new FormPage()
        this.iFramePage = new IFramePage()
    }
}

export const pages = new Pages()