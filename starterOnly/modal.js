function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const hide = document.querySelector(".close");
const forName = document.getElementById("first");
const birthName = document.getElementById("last");
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
    modalBg.style.display = "block";
};

// fermer la modal
hide.addEventListener('click', function() {
    modalBg.style.display = "none";
});

//Regex email
email.addEventListener('change', function() {
    validEmail(this);
});
// création regex pour validation email
const validEmail = function(inputEmail) {
    let emailRegex = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    let testEmail = emailRegex.test(inputEmail.value);
    let small = document.querySelector("#email-small");
    // console.log(testEmail);
    // console.log(inputEmail.value);
    if (emailRegex.test(inputEmail.value)) {
        // small.innerHTML = 'Adresse valide'
        // small.style.color = "green"
        return true
    } else {
        small.innerHTML = 'Adresse non valide'
        small.style.color = "red"
        return false
    };
};

//Valider le prénom
forName.addEventListener('change', function() {
    validForName(this);
});
const validForName = function(inputForName) {
    let smallForName = document.querySelector("#prenom-small");
    // console.log(inputForName);
    // console.log(inputForName.value.length);
    if (inputForName.value.length >= 2) {
        // smallForName.innerHTML = 'Prénom valide'
        // smallForName.style.color = "green"
        return true
    } else {
        smallForName.innerHTML = 'le prénom doit contenir au moins 2 lettres'
        smallForName.style.color = "red"
        return false
    }
};

//Valider le nom
birthName.addEventListener('change', function() {
    validBirthName(this);
});
const validBirthName = function(inputBirthName) {
    let smallBirthName = document.querySelector("#nom-small");
    // console.log(inputBirthName);
    // console.log(inputBirthName.value.length);
    if (inputBirthName.value.length >= 2) {
        // smallBirthName.innerHTML = 'Nom valide'
        // smallBirthName.style.color = "green"
        return true
    } else {
        smallBirthName.innerHTML = 'Le nom doit contenir au moins 2 lettres'
        smallBirthName.style.color = "red"
        return false
    }
};

// Valider la date de naissance
birth.addEventListener('change', function() {
    validBirth(this);
});

const validBirth = function(inputBirth) {
    let smallBirth = document.querySelector("#birth-small");
    const now = new Date();
    // console.log("now", now.getTime());
    let date100 = now.getTime() - 3155760000000;
    let date16 = now.getTime() - 504921600000;
    // console.log("2", inputbirth.valueAsNumber);
    if (inputBirth.valueAsNumber >= date100 && inputBirth.valueAsNumber <= date16) {
        // smallBirth.innerHTML = 'Age valide'
        // smallBirth.style.color = "green"
        return true
    } else {
        smallBirth.innerHTML = 'Age entre 16 et 100 ans'
        smallBirth.style.color = "red"
        return false
    }
};

//Valider le nbr de participations
nbrPart.addEventListener('change', function() {
    validPart(this);
});
const validPart = function(inputPart) {
    let smallPart = document.querySelector("#part-small");
    let partRegex = new RegExp('^[0-9]$');
    let testPart = partRegex.test(inputPart.value);
    // console.log(inputPart);
    // console.log(inputPart.value.length);
    // if (inputPart.value >= 0 && inputPart.value <= 99)
    if (inputPart.value >= 0 && inputPart.value <= 99 && partRegex.test(inputPart.value)) {
        // smallPart.innerHTML = 'Nbr participations valide'
        // smallPart.style.color = "green"
        return true
    } else {
        smallPart.innerHTML = 'Le Nbr participations doit être entre 0 et 99'
        smallPart.style.color = "red"
        return false
    }
};

//valider la localisation
// for (let check of local) {
//     console.log(check);
// };
let smallCheck = document.querySelector("#check-small");

for (let i = 0; i < local.length; i++) {
    local[i].addEventListener('change', function(localChecked) {
        // console.log(localChecked)
        if (local[i].checked == true) {
            // smallCheck.innerHTML = 'Localisation' + local[i].value
            // smallCheck.style.color = "green"
            return true
        } else {
            smallCheck.innerHTML = 'Vous devez choisir un lieu'
            smallCheck.style.color = "red"
            return false
        }
    })

};
//Valider les CGU
checkBox1.addEventListener('change', function() {
    validCheck(this);
});
const validCheck = function(checkBox) {
    let smallCheckbox = document.querySelector("#checkbox-small");
    // console.log(checkBox);
    // console.log(checkBox.checked);
    if (checkBox.checked == true) {
        // smallCheckbox.innerHTML = 'Case checked '
        // smallCheckbox.style.color = "green"
        return true
    } else {
        smallCheckbox.innerHTML = 'Vous devez cocher la case des CGU'
        smallCheckbox.style.color = "red"
        return false
    }
};

//vider la modal
btnSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    let errors = 0;
    if (!validEmail(email)) {
        errors++;
    } else if (!validForName(forName)) {
        errors++;
    } else if (!validBirthName(birthName)) {
        errors++;
    } else if (!validBirth(birth)) {
        errors++;
    } else if (!validPart(nbrPart)) {
        errors++;
    } else if (!validCheck(checkBox1)) {
        errors++;
        // } else if (!local) {
        //     errors++;
    }
    if (errors == 0) {
        form.innerHTML = "";
        let p = document.createElement('p');
        form.classList.add('modal-body');
        p.innerHTML = "Merci pour votre inscription";
        let link = document.createElement('a');
        link.classList.add('btn-submit');
        link.text = "Fermer";
        link.addEventListener('click', function() {
            modalBg.style.display = "none";
        })
        modal.append(p);
        modal.append(link);
    }
});