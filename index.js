import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";
let login = document.getElementById("login");
let signup = document.getElementById("signup");
let dhac = document.getElementById("dhac");
let ahc = document.getElementById("ahc");
let btn_guest = document.getElementById("btn_guest");
dhac.addEventListener("click", () => {
  login.style.display = "none";
  signup.style.display = "inline-block";
});

ahc.addEventListener("click", () => {
  signup.style.display = "none";
  login.style.display = "inline-block";
});

signup.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((x) => {
      if (x.user) {
        alert("user registered succesfully");
        signup.style.display = "none";
        login.style.display = "inline-block";
      }
    })
    .catch((e) => {
      console.log(e), alert("unable to register");
    });
});

login.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;
  signInWithEmailAndPassword(auth, email, password)
    .then((x) => {
      if (x.user.accessToken) {
        alert("login succesfull");
        location.replace("./home.html");
      }
    })
    .catch((e) => {
      console.log(e);
      alert("Invalid Credentails");
    });
});

btn_guest.addEventListener("click", () => {
  location.replace("./home.html");
});
