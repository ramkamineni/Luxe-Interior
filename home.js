let logout = document.getElementById("logout")
let signin = document.getElementById("signin")

logout.addEventListener("click",()=>{
    location.replace("./index.html")
})

signin.addEventListener("click",()=>{
    location.replace("./index.html")
})

document.addEventListener("DOMContentLoaded", () => 
    {
    const themeBtn = document.getElementById("theme-btn");
    const root = document.documentElement;
    let darkMode = false;

    themeBtn.addEventListener("click", () => {
        darkMode = !darkMode;

        if (darkMode) {
            root.style.setProperty("--bg-color", "black");
            root.style.setProperty("--text-color", "white");
            root.style.setProperty("--nav-bg", "black");
            root.style.setProperty("--nav-text", "white");
            themeBtn.textContent = "Light Mode";
        } else {
            root.style.setProperty("--bg-color", "white");
            root.style.setProperty("--text-color", "black");
            root.style.setProperty("--nav-bg", "white");
            root.style.setProperty("--nav-text", "black");
            themeBtn.textContent = "Dark Mode";
        }
    });
    });