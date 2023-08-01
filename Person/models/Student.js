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
    render(data) {
        let content ="" ;
        const { id, name, address, email, math, physics, chemistry, total } = data;
        content += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${address}</td>
                <td>${email}</td>
                <td>
                <ul style="list-style: none;">                        
                <li>Math: ${math}</li>
                <li>Physics: ${physics}</li>
                <li>Chemistry: ${chemistry}</li>                     
                <li>TotalScore: ${total.toFixed(1)}</li>                     
                </ul>
                </td>                   
                <td>
                  <button 
                    onclick="openUpdateModal('${id}')" data-toggle="modal"
                    data-target="#myModal" class="btn btn-primary">Edit</button>
                    <button onclick="delPerson('${id}')" class="btn btn-danger" >Del</button>
                </td>                 
            </tr>
        `;
        return content;
    }
}