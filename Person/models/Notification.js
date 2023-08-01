import { Validation } from "./Validation.js";
const validation = new Validation;
const domId = (id) => document.getElementById(id);
export class Notification {
    showError = (errorId, mess) => {
        domId(errorId).style.display = "block";
        domId(errorId).innerHTML = mess;
    }
    disableError = (errorId) => {
        domId(errorId).style.display = "none";
        domId(errorId).innerHTML = "";
    }
    clearOption = (idShow, idValue) => {
        domId(idShow).style.display = "none";
        domId(idValue).value = "";
    }
    clearInput = () => {
        domId("code").value = "";
        domId("name").value = "";
        domId("address").value = "";
        domId("email").value = "";
        domId("role").value = 0;
        this.clearOption("showToan", "math");
        this.clearOption("showLy", "physics");
        this.clearOption("showHoa", "chemistry");
        this.clearOption("showWorkingDays", "workingDays");
        this.clearOption("showDailySalary", "dailySalary");
        this.clearOption("showCompanyName", "companyName");
        this.clearOption("showOrderValue", "orderValue");
        this.clearOption("showRating", "rating");
    }
    checkValidation = () => {
        const id = domId("code").value;
        const name = domId("name").value;
        const address = domId("address").value;
        const email = domId("email").value;
        const role = domId("role").value;
        let isValue = true;
        isValue &= validation.checkEmpty(id, "errorCode", "(*) Vui lòng nhập ID");
        isValue &= validation.checkEmpty(name, "errorName", "(*) Vui lòng nhập tên");
        isValue &= validation.checkEmpty(address, "errorAddress", "(*) Vui lòng nhập địa chỉ");
        isValue &= validation.checkEmpty(email, "errorEmail", "(*) Vui lòng nhập email");
        isValue &= validation.checkEmptyOption("role", "errorRole", "(*) Vui lòng nhập loại người dùng");
        if (role === "Student") {
            const math = domId("math").value;
            const physics = domId("physics").value;
            const chemistry = domId("chemistry").value;
            isValue &= validation.checkEmpty(math, "errorMath", "(*) Vui lòng nhập điểm toán");
            isValue &= validation.checkEmpty(physics, "errorPhysics", "(*) Vui lòng nhập điểm lý");
            isValue &= validation.checkEmpty(chemistry, "errorChemistry", "(*) Vui lòng điểm hóa");
        } else if (role === "Employee") {
            const workingDays = domId("workingDays").value;
            const dailySalary = domId("dailySalary").value;
            isValue &= validation.checkEmpty(workingDays, "errorWorkingDays", "(*) Vui lòng nhập ngày làm");
            isValue &= validation.checkEmpty(dailySalary, "errorDailySalary", "(*) Vui lòng nhập số tiền");
        } else if (role === "Customer") {
            const companyName = domId("companyName").value;
            const orderValue = domId("orderValue").value;
            const rating = domId("rating").value;
            isValue &= validation.checkEmpty(companyName, "errorCompanyName", "(*) Vui lòng tên công ty");
            isValue &= validation.checkEmpty(orderValue, "errorOrderValue", "(*) Vui lòng nhập trị giá hóa đơn");
            isValue &= validation.checkEmpty(rating, "errorRating", "(*) Vui lòng đánh giá");
        }
        return isValue;
    }
}