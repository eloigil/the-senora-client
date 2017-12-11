export class User {
    name: String;
    username: String;
    password: String;


    constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}
