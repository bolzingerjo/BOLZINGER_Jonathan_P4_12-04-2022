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
const checkBox1 = document.getElementById("checkbox1");
const form = document.querySelector("form");
const modal = document.querySelector('.modal-body')

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
        return true
    } else {
        small.innerHTML = 'Adresse non valide'
        small.style.color = "red"
        return false
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
        return true
    } else {
        smallPrenom.innerHTML = 'le prénom doit contenir au moins 2 lettres'
        smallPrenom.style.color = "red"
        return false
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
        return true
    } else {
        smallnom.innerHTML = 'Le nom doit contenir au moins 2 lettres'
        smallnom.style.color = "red"
        return false
    }
};

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

    console.log("2", inputbirth.valueAsNumber);
    if (inputbirth.valueAsNumber >= date100 && inputbirth.valueAsNumber <= date16) {
        smallbirth.innerHTML = 'Age valide'
        smallbirth.style.color = "green"
        return true
    } else {
        smallbirth.innerHTML = 'Age entre 16 et 100 ans'
        smallbirth.style.color = "red"
        return false
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
        return true
    } else {
        smallPart.innerHTML = 'Le Nbr participations doit être entre 0 et 99'
        smallPart.style.color = "red"
        return false
    }
};

//valider la localisation
for (let check of local) {
    console.log(check);
};
let smallCheck = document.querySelector("#check-small");
for (let i = 0; i < local.length; i++) {
    local[i].addEventListener('change', function() {
        if (local[i].checked == true) {
            smallCheck.innerHTML = 'Localisation' + local[i].value
            smallCheck.style.color = "green"
            return true
        } else {
            smallCheck.innerHTML = 'Vous devez choisir un lieu'
            smallCheck.style.color = "red"
            return false
        }
    })
};

//Valider le nbr de participations
checkBox1.addEventListener('change', function() {
    validCheck(this);
});
const validCheck = function(checkBox) {
    let smallPart = document.querySelector("#checkbox-small");
    console.log(checkBox);
    console.log(checkBox.checked);
    if (checkBox.checked == true) {
        smallPart.innerHTML = 'Case checked '
        smallPart.style.color = "green"
        return true
    } else {
        smallPart.innerHTML = 'Vous devez cocher la case des CGU'
        smallPart.style.color = "red"
        return false
    }
};

//vider la modal
btnSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    let errors = 0;
    if (!validEmail(email)) {
        errors++;
    } else if (!validPrenom(prenom)) {
        errors++;
    } else if (!validNom(nom)) {
        errors++;
    } else if (!validBirth(birth)) {
        errors++;
    } else if (!validPart(nbrPart)) {
        errors++;
    } else if (!validCheck(checkBox1)) {
        errors++;
    }
    if (errors == 0) {
        form.innerHTML = "";
        let p = document.createElement('p');
        p.classList.add('modal-body')
        p.innerHTML = "Merci pour votre inscription";
        let link = document.createElement('a');
        link.classList.add('btn-submit');
        link.text = "Fermer";
        link.addEventListener('click', function() {
            modalbg.style.display = "none";
        })
        modal.append(p);
        modal.append(link);
    }
});