import { RegisterTest } from "../test-objects/formTest";
import { IFrameTest } from "../test-objects/iFrameTest";
import { SortingTest } from "../test-objects/sortingTest";
import { ChatTest } from "../test-objects/chatTest";

class Test {
    constructor() {
        this.RegisterTest = new RegisterTest()
        this.IFrameTest = new IFrameTest();
        this.SortingTest = new SortingTest();
        this.ChatTest = new ChatTest();
    }
}

export const tests = new Test()