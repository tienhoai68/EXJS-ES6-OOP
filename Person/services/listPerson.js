export class ListPerson {
    person = [];
    
    addPerson = (person) => {
        this.person = [...this.person, person];
    }
}