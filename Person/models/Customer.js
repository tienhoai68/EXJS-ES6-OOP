import { Person } from "./Person.js";

export class Customer extends Person {
    constructor(id, name, address, email, role, companyName, orderValue, rating) {
        super(id, name, address, email, role);
        this.companyName = companyName;
        this.orderValue = orderValue;
        this.rating = rating;
    };
    render(data) {
        let content = "";
        const { id, name, address, email, companyName, orderValue, rating } = data;
        content += `
                    <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${address}</td>
                        <td>${email}</td>
                        <td>                       
                        CompanyName: ${companyName}                                       
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