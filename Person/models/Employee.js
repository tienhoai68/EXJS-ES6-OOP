import { Person } from "./Person.js";

export class Employee extends Person {
  constructor(id, name, address, email, role, workingDays, dailySalary) {
    super(id, name, address, email, role);
    this.workingDays = workingDays;
    this.dailySalary = dailySalary;
    this.salary = 0;
  };
  calculateSalary() {
    this.salary = (this.workingDays * this.dailySalary);
  }
  convertToVND(Price) {
    const PriceVND = Price.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });

    return PriceVND;
  }
  render(data) {
    const { id, name, address, email, workingDays, dailySalary, salary } = data;
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