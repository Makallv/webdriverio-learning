import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from '../support/test.js';

Given('User opens sorting page', async function () {
    await tests.SortingTest.openSortingPage()
})

When('User should navigate to the Grid page', async function () {
    await tests.SortingTest.activateGrid()
})

Then('User sorts a grid', async function () {
    await tests.SortingTest.sortGrid()
    await tests.SortingTest.assertGridIsSorted()
})

