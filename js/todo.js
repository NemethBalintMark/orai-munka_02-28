var feladatok = [];

function getSzint() {
    var radios = document.querySelectorAll(".form-check-input");

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
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
        
        tbody.innerHTML = "";

        feladatok.sort(function (a, b) {return b.p - a.p});

        
    }
}