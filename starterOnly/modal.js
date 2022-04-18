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
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const nbrPart = document.getElementById("quantity");
const btnSubmit = document.querySelector("btn-submit");

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

//Regex email
email.addEventListener('change', function() {
    validEmail(this);
});
// création regex pour validation email
const validEmail = function(inputEmail) {
    let emailRegex = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

    let testEmail = emailRegex.test(inputEmail.value);

    console.log(testEmail);

    let small = document.querySelector("#email-small");

    if (emailRegex.test(inputEmail.value)) {
        small.innerHTML = 'Adresse valide'
        small.style.color = "green"
    } else {
        small.innerHTML = 'Adresse non valide'
        small.style.color = "red"
    };
};

//Valider le prénom
prenom.addEventListener('change', function() {
    validPrenom(this);
});
const validPrenom = function(inputPrenom) {
    let smallPrenom = document.querySelector("#prenom-small");
    if (inputPrenom.value.lenght < 1) {
        smallPrenom.innerHTML = 'Prénom valide'
        smallPrenom.style.color = "green"
    } else {
        smallPrenom.innerHTML = 'le prénom doit contenir au moins 2 lettres'
        smallPrenom.style.color = "red"
    }
};
//vider la modal
btnSubmit.addEventListener('click', function() {
    modalbg.style.display = "block";
    formData.style.display = "none";
    btnSubmit.value = "Fermer";
});