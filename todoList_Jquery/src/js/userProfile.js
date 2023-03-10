$(document).ready(function () {
    let user_data = localStorageGetItem(user_key);
    function setInformation(id, information) {
        let setData = $(id).text(information);
        return setData;
    }
    setInformation("#span_userName", user_data.username);
    setInformation("#span_name", user_data.name);
    setInformation("#span_phoneNo", user_data.phoneNo);
    setInformation("#span_password", user_data.password);
    $("#Back_btn").click(function (e) {
        e.preventDefault();
        window.location.assign("./dashboard.html")
    })
})