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
    };
    updatePerson = (person) => {
       const index =  this.person.findIndex((element) => {
            return element.id === person.id;
        })
        return this.person[index] = person;
    }
}