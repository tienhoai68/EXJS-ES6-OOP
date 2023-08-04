import { Validation } from "./Validation.js";
const validation = new Validation();
const domId = (id) => document.getElementById(id);
export class Notification {
    showError = (errorId, mess) => {
        domId(errorId).style.display = "block";
        domId(errorId).innerHTML = mess;
    };

    disableError = (errorId) => {
        domId(errorId).style.display = "none";
        domId(errorId).innerHTML = "";
    };
    hiddenError = () => {
        const errors = [
            "errorCode",
            "errorName",
            "errorAddress",
            "errorEmail",
            "errorRole",
            "errorMath",
            "errorPhysics",
            "errorChemistry",
            "errorWorkingDays",
            "errorDailySalary",
            "errorOrderValue",
            "errorRating",
        ];
    
        errors.forEach((error) => {
            this.disableError(error);
        });
    };
    clearOption = (idShow, idValue) => {
        domId(idShow).style.display = "none";
        domId(idValue).value = "";
    };

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
    };
    
    clearErrorKeyup = (errorId, value) => {
        function clearErrorWhenInput() {
            // console.log(123);
            domId(errorId).style.display = "none";
            domId(errorId).innerHTML = "";
        }
        domId(value).addEventListener("keyup", clearErrorWhenInput);
        clearErrorWhenInput();
    };
    clearWhenInput = () => {
        this.clearErrorKeyup("errorCode", "code");
        this.clearErrorKeyup("errorName", "name");
        this.clearErrorKeyup("errorAddress", "address");
        this.clearErrorKeyup("errorEmail", "email");
        this.clearErrorKeyup("errorMath", "math");
        this.clearErrorKeyup("errorPhysics", "physics");
        this.clearErrorKeyup("errorChemistry", "chemistry");
        this.clearErrorKeyup("errorWorkingDays", "workingDays");
        this.clearErrorKeyup("errorDailySalary", "dailySalary");
        this.clearErrorKeyup("errorOrderValue", "orderValue");
        this.clearErrorKeyup("errorRating", "rating");
    }

    checkValidation = (listPerson, isAdd, isExistEmail) => {
        console.log(listPerson);
        const id = domId("code").value;
        const name = domId("name").value;
        const address = domId("address").value;
        const email = domId("email").value;
        const role = domId("role").value;
        let isValue = true;
        if (isAdd) {
            isValue &= validation.checkEmpty(id, "errorCode", "(*) Vui lòng nhập ID") && validation.CheckNumber(id, "errorCode", "(*) ID vui lòng nhập số") && validation.checkExistId(id, "errorCode", "(*) ID đã tồn tại", listPerson);
        }
        isValue &= validation.checkEmpty(name, "errorName", "(*) Vui lòng nhập tên") && validation.checkPattern(name, "errorName", "(*) Họ và Tên vui lòng nhập chữ", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        isValue &= validation.checkEmpty(address, "errorAddress", "(*) Vui lòng nhập địa chỉ");
        if (isExistEmail) {
            isValue &= validation.checkEmpty(email, "errorEmail", "(*) Vui lòng nhập email") && validation.checkPattern(email, "errorEmail", "(*) Vui lòng nhập email đúng định dạng", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && validation.checkEmailExist(email, "errorEmail", " (*) Email đã tồn tại", listPerson);
        }
        isValue &= validation.checkEmptyOption("role", "errorRole", "(*) Vui lòng nhập loại người dùng");
        if (role === "Student") {
            const math = domId("math").value;
            const physics = domId("physics").value;
            const chemistry = domId("chemistry").value;
            isValue &= validation.checkEmpty(math, "errorMath", "(*) Vui lòng nhập điểm toán") && validation.CheckNumber(math, "errorMath", "(*) Điểm toán vui lòng nhập số dương") && validation.checkNumberLength(math, "errorMath", "(*) Điểm toán vui lòng nhập từ 0 => 10", 0, 10);
            isValue &= validation.checkEmpty(physics, "errorPhysics", "(*) Vui lòng nhập điểm lý") && validation.CheckNumber(physics, "errorPhysics", "(*) Điểm lý vui lòng nhập số dương") && validation.checkNumberLength(physics, "errorPhysics", "(*) Điểm lý vui lòng nhập từ 0 => 10", 0, 10);
            isValue &= validation.checkEmpty(chemistry, "errorChemistry", "(*) Vui lòng điểm hóa") && validation.CheckNumber(chemistry, "errorChemistry", "(*) Điểm hóa vui lòng nhập số dương") && validation.checkNumberLength(chemistry, "errorChemistry", "(*) Điểm hóa vui lòng nhập từ 0 => 10", 0, 10);
        } else if (role === "Employee") {
            const workingDays = domId("workingDays").value;
            const dailySalary = domId("dailySalary").value;
            isValue &= validation.checkEmpty(workingDays, "errorWorkingDays", "(*) Vui lòng nhập ngày làm") && validation.CheckNumber(workingDays, "errorWorkingDays", "(*) Ngày làm vui lòng nhập số dương");
            isValue &= validation.checkEmpty(dailySalary, "errorDailySalary", "(*) Vui lòng nhập số tiền") && validation.CheckNumber(dailySalary, "errorDailySalary", "(*) Số tiền vui lòng nhập số dương");
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
    toggleInputDetails = (isDisabled) => {
        const fields = [
            "code",
            "name",
            "address",
            "email",
            "role",
            "math",
            "physics",
            "chemistry",
            "workingDays",
            "dailySalary",
            "companyName",
            "orderValue",
            "rating",
        ];
    
        fields.forEach((field) => {
            domId(field).disabled = isDisabled;
        });
    };
}

