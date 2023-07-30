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
  console.log(selectedRole);
  if (selectedRole === "Student") {
    showOption("showToan");
    showOption("showLy");
    showOption("showHoa");
    hiddenOption("showWorkingDays");
    hiddenOption("showDailySalary");
    hiddenOption("showCompanyName");
    hiddenOption("showOrderValue");
    hiddenOption("showRating");
  }else  if (selectedRole === "Employee") {
    showOption("showWorkingDays");
    showOption("showDailySalary");
    hiddenOption("showToan");
    hiddenOption("showHoa");
    hiddenOption("showLy");
    hiddenOption("showCompanyName");
    hiddenOption("showOrderValue");
    hiddenOption("showRating");
  }else if (selectedRole === "Customer") {
    showOption("showCompanyName");
    showOption("showOrderValue");
    showOption("showRating");
    hiddenOption("showToan");
    hiddenOption("showHoa");
    hiddenOption("showLy");
    hiddenOption("showWorkingDays");
    hiddenOption("showDailySalary");
  }
});
const showOption = (id) => {
  return getEle(id).style.display = "block";
}
const hiddenOption = (id) => {
  return getEle(id).style.display = "none";
}