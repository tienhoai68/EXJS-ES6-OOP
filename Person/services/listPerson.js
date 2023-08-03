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
        const index = this.person.findIndex((element) => {
            return element.id === person.id;
        })
        return this.person[index] = person;
    };
    firstName = (hoTen) => {
        const mangTen = hoTen.split(' ');
        const ten = mangTen[mangTen.length - 1];
        return ten;
    }

    // Hàm so sánh tên theo thứ tự A-Z
    sapXepTenAZ = (a, b) => {
        const tenA = this.firstName(a.name);
        const tenB = this.firstName(b.name);
        if (tenA < tenB) {
            return -1;
        }
        if (tenA > tenB) {
            return 1;
        }
        return 0;
    }

    // Hàm so sánh tên theo thứ tự Z-A
    sapXepTenZA = (a, b) => {
        const tenA = this.firstName(a.name);
        const tenB = this.firstName(b.name);
        if (tenA < tenB) {
            return 1;
        }
        if (tenA > tenB) {
            return -1;
        }
        return 0;
    };
    filterByRole(role) {
        const data = this.person.filter((element) => {
            if (role === "All") {
                return true;
            }

            return element.role === role;
        });
        return data;
    }
}