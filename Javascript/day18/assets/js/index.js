function register() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    window.location.href = "login.html";
}


function login() {

    let _email = document.getElementById("loginEmail").value;
    let _password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user && _email === user.email && _password === user.password) {

        alert("Login Successful");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");
    }
}