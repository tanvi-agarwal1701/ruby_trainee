const username = "kminchelle";
const password = "0lelplR";
document.getElementById("username").value = username;
document.getElementById("password").value = password;
let login = document.getElementById("login");
login.addEventListener("click", function (event) {
  event.preventDefault();
  let value = apiCalling("POST", "auth/login", {
    username: username,
    password: password, 
  });
  const loginUser = async () => {
    const a = await value;

    localStorageSetItem("user", a);
    window.location.assign("./src/html/productListing.html");
  };

  loginUser();
});


