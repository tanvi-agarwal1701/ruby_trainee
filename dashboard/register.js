function element(name) {
  return document.getElementById(name);
}
function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}
let data = [];
let first_name = element("InputFirstName");
let last_name = element("InputLastName");
let email = element("InputEmail");
let phone_no = element("InputNumber");
let password = element("InputPassword");
let cpassword = element("InputConfirmPassword");
let submitBtn = element("submitBtn");
let logInBtn = element("logInBtn");
let form = element("form");
const input_firstName = document.querySelector("#InputFirstName");
const input_lastName = document.querySelector("#InputLastName");
const input_email = document.querySelector("#InputEmail");
const input_phoneNo = document.querySelector("#InputNumber");
const input_password = document.querySelector("#InputPassword");
const input_confirmPassword = document.querySelector("#InputConfirmPassword");
input_firstName.addEventListener("input", validateFirstName);
input_lastName.addEventListener("input", validateLastName);
input_email.addEventListener("input", validateEmail);
input_phoneNo.addEventListener("input", validatePhoneNo);
input_password.addEventListener("input", validatePassword);
input_confirmPassword.addEventListener("input", validateConfirmPassword);
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let first_nameValue = first_name.value;
  let last_nameValue = last_name.value;
  let emailValue = email.value;
  let phone_noValue = phone_no.value;
  let passwordValue = password.value;
  let uniqueId = uniqueID();
  let obj = {
    firstName: first_nameValue, lastName: last_nameValue, email: emailValue, phoneNo: phone_noValue, passwordValue: passwordValue, id: uniqueId
  };
  validateLastName();
  validateEmail();
  validatePhoneNo();
  validatePassword();
  validateConfirmPassword();
  if (validateFirstName() && validateLastName() && validateEmail() && validatePhoneNo() && validatePassword() && validateConfirmPassword()) {
    if (localStorage.getItem("AddUsers") === null) {
      data.push(obj);
      localStorage.setItem("ActiveUsers", JSON.stringify(obj));
      localStorage.setItem("AddUsers", JSON.stringify(data));
      window.location.assign("./dashboard.html");
    }
    else {
      let add_user = localStorage.getItem("AddUsers");
      let AddUsers = JSON.parse(add_user);

      const newData = AddUsers.find((value, index) => value.email === obj.email && value.passwordValue === obj.passwordValue);
      const email_name = AddUsers.find((value, index) => value.email === email.value);
      if (newData === undefined && email_name == undefined) {
        localStorage.setItem("ActiveUsers", JSON.stringify(obj));
        AddUsers.push(obj);
        localStorage.setItem("AddUsers", JSON.stringify(AddUsers));
        window.location.assign("./dashboard.html");
      }
      else {
        alert('you are already registered kindly login')
      }

    }
  }
});
logInBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.assign("./index.html");
})
function validateFirstName() {

  if (first_name.value == "") {

    seterror("error_InputFirstName", "First name is required");
    return false;
  }
  else {
    seterror("error_InputFirstName", "");
    return true;
  }
}
function validateLastName() {

  if (last_name.value == "") {

    seterror("error_InputLastName", "Last name is required");
    return false;
  }
  else {
    seterror("error_InputLastName", "");
    return true;
  }
}

function validatePhoneNo() {
  let phoneNo_regex = /^[0-9]{10}$/;
  if (phone_no.value != "" && phoneNo_regex.test(phone_no.value)) {
    seterror("error_InputNumber", "");
    return true;
  }
  else if (phone_no.value == "") {
    seterror("error_InputNumber", "Phone No is required");
  }
  else if (phone_no.value != "" && !phoneNo_regex.test(phone_no.value)) {
    seterror("error_InputNumber", "Phone No is invalid");
  }
  return false;

}
function validateEmail() {
  let email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value != "" && email_regex.test(email.value)) {
    seterror("error_InputEmail", "");
    return true;
  }
  else if (email.value == "") {
    seterror("error_InputEmail", "email is required");

  }
  else if (email.value != "" && !email_regex.test(email.value)) {
    seterror("error_InputEmail", "email is invalid");

  }
  return false;
}
function validatePassword() {
  let password_regex = /^.{6,}$/;
  if (password.value != "" && password_regex.test(password.value)) {
    seterror("error_InputPassword", "");
    return true;
  }
  else if (password.value == "") {
    seterror("error_InputPassword", "Password is required");
  }
  else if (password.value != "" && !password_regex.test(password.value)) {
    seterror("error_InputPassword", " Not a strong password");
  }

  return false;
}
function validateConfirmPassword() {
  if (cpassword.value == "") {

    seterror("error_InputConfirmPassword", " Confirm Password is required");

    return false;
  }
  else if (cpassword.value != password.value) {
    seterror("error_InputConfirmPassword", " Confirm Password should be same as password");
    return false;
  }
  else {
    seterror("error_InputConfirmPassword", "");
    return true;
  }
}
function seterror(id, error) {
  element = document.getElementById(id);
  element.innerHTML = error;
}
