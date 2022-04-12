function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const fermer = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
};

// fermer la modal
fermer.addEventListener('click', function launchModal() {
    modalbg.style.display = "none";
});

let penom = document.getElementById("first");
let nom = document.getElementById("last");
let email = document.getElementById("email");
let birth = document.getElementById("birthdate");
let nbrPart = document.getElementById("quantity");