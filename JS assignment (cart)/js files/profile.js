let user=localStorage.getItem("user");
let User=JSON.parse(user);
console.log(User);
function setInformation(id, information) {
    element = document.getElementById(id);
    element.innerHTML = information;
}
setInformation("span_email", User.email);
setInformation("span_firstName", User.firstName);
setInformation("span_lastName", User.lastName);
setInformation("span_pid", User.id);
setInformation("span_pname", User.username);
let back=document.getElementById('Back_btn');
back.addEventListener('click',myfun)
function myfun(e)
{
    e.preventDefault();
    window.location.assign('./product.html');
}