/*
Activité : gestion des contacts
*/
/*Message */
console.log('Bienvenue dans le gestionnaire de contacts');
/* Définition de l'objet prototype pour les contacts */
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
/* Instanciation des deux contacts demandés */
var carole = Object.create(contact);
carole.init("Levisse", "Carole");

var nelsonne = Object.create(contact);
nelsonne.init("Nelsonne", "Melodie");
/* Entrée ds contacts dans un tableau */
var tabContacts = [carole,nelsonne];

/* Fonction qui affichera les noms et prénoms des contacts dans la console */
function afficherContact() {
    tabContacts.forEach(function(contact){
        console.log(contact.decrire() )
    });
};
/* Fonction qui affichera les options à selectionner */
function afficherOption(){
    console.log("1:Lister les contacts");
    console.log("2: Ajouter un contact");
    console.log("0: Quitter");
};
/*Défintion de la variable du choix de l'utilisateur */
var saisie = Number(prompt("Choississez une option :"));

/* Condition pour afficher les contacts */
 if (saisie === 1){
    console.log("Voici la liste des contacts :");
    afficherContact();
    afficherOption();
};
/*Condition pour entrer les noms et prénoms des nouveaux contacts puis les afficher */
 if(saisie === 2){
    var nvNom = prompt("Entrez un nom:");
    var nvPrenom = prompt("Entrez un prénom");
    var nvContact = Object.create(contact);
    nvContact.init(nvNom, nvPrenom);
    tabContacts.push(nvContact);
    console.log(' Le nouveau contact a été ajouté \n');
     afficherContact();
     afficherOption();
}
/* Pour quitter la saisie demandée à l'utilisateur */
 if(saisie === 0){
    console.log(" Au revoir");
}
