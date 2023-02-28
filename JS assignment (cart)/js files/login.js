let username='kminchelle';
let password='lelplR';
document.getElementById("username").value = username;
document.getElementById("password").value = password;
let submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      username:username ,
      password: password,

    })
  })
    .then(res => res.json())
    .then((data) => {
      localStorage.setItem("user",JSON.stringify(data));

      window.location.assign("./product.html")


    }
    );


})