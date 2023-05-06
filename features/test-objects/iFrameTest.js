import { pages } from "../support/pages";

const { expect } = require('chai');

export class IFrameTest{

    async openIFramePage(){
        await browser.url('https://demoqa.com/frames')
    }

    async checkIFrmaeHeading(){
        await browser.pause(2000)
        await browser.switchToFrame(await pages.iFramePage.iFrame)
        await browser.pause(2000)
        const actualHeading = await pages.iFramePage.heading.getText()

        await expect(actualHeading).to.equal('This is a sample page')
    }

}