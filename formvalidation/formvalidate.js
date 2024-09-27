const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#city");
const inputQuery = document.querySelector("#query");
const inputPhoneNo = document.querySelector("#phone_no");
inputName.addEventListener("input", checkName);
inputPhoneNo.addEventListener("input", checkPhone_no);
inputEmail.addEventListener("input", checkEmail);
inputPassword.addEventListener("input", checkCity);
inputQuery.addEventListener("input", checkQuery);

let contact_form = document.getElementById("formvalidate");
contact_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let names = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let query = document.getElementById("query").value;
    let phoneNo = document.getElementById("phone_no").value;
    let names_regex = /^[A-Z a-z]{3,}$/;
    let email_regex = /^[A-Za-z0-9_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    let city_regex = /^[A-Z a-z]{3,}$/;
    let query_regex = /[A-Z a-z0-9!@&#$%<>.,]{3,}/;
    let phoneno_regex = /^[0-9]{10}$/;

    if (names == "") {
        seterror("error_name", "Name is required");
    }
    if (email == "") {
        seterror("error_email", "Email is required");
    }
    if (city == "") {
        seterror("error_city", "City is required");
    }
    if (query == "") {
        seterror("error_query", "Query is required");
    }
    if (phoneNo == "") {
        seterror("error_phone_no", "Phone no is required");
    }
    if (names != "" &&
        email != "" &&
        phoneNo != "" &&
        query != "" &&
        city != "" &&
        names_regex.test(names) &&
        email_regex.test(email) &&
        phoneno_regex.test(phoneNo) &&
        query_regex.test(query) &&
        city_regex.test(city)
    ) {
        let form_mod = document.getElementById("infoModal");
        form_mod.style.display = "block";
        document.getElementById("modal_name").innerHTML = names;
        document.getElementById("modal_email").innerHTML = email;
        document.getElementById("modal_city").innerHTML = city;
        document.getElementById("modal_query").innerHTML = query;
        document.getElementById("modal_phone_no").innerHTML = phoneNo;
    }
    let close = document.querySelector("#close");
    close.addEventListener("click", funmodal);
    let cross = document.querySelector("#cross");
    cross.addEventListener("click", funmodal);
});
function funmodal() {
    let form_modal = document.querySelector("#infoModal");
    form_modal.style.display = "none";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    document.getElementById("query").value = "";
    document.getElementById("phone_no").value = "";
}

function checkName() {
    let names = document.getElementById("name").value;
    let names_regex = /^[A-Z a-z]{3,}$/;
    if (names == "") {
        seterror("error_name", "Name Is required");
    } else if (names_regex.test(names)) {
        seterror("error_name", "");
    } else {
        seterror("error_name", "Name limit is min 3");
    }
}
function checkEmail() {
    let email = document.getElementById("email").value;
    let email_regex = /^[A-Za-z0-9_.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    if (email == "") {
        seterror("error_email", "Email is required");
    } else if (email_regex.test(email)) {
        seterror("error_email", "");
    } else {
        seterror("error_email", " Email is invalid");
    }
}
function checkCity() {
    let city = document.getElementById("city").value;
    let city_regex = /^[A-Z a-z]{3,}$/;
    if (city == "") {
        seterror("error_city", "City is required");
    } else if (city_regex.test(city)) {
        seterror("error_city", "");
    } else {
        seterror("error_city", "City limit is min 3");
    }
}
function checkQuery() {
    let query = document.getElementById("query").value;
    let query_regex = /[A-Z a-z0-9!@&#$%<>.,]{3,}/;
    if (query == "") {
        seterror("error_query", "Query is required");
    } else if (query_regex.test(query)) {
        seterror("error_query", "");
    } else {
        seterror("error_query", "Query min limit is 3");
    }
}
function checkPhone_no() {
    let phoneNo = document.getElementById("phone_no").value;
    let phoneNo_regex = /^[0-9]{10}$/;
    if (phoneNo == "") {
        seterror("error_phone_no", "Phone number is required");
    } else if (phoneNo_regex.test(phoneNo)) {
        seterror("error_phone_no", "");
    } else {
        seterror("error_phone_no", "Must contain 10 digits");
    }
}
function seterror(id, error) {
    element = document.getElementById(id);
    element.innerHTML = error;
}