import { Customer } from "../models/Customer.js";
import { Employee } from "../models/Employee.js";
import { Student } from "../models/Student.js";
import { ListPerson } from "../services/listPerson.js";
const domId = (id) => document.getElementById(id);
const listPerson = new ListPerson();

const getValueInput = () => {
    const id = domId("code").value;
    const name = domId("name").value;
    const address = domId("address").value;
    const email = domId("email").value;
    const role = domId("role").value;
    let person;
    if (role === "Student") {
        const math = parseFloat(domId("math").value);
        const physics = parseFloat(domId("physics").value);
        const chemistry = parseFloat(domId("chemistry").value);
        person = new Student(id, name, address, email, math, physics, chemistry);
    } else if (role === "Employee") {
        const workingDays = parseInt(domId("workingDays").value);
        const dailySalary = parseFloat(domId("dailySalary").value);
        person = new Employee(id, name, address, email, workingDays, dailySalary);
    } else if (role === "Customer") {
        const companyName = domId("companyName").value;
        const orderValue = parseFloat(domId("orderValue").value);
        const rating = parseFloat(domId("rating").value);
        person = new Customer(id, name, address, email, companyName, orderValue, rating);
    }
    console.log(person);
    return person;
};

domId("btnThemSP").onclick = () => {
    document.querySelector(".modal-title").innerHTML = "Add Product";
    domId("modal-footer").innerHTML = `<button onclick="addUser()" class="btn btn-success">Add</button>`;
}
window.addUser = () => {
    let user = getValueInput();
    listPerson.addPerson(user);
    setlocalStorage();
    renderTable();
}

const renderTable = (data = listPerson.person) => {
    let role = domId("role").value;
    const content = data.reduce((total, element) => {
        if (role === "Student") {
            total += `
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.address}</td>
                        <td>${element.email}</td>
                        <td>${element.math}</td>
                        <td>${element.physics}</td>
                        <td>${element.chemistry}</td>
                        <td>
                          <button 
                            onclick="openUpdateModal('${element.id}')" data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">SỬA</button>
                            <button onclick="deleteFood('${element.id}')" class="btn btn-danger" >XÓA</button>
                        </td>
                    </tr>
                `;
        }
        return total;
    }, "");

    domId("tblDanhSachSP").innerHTML = content;
}
// hàm setlocalStorage 
const setlocalStorage = () => {
    let dataString = JSON.stringify(listPerson.person);
    localStorage.setItem("LIST_PERSON", dataString);
}

const getLocalStorage = () => {
    let dataSting = localStorage.getItem("LIST_PERSON");
    if (dataSting) {
        listPerson.person = JSON.parse(dataSting);
    }
}

window.onload = () => {
    getLocalStorage();
    renderTable();
}
