import { Cat } from "./cat.model";

export class PasswordToken {
    cat: Cat;
    token: string;

    constructor(cat: Cat, token: string) {
        this.cat=cat;
        this.token=token;
    }
}