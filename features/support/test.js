import { RegisterTest } from "../test-objects/formTest";
import { IFrameTest } from "../test-objects/iFrameTest";

class Tests {
    constructor() {
        this.RegisterTest = new RegisterTest()
        this.IFrameTest = new IFrameTest();
    }
}

export const tests = new Tests()