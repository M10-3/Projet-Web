function validerDateOfBirth() {
    var dateNaissance = document.getElementById("dateNaissance").value;
    var aujourdhui = new Date();
    var selectDate = new Date(dateNaissance);

    if (selectDate >= aujourdhui) {
        alert("La date de naissance doit être antérieure à la date d'aujourd'hui !");
    }
}
