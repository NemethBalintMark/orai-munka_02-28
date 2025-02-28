var feladatok = [];

function getSzint() {
    var szintek = document.querySelectorAll(".szint");

    for (var i = 0; i < szintek; i++) {
        if (szintek[i].checked) {
            return i;
        }
    }
}

function hozzaad() {
    var tbody = document.querySelector("tbody");
    var feladat = document.querySelector(".feladat");
    var szint = getSzint();

    feladat = feladat.trim();

    if (szint == null || feladat == "") {
        alert("Adjon meg egy érvényes bemenetet!");
    } else {
        
    }
}