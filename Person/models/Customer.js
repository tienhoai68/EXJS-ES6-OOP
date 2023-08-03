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