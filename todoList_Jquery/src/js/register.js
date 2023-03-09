$(document).ready(function () {
    $("#register_form").validate({
        rules: {
            username: {
                required: true,
                minlength: 3
            },
            name: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 8
            },
            phoneNo: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
        },
        messages: {
            username: {
                required: "Username is mandatory",
                minlength: "minimum length should be 3 "
            },
            name: {
                required: "Name is mandatory",
                minlength: "minimum length should be 3"
            },
            password: {
                required: "Password is mandatory",
                minlength: "minimim length should be 8"
            },
            phoneNo: {
                required: "Phone no is mandatory",
                minlength: "mimimum length should be 10",
                maxlength: "maximum length should be 10"
            },

        }


    })
    $(document).on("submit", "#register_form", function (e) {
        e.preventDefault();
        if ($("#register_form").valid()) {

            let register_user = { username: getValueOfElement("#username"), name: getValueOfElement("#InputName"), password: getValueOfElement("#InputPassword"), phoneNo: getValueOfElement("#InputNumber") };
            localStorageSetItem(user_key, register_user);
            window.location.assign("./dashboard.html")
        }
    })
    $("#logInBtn").click(function (e) {
        e.preventDefault();
        window.location.assign("../../index.html");
    })

})
