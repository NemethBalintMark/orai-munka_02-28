var ertekelesek = [];
var ertekeles = 0;

function ertekel(clickedValue) {
    ertekeles = 0;
    var csilagok = document.querySelectorAll("i");

    for (var i = 0; i < csilagok.length; i++) {
        csilagok[i].classList.remove("bi-star-fill")
        csilagok[i].classList.add("bi-star");
        csilagok[i].style.color = "#ccc";
    }

    for (var i = clickedValue - 1; i >= 0; i--) {
        csilagok[i].classList.remove("bi-star")
        csilagok[i].classList.add("bi-star-fill");
        csilagok[i].style.color = "yellow";
        ertekeles++;
    }
}

function mentes(){
    var tbody = document.querySelector("tbody");
    var nev = document.querySelector(".nev").value;
    var comment = document.querySelector(".comment").value;
    tbody.innerHTML = ""
    nev = nev.trim();
    comment = comment.trim();
    if (ertekeles == 0 && nev == "", comment == ""){
        alert("Hibás input!");
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