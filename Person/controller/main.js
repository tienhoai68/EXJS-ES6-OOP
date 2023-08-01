// toggle
$(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
  });
});
const getEle = (id) => document.getElementById(id);

const form = getEle('personForm');
getEle("role").addEventListener('change', (event) => {
  const selectedRole = event.target.value;

  const showOptions = (options) => options.forEach(option => showOption(option));
  const hideOptions = (options) => options.forEach(option => hiddenOption(option));

  switch (selectedRole) {
    case "Student":
      showOptions(["showToan", "showLy", "showHoa"]);
      hideOptions(["showWorkingDays", "showDailySalary", "showCompanyName", "showOrderValue", "showRating"]);
      break;
    case "Employee":
      showOptions(["showWorkingDays", "showDailySalary"]);
      hideOptions(["showToan", "showHoa", "showLy", "showCompanyName", "showOrderValue", "showRating"]);
      break;
    case "Customer":
      showOptions(["showCompanyName", "showOrderValue", "showRating"]);
      hideOptions(["showToan", "showHoa", "showLy", "showWorkingDays", "showDailySalary"]);
      break;
    default:
      hideOptions(["showToan", "showHoa", "showLy", "showWorkingDays", "showDailySalary", "showCompanyName", "showOrderValue", "showRating"]);
  }
});
const showOption = (id) => {
  return getEle(id).style.display = "block";
}
const hiddenOption = (id) => {
  return getEle(id).style.display = "none";
}

const showEditOption = (ids) => {
  ids.forEach(id => getEle(id).style.display = "block");
};

const hiddenEditOption = (ids) => {
  ids.forEach(id => getEle(id).style.display = "none");
};
const showSubject = () => showEditOption(["showToan", "showHoa", "showLy"]);
const showEmployee = () => showEditOption(["showWorkingDays", "showDailySalary"]);
const showCustomer = () => showEditOption(["showCompanyName", "showOrderValue", "showRating"]);
const hiddenSubject = () => hiddenEditOption(["showToan", "showHoa", "showLy"]);
const hiddenEmployee = () => hiddenEditOption(["showWorkingDays", "showDailySalary"]);
const hiddenCustomer = () => hiddenEditOption(["showCompanyName", "showOrderValue", "showRating"]);
