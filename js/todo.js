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
        
        tbody.innerHTML = "";

        feladatok.sort(function (a, b) {return b.p - a.p});

        

        for (var i = 0; i < feladatok.length; i++) {
            if (feladatok[i].p == 0) {
                row.style.backgroundColor = "green";
            } else if (feladatok[i].p == 1) {
                row.style.backgroundColor = "yellow";
            } else if (feladatok[i].p == 2) {
                row.style.backgroundColor = "red";
            }

            row.innerHTML = `
            <th scope="row">${i + 1}</th>
            <td>${feladatok[i].f}</td>
            <td>${feladatok[i].p}</td>`

            tbody.appendChild(row);
        }
    }
}