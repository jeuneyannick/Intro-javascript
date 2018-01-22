var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    }, 
    decrire: function() {
        var description = this.nom + " est un " + this.race + " de " + this.taille + ". Il aboie !" + this.aboyer(); 
        return description;
    }
};

var chenil = []; 

var chien1 = Object.create(Chien); 
chien1.init("Crokdur","mâtin de Naples",75); 
chenil.push(chien1); 

var chien2 = Object.create(Chien);
chien2.init("Pupuce","bichon",22); 
chenil.push(chien2); 

var chien3 = Object.create(Chien);
chien3.init("Médor","labrador",58); 
chenil.push(chien3); 

    


console.log("Le chenil héberge " + chenil.length + " chien(s) :"); chenil.forEach(function (chien) {
    console.log(chien.decrire());
}); 


