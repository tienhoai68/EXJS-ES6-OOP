export class Person {
    constructor(id, name, address, email, role) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.email = email;
        this.role = role;
    }
    render() {
        throw new Error("Method not implemented");
    }
}