let active_user = localStorage.getItem("ActiveUsers");
let activeUser = JSON.parse(active_user);
function setInformation(id, information) {
  element = document.getElementById(id);
  element.innerHTML = information;
}
setInformation("span_email", activeUser.email);
setInformation("span_firstName", activeUser.firstName);
setInformation("span_lastName", activeUser.lastName);
setInformation("span_phoneNo", activeUser.phoneNo);
function GetElement(name) {
  return document.getElementById(name);
}
let editBtn = GetElement("editBtn");
editBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.assign("./editdetails.html");
})
let logOut_btn = GetElement("logOut_btn");
logOut_btn.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.removeItem("ActiveUsers");
  window.location.assign("./index.html");
})