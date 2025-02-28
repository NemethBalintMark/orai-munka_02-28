<<<<<<< Updated upstream
const betuk = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
=======

const szamok = "0123456789";
>>>>>>> Stashed changes
function teszt() {
    var jelszo = document.querySelector(".jelszo").value;
    var progress = document.querySelector(".progress");
    var progressBar = document.querySelector(".progress-bar");
    var jelszoSzint = 0;

    jelszo = jelszo.trim();

<<<<<<< Updated upstream
    if (jelszo.length >= 8) {
        jelszoSzint++;
    }

    var vege = false;
    var i = 0;
    var kisEsNagyBetu = 0;

    while(!vege) {
        if (jelszo.includes(betuk[i])) {
            kisEsNagyBetu++;
        }

        if (jelszo.includes(betuk.toUpperCase()[i])) {
            kisEsNagyBetu++;
        }

        if (kisEsNagyBetu == 2) {
            jelszoSzint++;
            vege = false;
        }

        i++;
=======
    vege = false;
    i = 0;
    while(!vege){
        if (szamok.includes(jelszo[i])){
            jelszoSzint++;
            vege = true;
        } else{
            i++;
        }
>>>>>>> Stashed changes
    }
}