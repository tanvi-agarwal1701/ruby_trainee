let active_user = localStorage.getItem("ActiveUsers");
let activeUser = JSON.parse(active_user);
document.getElementById("InputFirstName").value = activeUser.firstName;
document.getElementById("InputLastName").value = activeUser.lastName;
document.getElementById("InputPhoneNo").value = activeUser.phoneNo;
let saveChangesBtn = document.getElementById("saveChangesBtn");
let LogOutBtn = document.getElementById("logOut_btn");
const input_FirstName = document.querySelector("#InputFirstName");
const input_LastName = document.querySelector("#InputLastName");
const input_PhoneNo = document.querySelector("#InputPhoneNo");
input_FirstName.addEventListener("input", validateFirstName);
input_LastName.addEventListener("input", validateLastName);
input_PhoneNo.addEventListener("input", validatePhoneNo);
saveChangesBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateFirstName() && validateLastName() && validatePhoneNo()) {
    let InputFirstName = document.getElementById("InputFirstName").value;
    let InputLastName = document.getElementById("InputLastName").value;
    let InputPhoneNo = document.getElementById("InputPhoneNo").value;
    activeUser.firstName = InputFirstName;
    activeUser.lastName = InputLastName;
    activeUser.phoneNo = InputPhoneNo;
    localStorage.setItem("ActiveUsers", JSON.stringify(activeUser));
    let add_user = localStorage.getItem("AddUsers");
    let addUsers = JSON.parse(add_user);
    const upd_obj = addUsers.map(obj => {
      if (obj.email == activeUser.email && obj.passwordValue === activeUser.passwordValue) {
        obj.firstName = InputFirstName;
        obj.lastName = InputLastName;
        obj.phoneNo = InputPhoneNo;
      }
      return obj;
    })
    localStorage.setItem("AddUsers", JSON.stringify(upd_obj));
    window.location.assign("./dashboard.html");
  }
})
function validateFirstName() {

  let InputFirstName = document.getElementById("InputFirstName").value;

  if (InputFirstName == "") {

    seterror("error_InputFirstName", "First name is required");
    return false;
  }
  else {
    seterror("error_InputFirstName", "");
    return true;
  }
}
function validateLastName() {

  let InputLastName = document.getElementById("InputLastName").value;
  if (InputLastName == "") {

    seterror("error_InputLastName", "Last name is required");
    return false;
  }
  else {
    seterror("error_InputLastName", "");
    return true;
  }
}
function validatePhoneNo() {
  let InputPhoneNo = document.getElementById("InputPhoneNo").value;
  let phoneNo_regex = /^[0-9]{10}$/;
  if (InputPhoneNo != "" && phoneNo_regex.test(InputPhoneNo)) {
    seterror("error_InputPhoneNo", "");
    return true;
  }
  else if (InputPhoneNo == "") {
    seterror("error_InputPhoneNo", "Phone No is required");
  }
  else if (InputPhoneNo != "" && !phoneNo_regex.test(InputPhoneNo)) {
    seterror("error_InputPhoneNo", "Phone No is invalid");
  }
  return false;
}

function seterror(id, error) {
  console.log(id);
  console.log(error);
  element = document.getElementById(id);
  element.innerHTML = error;

}
LogOutBtn.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.removeItem("ActiveUsers");
  window.location.assign("./index.html");
})