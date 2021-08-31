// pren

var bottoneGenera = document.getElementById("genera");
var bottoneAnnulla = document.getElementById("annulla");

bottoneGenera.addEventListener('click',
    function (){
        var nominativo = document.getElementById("nome").value;
        var km = parseInt(document.getElementById("chilometri").value);
        var eta = document.getElementById("eta").value;

        if (nominativo != "" && km > 0 && eta != "") {
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

        document.getElementById("nome-passeggero").innerHTML = "<strong>" + nominativo + "</strong>";
        document.getElementById("offerta").innerHTML = eta;
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 10) + 1;
        document.getElementById("codice-prenotazione").innerHTML = Math.floor(Math.random() * 9999) + 90000;
        document.getElementById("prezzo").innerHTML = prezzo + "€";
        
        document.getElementById("ticket").classList.add("biglietto-aperto");
        } else {
            alert("Errore! Non hai inserito tutti i dati richiesti!");
        }
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







