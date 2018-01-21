/*
Activité : gestion des contacts
*/
/*Message */
console.log('Bienvenue dans le gestionnaire de contacts');

var contact = {
    init : function(nom,prenom){
        this.nom = nom;
        this.prenom = prenom;
    }, 
    decrire : function(){
        var description = " Nom: " + this.nom + ", prénom: " + this.prenom; 
        return description;
    } 
};

var carole = Object.create(contact); 
carole.init("Levisse", "Carole"); 

var nelsonne = Object.create(contact); 
nelsonne.init("Nelsonne", "Melodie"); 

var tabContacts = [carole,nelsonne]; 


function afficherContact(tabContacts){
    tabContacts.forEach(function(contact){
        console.log(contact.decrire())
    });
}


var quit = "quitter";
while( saisie !== quit ){
    var saisie = prompt("Choississez une option").toLowerCase();
    if(saisie === 1){
        console.log("Voici la liste de tous les contacts "); 
        afficherContact(tabContacts);
    }
    
    afficherContact(tabContacts);
};

// TODO : complétez le programme
