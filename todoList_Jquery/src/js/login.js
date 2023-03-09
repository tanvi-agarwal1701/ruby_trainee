$(document).ready(function () {
    $("#login_form").validate({
        rules: {
            username: {
                required: true,
                minlength: 3
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            username: {
                required: "Username is mandatory",
                minlength: "minimum length should be 3 "
            },
            password: {
                required: "Password is mandatory",
                minlength: "minimim length should be 8"
            },
        }
    })
    $(document).on("submit", "#login_form", function (e) {
        e.preventDefault();
        if ($("#login_form").valid()) {
            let current_user = localStorageGetItem(user_key);
            if (!current_user) {
                alert("please register yourself")
            }
            else {
                if (current_user.username == getValueOfElement("#InputUsername")) {
                    if (current_user.password == getValueOfElement("#InputPassword")) {
                        window.location.assign("./src/html/dashboard.html");
                    }
                    else {
                        alert('creditionls not matched');
                    }
                }
                else {
                    alert("user dosen't exist,Kindly register");
                }
            }

        }
    })
    $("#register_btn").click(function (e) {
        e.preventDefault();
        window.location.assign("./src/html/register.html")
    })
})