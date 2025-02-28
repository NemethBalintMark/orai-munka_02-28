const betuk = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
const szamok = "0123456789";

function teszt() {
    var jelszo = document.querySelector(".jelszo").value;
    var progress = document.querySelector(".progress");
    var progressBar = document.querySelector(".progress-bar");
    var jelszoSzint = 0;

    jelszo = jelszo.trim();

    if (jelszo.length >= 8) {
        jelszoSzint++;
    }

    var vege = false;
    var i = 0;
    var kisEsNagyBetu = 0;

    while(!vege) {
        if (betuk.includes(jelszo[i])) {
            kisEsNagyBetu++;
        }else if (betuk.toUpperCase().includes(jelszo[i])) {
            kisEsNagyBetu++;
        } else if (kisEsNagyBetu == 2) {
            jelszoSzint++;
            vege = true;
        }else if (i < betuk.length - 1) {
            i++;
        } else {
            vege = true;
        }
    }

    vege = false;
    i = 0;
    while(!vege){
        if (szamok.includes(jelszo[i])){
            jelszoSzint++;
            vege = true;
            break
        } else{
            if (i > jelszo.length - 1){
                break
            } else{
                i++;
            }
        }
    }

<<<<<<< Updated upstream
    vege = false;
    i = 0;

    while (vege) {
        if (!betuk.includes(jelszo[i].toLowerCase()) && !szamok.includes(jelszo[i]) && jelszo[i] != 34 && jelszo[i] != 39) {
            vege = true;
        } else if (i < jelszo.length - 1) {
            i++;
        } else {
            vege = true;
        }
    }

    
}

progressBar.style.width = "50%";
=======
    progressBar.style.width = "50%";
}
>>>>>>> Stashed changes
