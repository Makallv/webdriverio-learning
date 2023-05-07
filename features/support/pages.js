import { FormPage } from "../page-objects/formPage.js";
import { IFramePage } from "../page-objects/iFramePage";
import { SortingPage } from "../page-objects/sortingPage";

class Pages {
    constructor(){
        this.formPage = new FormPage()
        this.iFramePage = new IFramePage()
        this.sortingPage = new SortingPage()
    }
}

export const pages = new Pages()