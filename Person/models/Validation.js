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
}