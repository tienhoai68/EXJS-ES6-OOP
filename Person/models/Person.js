export class Person {
    constructor(id, name, address, email) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
    }
    render() {
        throw new Error("Method not implemented");
    }

    getValue() {
        throw new Error("Method not implemented");
    }
}