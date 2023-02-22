function seterror(id, error) {
  element = document.getElementById(id);
  element.innerHTML = error;
}

function GetElement(name) {
  return document.getElementById(name);
}
let email = GetElement("InputEmail");
let password = GetElement("InputPassword");
let signIn = GetElement("signIn_btn");
let submit = GetElement("submit_btn");
let form = GetElement("form");
const input_email = document.querySelector("#InputEmail");
const input_password = document.querySelector("#InputPassword");
input_email.addEventListener("input", validateEmail);
input_password.addEventListener("input", validatePassword);
let add_user = localStorage.getItem("AddUsers");
let AddUsers = JSON.parse(add_user);
let active_user = localStorage.getItem("ActiveUsers");
let ActiveUsers = JSON.parse(active_user);
if (ActiveUsers != null) {

  window.location.assign("./dashboard.html");
}
submit.addEventListener("click", function (event) {
  event.preventDefault();
  validatePassword();
  if (validateEmail() &&
    validatePassword()) {
    if (localStorage.getItem("AddUsers") === null) {
      alert("no one is registered yet");
      form.reset();
    }
    else {
      const email_name = AddUsers.find((value, index) => value.email === email.value);
      const newData = AddUsers.find((value, index) => value.email === email.value && value.passwordValue === password.value);
      if (newData == undefined && email_name != undefined) {
        alert('login credential is not correct');

      }
      else if (email_name == undefined) {
        alert('You are not registered yet');
      }
      else {
        localStorage.setItem("ActiveUsers", JSON.stringify(newData));
        window.location.assign("./dashboard.html");
      }

    }
  }

})
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
signIn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.assign("./register.html");
})
