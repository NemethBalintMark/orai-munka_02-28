var ertekelesek = [];

function ertekel(clickedValue) {
    var csilagok = document.querySelectorAll("i");

    for (var i = clickedValue - 1; i >= 0; i--) {
        csilagok[i].classList.remove("bi-star")
        csilagok[i].classList.add("bi-star-fill");
        csilagok[i].style.color = "yellow";
    }
}