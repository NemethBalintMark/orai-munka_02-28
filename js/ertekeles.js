var ertekelesek = [];

function ertekel(clickedValue) {
    var csilagok = document.querySelectorAll("i");

    for (var i = clickedValue - 1; i <= 0; i--) {
        csilagok[i].style.backgroundColor = "yellow";
    }
}