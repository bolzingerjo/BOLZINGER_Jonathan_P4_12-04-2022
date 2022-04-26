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
const btnSubmit = document.querySelector(".btn-submit");
const local = document.getElementsByName("location");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
};

// fermer la modal
fermer.addEventListener('click', function() {
    modalbg.style.display = "none";
});

//Regex email
email.addEventListener('change', function() {
    validEmail(this);
});
// création regex pour validation email
const validEmail = function(inputEmail) {
    let emailRegex = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

    let testEmail = emailRegex.test(inputEmail.value);

    console.log(testEmail);
    console.log(inputEmail.value);

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
    console.log(inputPrenom);
    console.log(inputPrenom.value.length);
    if (inputPrenom.value.length >= 2) {
        smallPrenom.innerHTML = 'Prénom valide'
        smallPrenom.style.color = "green"
    } else {
        smallPrenom.innerHTML = 'le prénom doit contenir au moins 2 lettres'
        smallPrenom.style.color = "red"
    }
};

//Valider le nom
nom.addEventListener('change', function() {
    validNom(this);
});
const validNom = function(inputnom) {
    let smallnom = document.querySelector("#nom-small");
    console.log(inputnom);
    console.log(inputnom.value.length);
    if (inputnom.value.length >= 2) {
        smallnom.innerHTML = 'Nom valide'
        smallnom.style.color = "green"
    } else {
        smallnom.innerHTML = 'Le nom doit contenir au moins 2 lettres'
        smallnom.style.color = "red"
    }
};

//Valider la date de naissance
// birth.addEventListener('change', function() {
//     validBirth(this);
// });
// const validBirth = function(inputbirth) {
//     let smallbirth = document.querySelector("#birth-small");
//     console.log(inputbirth);
//     console.log(inputbirth.value);
//     if (inputbirth.value >= 1922) {
//         smallbirth.innerHTML = 'Age valide'
//         smallbirth.style.color = "green"
//     } else {
//         smallbirth.innerHTML = 'Age entre 16 et 100 ans'
//         smallbirth.style.color = "red"
//     }
// };
// Valider la date de naissance
birth.addEventListener('change', function() {
    validBirth(this);
});

const validBirth = function(inputbirth) {
    let smallbirth = document.querySelector("#birth-small");
    const now = new Date();
    console.log("now", now.getTime());
    let date100 = now.getTime() - 3155760000000;
    let date16 = now.getTime() - 504921600000;
    // let date1 = new Date('1922-04-24');
    // let date2 = new Date('2006-04-24');

    console.log("2", inputbirth.valueAsNumber);
    if (inputbirth.valueAsNumber >= date100 && inputbirth.valueAsNumber <= date16) {
        smallbirth.innerHTML = 'Age valide'
        smallbirth.style.color = "green"
    } else {
        smallbirth.innerHTML = 'Age entre 16 et 100 ans'
        smallbirth.style.color = "red"
    }
};

//Valider le nbr de participations
nbrPart.addEventListener('change', function() {
    validPart(this);
});
const validPart = function(inputPart) {
    let smallPart = document.querySelector("#part-small");
    console.log(inputPart);
    console.log(inputPart.value.length);
    if (inputPart.value >= 0 && inputPart.value <= 99) {
        smallPart.innerHTML = 'Nbr participations valide'
        smallPart.style.color = "green"
    } else {
        smallPart.innerHTML = 'Le Nbr participations doit être entre 0 et 99'
        smallPart.style.color = "red"
    }
};

//valider la localisation
const local1 = document.getElementById('#location1');
const local2 = document.getElementById('#location2');
const local3 = document.getElementById('#location3');
const local4 = document.getElementById('#location4');
const local5 = document.getElementById('#location5');
const local6 = document.getElementById('#location6');
// local.addEventListener('change', function() {
//     validLocation(this);
// });
// const validLocation = function(inputCheck) {
//     let smallCheck = document.querySelector("#check-small");
//     console.log(inputCheck);
//     console.log(inputCheck.checked);
//     if (local1.checked) {
//         smallCheck.innerHTML = 'Localisation valide'
//         smallCheck.style.color = "green"
//     } else if (local2.checked) {
//         smallCheck.innerHTML = 'Localisation valide'
//         smallCheck.style.color = "green"
//     } else {
//         smallCheck.innerHTML = 'Vous devez choisir un lieu'
//         smallCheck.style.color = "red"
//     }
// };
for (let check of local) {
    console.log(check);
};
let smallCheck = document.querySelector("#check-small");
for (let i = 0; i < local.length; i++) {
    local[i].addEventListener('change', function() {
        if (local[i].checked == true) {
            smallCheck.innerHTML = 'Localisation' + local[i].value
            smallCheck.style.color = "green"
        } else {
            smallCheck.innerHTML = 'Vous devez choisir un lieu'
            smallCheck.style.color = "red"
        }
    })
};
//vider la modal
btnSubmit.addEventListener('click', function(event) {
    event.preventDefault();
});