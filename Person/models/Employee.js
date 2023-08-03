import { Person } from "./Person.js";

export class Employee extends Person {
    constructor(id, name, address, email, role, workingDays, dailySalary) {
        super(id, name, address, email, role);
        this.workingDays = workingDays;
        this.dailySalary = dailySalary; 
        this.salary = 0;      
    };
    calculateSalary() {
        this.salary =  (this.workingDays * this.dailySalary);
    }
    convertToVND(Price) {
        const PriceVND = Price.toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND',
        });
      
        return PriceVND;
      }
    render(data) {
        const { id, name, address, email, workingDays, dailySalary, salary} = data; 
        const salaryVND = this.convertToVND(salary);
        let content = "";
        content += `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${address}</td>
            <td>${email}</td>
            <td>                                                  
            TotalSalary: ${salaryVND}                       
            </td>                   
            <td>
              <button 
                onclick="openUpdateModal('${id}')" data-toggle="modal"
                data-target="#myModal" class="btn btn-primary">Edit</button>
                <button onclick="delPerson('${id}')" class="btn btn-danger" >Del</button>
                <button onclick="showDetails('${id}')" data-toggle="modal"
                    data-target="#myModal" class="btn btn-info">Details</button>
            </td>                 
        </tr>
    `;
    return content;
    }
} 