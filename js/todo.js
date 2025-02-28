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

        if (szint == 0) {
            row.style.backgroundColor = "green";
        } else if (szint == 1) {
            row.style.backgroundColor = "yellow";
        } else if (szint == 2) {
            row.style.backgroundColor = "red";
        }

        for (var i = 0; i < feladatok.length; i++) {
            th.innerHTML = i;
            td = feladatok[i].f;
            td2 = feladatok[i].p;

            row.appendChild(th);
            row.appendChild(td);
            row.appendChild(td2);

            tbody.innerHTML += row;
        }
    }
}