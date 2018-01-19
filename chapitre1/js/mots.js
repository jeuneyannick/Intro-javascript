var saisie = prompt("saississez un mot");
var tabSaisies = [];


function entreUnMot(){
    if(saisie !== "stop"){
     tabSaisie.push(saisie);
        return saisie;
    } else {
         tabSaisies.forEach(function(tabSaisie) {
             console.log(tabSaisie);
         });
    };

function entreUnMot(); 

var mots = [];

var mot = "";
while (mot !== "stop") {
    mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
    if (mot !== "stop") {
        mots.push(mot);
    }
}

mots.forEach(function (mot) {
    console.log(mot);
});
