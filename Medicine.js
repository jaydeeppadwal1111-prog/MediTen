function showRegister() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
}

function showLogin() {
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

function register() {
  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;

  if (username === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Registration Successful!");
  showLogin();
}

function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    alert("Login Successful! Welcome to Medicine Delivery 🚀");
  } else {
    alert("Invalid Credentials");
  }
}
