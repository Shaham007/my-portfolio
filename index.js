// LOADER FUNCTIONALITY

window.addEventListener("load", () => {

    document.querySelector(".page-loader").classList.add("fade-out");

    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";

    }, 600);
});



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-links").forEach(
    n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
