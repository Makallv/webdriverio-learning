import { RegisterTest } from "../test-objects/formTest";
import { IFrameTest } from "../test-objects/iFrameTest";
import { SortingTest } from "../test-objects/sortingTest";

class Test {
    constructor() {
        this.RegisterTest = new RegisterTest()
        this.IFrameTest = new IFrameTest();
        this.SortingTest = new SortingTest();
    }
}

export const tests = new Test()