import { pages } from "../support/pages.js";
import { numberToString } from "../support/numberParser.js";

export class SortingTest {

    async openSortingPage(){
        await browser.url('https://demoqa.com/sortable')
    }

    async activateGrid(){
        await pages.sortingPage.gridButton().click()
        expect(await pages.sortingPage.gridButton().getAttribute('class')).toContain('active')
    }

    async sortGrid(){
        let gridItems = await pages.sortingPage.getGridItems()
        let size = await gridItems.length
        let j = 0
        for (let i = size; i > 0; i--){
            let button
            await browser.waitUntil(async () => {
                let strOfNum = await numberToString(i)
                const boolArray = await Promise.all(gridItems.map(async (i) => {
                    let bool = await i.getText() === strOfNum
                    return bool
                }))
                button = await gridItems.filter((value, index) => boolArray[index])[0]

                return button
            })
            await button.dragAndDrop(gridItems[j])
            j++

        }
    }

    async assertGridIsSorted(){
        let gridItems = await pages.sortingPage.getGridItems()
        let size = await gridItems.length
        for (const item of gridItems){
            await expect(item).toHaveText(await numberToString(size))
            size--
        }
    }

}

export default new SortingTest()