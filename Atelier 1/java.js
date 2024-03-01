function validerDateOfBirth() {
    var dateNaissance = document.getElementById("dateNaissance").value;
    var aujourdhui = new Date();
    var selectDate = new Date(dateNaissance);

    if (selectDate >= aujourdhui) {
        alert("La date de naissance doit être antérieure à la date d'aujourd'hui !");
    }
}
document.forms["inscription"].addEventListener("submit", function (e) {
    var inputs = document.forms["inscription"];
    let ids = [
        "erreur",
        "nomEr",
        "prenomEr",
        "phoneEr",
        "passEr",
        "cPassEr",
        "erreur",
    ];

    ids.map((id) => (document.getElementById(id).innerHTML = "")); // reinitialiser l'affichage des erreurs

    let errors = false;

    //Traitement cas par cas
    if (lNameInput.value.length < 3) {
        errors = false;
        document.getElementById("nomEr").innerHTML =
            "Le nom doit compter au minimum 3 caractères.";
    } else if (!lNameInput.value.match(letters)) {
        errors = false;
        document.getElementById("nomEr").innerHTML =
            "Veuillez entrer un nom valid ! (seulement des lettres)";
    } else {
        errors = true;
    }
    if (fNameInput.value.length < 4) {
        errors = false;
        document.getElementById("prenomEr").innerHTML =
            "Le prénom doit compter au minimum 4 caractères";
    } else {
        errors = true;
    }

    if (isNaN(phoneInput.value)) {
        errors = false;
        document.getElementById("phoneEr").innerHTML =
            "Le numéro ne doit pas contenir des lettres";
    } else {
        errors = true;
    }
    if (
        !(
            passInput.value.match(/[0-9]/g) &&
            passInput.value.match(/[A-Z]/g) &&
            passInput.value.match(/[a-z]/g) &&
            passInput.value.length >= 10
        )
    ) {
        errors = false;
        document.getElementById("passEr").innerHTML = "Mot de passe faible";
    } else {
        errors = true;
    }

    if (passInput.value != cPassInput.value) {
        errors = false;
        document.getElementById("cPassEr").innerHTML =
            "Les mots de passe ne correspondent pas";
    } else {
        errors = true;
    }

    //Traitement générique
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            errors = false;
            document.getElementById("erreur").innerHTML =
                "Veuillez renseigner tous les champs";
        }
    }

    if (errors === false) {
        e.preventDefault();
    } else {
        alert("formulaire envoyé");
    }
});/*
document.addEventListener('DOMContentLoaded', function () {
    var formulaire = document.getElementById('pageContent');
    formulaire.addEventListener('submit', function (e) {
        e.preventDefault();
        var nom = document.getElementById('name');
        var prenom = document.getElementById('prename');
        var email = document.getElementById('mail');
        var tel = document.getElementById('phone');
        var naissance = document.getElementById('dateNaissance');
        var validation = true;

        function voirErreur(input, message) {
            var error = document.createElement('span');
            error.innerText = message;
            error.style.color = 'red';
            input.parentNode.appendChild(error);
            validation = false;
        }

        function voirSucces(input) {
            var success = document.createElement('span');
            success.innerText = 'Succès';
            success.style.color = 'green';
            input.parentNode.appendChild(success);
        }

        function initErreur(input) {
            var error = input.parentNode.querySelector('span');
            if (error) {
                error.parentNode.removeChild(error);
            }
        }

        initErreur(nom);
        initErreur(prenom);
        initErreur(email);
        initErreur(tel);
        initErreur(naissance);

        if (nom.value.length < 2 || !/^[A-Za-z]+$/.test(nom.value)) {
            voirErreur(nom, 'Veuillez entrer un nom valide (Lettre uniquement)');
        }

        if (prenom.value.length < 2 || !/^[A-Za-z]+$/.test(prenom.value)) {
            voirErreur(prenom, 'Veuillez entrer un prénom valide (Lettre uniquement)');
        }

        if (!email.validity.valid) {
            voirErreur(email, 'Veuillez entrer une adresse email valide');
        }

        if (tel.value.length !== 8 || !/^[0-9]+$/.test(tel.value)) {
            voirErreur(tel, 'Veuillez entrer un numéro de téléphone valide (8 chiffres)');
        }

        var dateNaissance = new Date(naissance.value);
        var aujourdHui = new Date();
        if (isNaN(dateNaissance) || dateNaissance >= aujourdHui) {
            voirErreur(naissance, 'Veuillez entrer une date de naissance valide');
        }

        if (validation) {
            voirSucces(nom);
            voirSucces(prenom);
            voirSucces(email);
            voirSucces(tel);
            voirSucces(naissance);
            alert('Le formulaire est valide. Il peut être soumis.');
            // Soumettre le formulaire ici si nécessaire
        } else {
            alert('Le formulaire contient des erreurs. Veuillez vérifier les champs.');
        }
    });
});*/