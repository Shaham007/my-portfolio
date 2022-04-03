// LOADER 

const pageLoader = document.querySelector(".page-loader");

window.addEventListener("load", () => {

    pageLoader.classList.add("fade-out");

    setTimeout(() => {
        pageLoader.style.display = "none";

    }, 600);
});


//NAVBAR

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


// DOWNLOAD CV BUTTON 

const cvButton = document.querySelector("#cv-button");
const clickedTxtContainer = document.querySelector(".clicked-text-container");


cvButton.addEventListener("click", () => {
    clickedTxtContainer.style.visibility = "visible";

    setTimeout(() => {
        clickedTxtContainer.style.visibility = "hidden";

    } , 1000);
});

// audio effect on buttons

const audio = new Audio();

audio.src = "./Mouse-Click.mp3";

// contact from submittion

const emailInput = document.getElementById("emailInput");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const txtArea = document.getElementById("txtArea");

function sendEmail(){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "Filmfunmania@gmail.com",
        Password: "239D45B93B663C4EF090C0DE8AA2A7DB19D0",
        To: 'Creepygamers97@gmail.com',
        From: emailInput.value,
        Subject: "Contact Form",
        Body: `First Name: ${fName}.value <br>
        Last Name: ${lName}.value <br> 
        Email: ${emailInput}.value <br>
        Message: ${txtArea}
        `
    }).then( message => alert("Message has been Sent to Portfolio's owner Successfully"));
}

// Scroll Reveal Animation

ScrollReveal({ 
    distance:"50px",
    duration: 2000,
    delay:300
 });

ScrollReveal().reveal('.home-img',  { delay: 400, origin:"right" });
ScrollReveal().reveal('.home-text', { delay: 400, origin: "left" });
ScrollReveal().reveal('.buttons-cintainer', { delay: 800, origin: "bottom" });
ScrollReveal().reveal('.about-text', { delay: 400, origin: "right" });
ScrollReveal().reveal('.about-img', { delay: 400, origin: "left" });
ScrollReveal().reveal('.skills-item', { delay: 400, interval: 100 });
ScrollReveal().reveal('.portfolio-img-box', { delay: 400, interval: 100 });
ScrollReveal().reveal('.input-group', { delay: 400, interval: 100 });
ScrollReveal().reveal('.button', { delay: 400, interval: 100 });