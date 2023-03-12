import {faker} from "@faker-js/faker";


export default class UserData {
    constructor() {
       this.newUser = new NewUser(
           faker.name.firstName(),
           faker.name.lastName(),
           faker.internet.email(),
           faker.phone.number(),
           faker.internet.userName(),
           faker.internet.password()
       )
    }
}

class NewUser {
    constructor(
        firsName,
        lastName,
        email,
        number,
        userName,
        password
    ) {
        this.firstName = firsName
        this.lastName = lastName
        this.email = email
        this.number = number
        this.userName = userName
        this.password = password
    }
}