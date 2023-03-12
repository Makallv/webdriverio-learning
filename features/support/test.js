import { RegisterTest } from "../test-objects/formTest";
import { RegistrationTest } from "../test-objects/registrationTest";

class Tests {
    constructor() {
        this.RegisterTest = new RegisterTest()
        this.RegistrationTest = new RegistrationTest();
    }
}

export const test = new Tests()