import { Person } from "./Person.js";

export class Employee extends Person {
    constructor(id, name, address, email, workingDays, dailySalary) {
        super(id, name, address, email);
        this.workingDays = workingDays;
        this.dailySalary = dailySalary;

    };
    render() {

    }

    getValue() {

    }
    calculateSalary() {
        return this.workingDays * this.dailySalary;
    }
} 