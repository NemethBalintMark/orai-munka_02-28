var ertekelesek = [];
var ertekeles = 0;

function ertekel(clickedValue) {
    ertekeles = 0;
    var csilagok = document.querySelectorAll("i");

    for (var i = clickedValue - 1; i >= 0; i--) {
        csilagok[i].classList.remove("bi-star")
        csilagok[i].classList.add("bi-star-fill");
        csilagok[i].style.color = "yellow";
        ertekeles++;
    }
}

function mentes(){
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = ""
    if (ertekeles == 0){
        alert("Adjon meg egy értékelést!");
    } else{
        ertekelesek.push(ertekeles);
        for (let i = 0; i < ertekelesek.length; i++){
            tbody.innerHTML += `<tr>
                                    <th scope="row">${i + 1}</th>
                                    <td>${ertekelesek[i]}</td>
                                </tr>`
        }
    }
}