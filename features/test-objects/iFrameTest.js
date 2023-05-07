import { pages } from "../support/pages";

const { expect } = require('chai');

export class IFrameTest{

    async openIFramePage(){
        await browser.url('https://demoqa.com/frames')
    }

    async checkIFrameHeading(){
        //await browser.pause(2000)
        await browser.switchToFrame(await pages.iFramePage.iFrame)
        //await browser.pause(2000)
        const actualHeading = await pages.iFramePage.heading.getText()

        await expect(actualHeading).to.equal('This is a sample page')
    }

    async openNewTab(){
        const initialHandle = await browser.getWindowHandle()

        await browser.newWindow("https://webdriver.io/")
        await browser.newWindow("https://www.testdevlab.com/")
        await browser.newWindow("https://www.delfi.lv/")

        const allTabs = await browser.getWindowHandles()
        const currentTabIndex = await allTabs.indexOf(await browser.getWindowHandle())
        await browser.switchToWindow(allTabs[currentTabIndex - 1])

        await browser.switchToWindow(initialHandle)

    }

}