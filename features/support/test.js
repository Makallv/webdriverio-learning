import { RegisterTest } from "../test-objects/formTest";
import { BlazeRegistration } from "../test-objects/registrationTest";

class Tests {
    constructor() {
        this.RegisterTest = new RegisterTest()
        this.RegistrationTest = new BlazeRegistration();
    }
}

export const tests = new Tests()