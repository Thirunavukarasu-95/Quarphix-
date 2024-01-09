import { v4 as uuidv4 } from 'uuid';

class Customer {
    constructor(email, password, securityAnswer, token) {

        this.email = email;
        this.password = password;
        this.securityAnswer = securityAnswer;
        this.token = token;
    }
}

let CustomerBuilder = function () {

    let email = `${uuidv4().replaceAll("-", "")}@test.com`;
    let password = "test1234";
    let securityAnswer = "test1234";

    return {
        setEmail: function (email) {
            this.email = email;
            return this;
        },
        setPassword: function (password) {
            this.password = password;
            return this;
        },
        setSecurityAnswer: function (securityAnswer) {
            this.securityAnswer = securityAnswer;
            return this;
        },
        build: function () {
            return new Customer(email, password, securityAnswer);
        }
    };
};

export {Customer, CustomerBuilder};