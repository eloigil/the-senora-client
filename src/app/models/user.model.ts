export class User {
    name: String;
    username: String;
    password: String;
    role: String;

    constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}
