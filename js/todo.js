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
    var feladat = document.querySelector(".feladat").value;
    var szint = getSzint();

    if (szint == null || feladat == "") {
        alert("Adjon meg egy érvényes bemenetet!");
    } else {
        feladatok.push({p: szint, f: feladat});

        var row = document.createElement("tr");
        var th = document.createElement("th");
        th.scope = "row";
        var td = document.createElement("td");
        var td2 = document.createElement("td");

        alert(feladat[0].p);

    }
}