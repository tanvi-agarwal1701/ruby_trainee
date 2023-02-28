let user = localStorageGetItem("user");
function setInformation(id, information) {
    element = document.getElementById(id);
    element.innerHTML = information;
}
setInformation("span_email", user.email);
setInformation("span_firstName", user.firstName);
setInformation("span_lastName", user.lastName);
setInformation("span_pid", user.id);
setInformation("span_pname", user.username);
let back = document.getElementById('Back_btn');
back.addEventListener('click', backToProductsListing)
function backToProductsListing(e) {
    e.preventDefault();
    window.location.assign('./productListing.html');
}