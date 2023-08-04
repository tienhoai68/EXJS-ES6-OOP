import { Person } from "./Person.js";

export class Student extends  Person {
    constructor(id, name, address, email, role,math, physics, chemistry) {
        super(id, name, address, email, role);
        this.math = math;
        this.physics = physics;
        this.chemistry = chemistry;
        this.total = 0;
    };
    calculateAverage() {
        this.total = (this.math + this.physics + this.chemistry) / 3;
    }
    roundNumber(Number) {
        let numberRound = Math.floor(Number * 10) / 10;
        if (numberRound === 10) {
            numberRound = 10; 
        } 
        return numberRound;
      }
    render(data) {
        let content ="" ;
        const { id, name, address, email, math, physics, chemistry, total } = data;
        const numberTotal = this.roundNumber(total);
        content += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${address}</td>
                <td>${email}</td>
                <td>                                   
                TotalScore: ${numberTotal} Điểm                 
                </td>                   
                <td>
                  <button onclick="openUpdateModal('${id}')" data-toggle="modal"
                    data-target="#myModal" class="btn btn-primary"><i class="fas fa-edit"></i></button>
                    <button onclick="delPerson('${id}')" class="btn btn-danger" ><i class="fa fa-trash" aria-hidden="true"></i></button>
                </td>
                <td><button onclick="showDetails('${id}')" data-toggle="modal"
                    data-target="#myModal" class="btn btn-info"><i class="fa-solid fa-circle-info"></i></button>
                </td>           
            </tr>
        `;
        return content;
    }
}