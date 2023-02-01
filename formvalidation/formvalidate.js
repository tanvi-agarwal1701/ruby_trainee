function seterror(id, error) {
    element = document.getElementById(id);
    element.innerHTML = error;
}
let loginForm = document.getElementById("formd");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let names = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let query = document.getElementById("query").value;
    let phoneno = document.getElementById("phoneno").value
    let namesc = /^[A-Z a-z]{3,}$/;
    let emailc = /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let cityc = /^[A-Z a-z]{3,}$/;
    let queryc = /^[A-Z a-z]{3,}$/;
    let phonenoc = /^[0-9]{10}$/;
    funvalidate();
    function funvalidate() {
        if (names == "") {
            seterror('sname', "Name is required");
        }
        if (email == "") {
            seterror('semail', "Email is required");
        }
        if (city == "") {
            seterror('scity', "City is required");
        }
        if (query == "") {
            seterror('squery', "Query is required");
        }
        if (phoneno == "") {
            seterror('sphoneno', "Phone no is required");
        }
        if (names != "" && email != "" && phoneno != "" && query != "" && city != "" && namesc.test(names) && emailc.test(email) && phonenoc.test(phoneno) && queryc.test(query) && cityc.test(city)) {
            let form_mod = document.getElementById('modale');
            form_mod.style.display = "block";
            document.getElementById('mname').innerHTML = names;
            document.getElementById('memail').innerHTML = email;
            document.getElementById('mcity').innerHTML = city;
            document.getElementById('mquery').innerHTML = query;
            document.getElementById('mphoneno').innerHTML = phoneno;
        }
    }
    let close = document.querySelector('#save');
    close.addEventListener("click", funmodal);
    let save = document.querySelector('#closes');
    save.addEventListener("click", funmodal);
    function funmodal() {
        let form_moda = document.querySelector('#modale');
        form_moda.style.display = "none";
        console.log(names);
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('city').value = "";
        document.getElementById('query').value = "";
        document.getElementById('phoneno').value = "";
    }
});
const inputna = document.querySelector('#name');
inputna.addEventListener('input', funname);
let names = document.getElementById('name').value;
const inputem = document.querySelector('#email');
inputem.addEventListener('input', funemail);
const inputpass = document.querySelector('#city');
inputpass.addEventListener('input', funcity);
const inputqu = document.querySelector('#query');
inputqu.addEventListener('input', funquery);
const inputpn = document.querySelector('#phoneno');
inputpn.addEventListener('input', funphoneno);
function funname() {
    let names = document.getElementById('name').value;
    let namesc = /^[A-Z a-z]{3,20}$/;
    if (names == "") {
        seterror('sname', "Name Is required");
    }
    else if (namesc.test(names)) {
        seterror('sname', "");
    }
    else if (!namesc.test(names)) {
        seterror('sname', "Name limit is min 3");
    }
}
function funemail() {
    let email = document.getElementById("email").value;
    let emailc = /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    if (email == "") {
        seterror('semail', "Email is required");

    }
    else if (emailc.test(email)) {
        seterror('semail', "");
    }
    else {
        seterror('semail', " Email needs @ and .");

    }
}
function funcity() {
    let city = document.getElementById("city").value;
    let cityc = /^[A-Z a-z]{3,20}$/;
    if (city == "") {
        seterror('scity', "City is required");

    }
    else if (cityc.test(city)) {
        seterror('scity', "");
    }

    else {
        seterror('scity', "City limit is min 3");


    }
}
function funquery() {
    let query = document.getElementById("query").value;
    let queryc = /^[A-Z a-z]{3,20}$/;
    if (query == "") {
        seterror('squery', "Query is required");

    }
    else if (queryc.test(query)) {
        seterror('squery', "");
    }
    else {
        seterror('squery', "Query min limit is 3");

    }
}
function funphoneno() {
    let phoneno = document.getElementById("phoneno").value;
    let phonenoc = /^[0-9]{10}$/;
    if (phoneno == "") {
        seterror('sphoneno', "Phone number is required");
    }
    else if (phonenoc.test(phoneno)) {

        seterror('sphoneno', "");
    }
    else {

        seterror('sphoneno', "must contain 10 digits");

    }
}
