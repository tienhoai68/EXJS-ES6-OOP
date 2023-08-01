export class ListPerson {
    person = [];
    addPerson = (person) => {
        this.person = [...this.person, person];
    }
    
    delPerson = (id) => {
     const index = this.person.findIndex((element) => {
            return element.id === id;
        })
        this.person.splice(index, 1);
    };
    findByid = (id) => {
       const existedPerson = this.person.find((element) => {
            return element.id === id;
        })
        return existedPerson;
    }
}