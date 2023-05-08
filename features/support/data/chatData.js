import {faker} from "@faker-js/faker";


export default class UserChat {
    constructor() {
        this.firstUser = new FirstUser(faker.name.firstName(),faker.lorem.text())
        this.secondUser = new SecondUser(faker.name.firstName(),faker.lorem.text())

    }
}

class FirstUser {
    constructor(
        firstName,
        lorem
    ){
        this.firstName = firstName
        this.lorem = lorem
    }
}

class SecondUser {
    constructor(
        firstName,
        lorem
    ){
        this.firstName = firstName
        this.lorem = lorem
    }
}