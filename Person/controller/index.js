import { Customer } from "../models/Customer.js";
import { Employee } from "../models/Employee.js";
import { Student } from "../models/Student.js";
import { ListPerson } from "../services/listPerson.js";
import { Notification } from "../models/Notification.js";
import { Validation } from "../models/Validation.js";
const domId = (id) => document.getElementById(id);
const listPerson = new ListPerson();
const validation = new Validation();
const notification = new Notification();
notification.clearWhenInput();
const saveData = () => {
    setlocalStorage();
    renderTable();
}
const getValueInput = (isAdd , isExistEmail) => {
    const id = domId("code").value;
    const name = domId("name").value;
    const address = domId("address").value;
    const email = domId("email").value;
    const role = domId("role").value;
    let person;
    console.log(listPerson.person);
    if (notification.checkValidation(listPerson.person, isAdd, isExistEmail)) {
        if (role === "Student") {
            const math = parseFloat(domId("math").value);
            const physics = parseFloat(domId("physics").value);
            const chemistry = parseFloat(domId("chemistry").value);
            person = new Student(id, name, address, email, role, math, physics, chemistry);
            person.calculateAverage();
        } else if (role === "Employee") {
            const workingDays = parseInt(domId("workingDays").value);
            const dailySalary = parseFloat(domId("dailySalary").value);
            person = new Employee(id, name, address, email, role, workingDays, dailySalary);
            person.calculateSalary();
        } else if (role === "Customer") {
            const companyName = domId("companyName").value;
            const orderValue = parseFloat(domId("orderValue").value);
            const rating = parseFloat(domId("rating").value);
            person = new Customer(id, name, address, email, role, companyName, orderValue, rating);
        }
    }
    return person;
};

domId("btnThemSP").onclick = () => {
    document.querySelector(".modal-title").innerHTML = "Add User";
    domId("modal-footer").innerHTML = `<button onclick="addUser()" class="btn btn-success">Add</button>`;
    notification.clearInput();
}
window.addUser = () => {
    let user = getValueInput(true, true);
    if (user) {
        listPerson.addPerson(user);
        saveData();
        document.querySelector(".close").click();
    }
}
const renderTable = (data = listPerson.person) => {
    const content = data.reduce((total, element) => {
        switch (element.role) {
            case "Student":
                const student = new Student();
                total += student.render(element);
                break;
            case "Employee":
                const employee = new Employee();
                total += employee.render(element);
                break;
            case "Customer":
                const customer = new Customer();
                total += customer.render(element);
                break;
            default:
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
window.openUpdateModal = (personId) => {
    console.log(personId);
    document.querySelector(".modal-title").innerHTML = "Edit Person";
    domId("modal-footer").innerHTML = `<button onclick="updateUser()" class="btn btn-success">Update</button>`;
    const existedPerson = listPerson.findByid(personId);
    const { id, name, address, email, role, math, physics, chemistry, workingDays, dailySalary, companyName, orderValue, rating } = existedPerson;
    domId("code").value = id;
    domId("name").value = name;
    domId("address").value = address;
    domId("email").value = email
    domId("role").value = role;
    if (role === "Student") {
        console.log(role);
        showSubject();
        domId("math").value = math;
        domId("physics").value = physics;
        domId("chemistry").value = chemistry;
        hiddenEmployee();
        hiddenCustomer();
    } else if (role === "Employee") {
        showEmployee();
        domId("workingDays").value = workingDays;
        domId("dailySalary").value = dailySalary;
        hiddenSubject();
        hiddenCustomer();
    } else if (role === "Customer") {
        showCustomer();
        domId("companyName").value = companyName;
        domId("orderValue").value = orderValue;
        domId("rating").value = rating;
        hiddenEmployee();
        hiddenSubject();
    }
}
window.delPerson = (id) => {
    console.log(id);
    listPerson.delPerson(id);
    saveData();
}
const findCurrentEmail = () => {
    let account = domId('code').value;
    let currentEmployee = listPerson.findByid(account);
    return currentEmployee.email;
}
window.updateUser = () => {
    let currentEmail = findCurrentEmail();
    let inputEmail = domId('email').value;
    let person;
    if (inputEmail === currentEmail) {
        validation.disableError('errorEmail');
        person = getValueInput(false, false);
    } else {
        person = getValueInput(false, true);
    }
    if(person) {
        listPerson.updatePerson(person);
        saveData();
        document.querySelector(".close").click();
    }
}