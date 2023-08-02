const domId = (id) => document.getElementById(id);
export class Validation {
    showError = (errorId, mess) => {
        domId(errorId).style.display = "block";
        domId(errorId).innerHTML = mess;
    }
    disableError = (errorId) => {
        domId(errorId).style.display = "none";
        domId(errorId).innerHTML = "";
    }
    checkEmpty = (value, errorId, mess) => {
        if (value === "") {
            this.showError(errorId, mess);
            return false;
        }
        this.disableError(errorId);
        return true;
    };
    checkEmptyOption = (idCheck, errorId, mess) => {
        let dataCheck = document.getElementById(idCheck);
        if (dataCheck.selectedIndex !== 0) {
            this.disableError(errorId);
            return true;
        }
        this.showError(errorId, mess);
        return false;
    };
    CheckNumber = (value, errorId, mess) => {
        var pattern = /(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)/g;
        if (pattern.test(value)) {
            this.disableError(errorId);
            return true;
        }
        this.showError(errorId, mess);
        return false;
    };
    checkDigitLength = (value, errorId, mess, min, max) => {
        if (value.trim().length >= min && value.trim().length <= max) {
            this.disableError(errorId);
            return true;
        }
        this.showError(errorId, mess);
        return false;
    };
    checkNumberLength =  (value, errorId, mess, min, max)=> {
        if (value >= min && value <= max) {
            this.disableError(errorId);
            return true;
        }
        this.showError(errorId, mess);
        return false;
    };
    checkExistId = (value, errorId, mess, listEmployee) => {
        let isExist = false;
        for (var i = 0; i < listEmployee.length; i++) {
            var employee = listEmployee[i];
            if (value === employee.id) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            this.showError(errorId, mess);
            return false;
        }
        this.disableError(errorId);
        return true;
    };
    checkEmailExist =  (value, errorId, mess, listEmployee) => {
        var isExist = false;
        for (var i = 0; i < listEmployee.length; i++) {
            var employee = listEmployee[i];
            if (value === employee.email) {
                isExist = true;
                break;
            }
        }
        if (isExist) {
            this.showError(errorId, mess);
            return false;
        }
        this.disableError(errorId);
        return true;
    };

    checkPattern = (value, errorId, mess, letter) => {
        if (value.match(letter)) {
            this.disableError(errorId);
            return true;
        }
        this.showError(errorId, mess);
        return false;
    };
}