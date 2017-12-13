export class Advice {
    title: String;
    voice: String;
    text: String;
    childId: String;
    favorite: Boolean;

    constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}
