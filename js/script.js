

var bottoneGenera = document.getElementById("genera");
var bottoneAnnulla = document.getElementById("annulla");

bottoneGenera.addEventListener('click',
    function (){
        document.getElementById("ticket").classList.add("biglietto-aperto");

        var nominativo = document.getElementById("nome");
        var km = document.getElementById("chilometri").value;
        var eta = document.getElementById("eta").value;
        var prezzo = (0.21 * km).toFixed(2);

        if (eta == "minorenne"){
            prezzo = (prezzo - (prezzo * 20 / 100)).toFixed(2);
            eta = "Tariffa Minorenni";
        } else if (eta == "over65"){
            prezzo = (prezzo - (prezzo * 40 / 100)).toFixed(2);
            eta = "Tariffa Over65";
        } else {
            eta = "Biglietto Standard";
        }

        document.getElementById("nome-passeggero").innerHTML = nominativo.value;
        document.getElementById("offerta").innerHTML = eta;
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById("codice-prenotazione").innerHTML = Math.floor(Math.random() * 9999) + 90000;
        document.getElementById("prezzo").innerHTML = prezzo + "€";
    }
);

bottoneAnnulla.addEventListener('click',
    function(){
        document.getElementById("ticket").classList.add("biglietto-chiuso");
        document.getElementById("nome").value = "";
        document.getElementById("chilometri").value = "";
        document.getElementById("eta").value = "";
    }

);







