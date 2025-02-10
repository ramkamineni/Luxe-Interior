let login = document.getElementById("login");
let signup = document.getElementById("signup");
let username_l = document.getElementById("username_l");
let password_l = document.getElementById("password_l");
let e_user_l = document.getElementById("e_user_l");
let dhac = document.getElementById("dhac");
let ahc = document.getElementById("ahc");

dhac.addEventListener("click", () => {
  signup.style.display = "inline-block";
  login.style.display = "none";
});

ahc.addEventListener("click", () => {
  login.style.display = "inline-block";
  signup.style.display = "none";
});
