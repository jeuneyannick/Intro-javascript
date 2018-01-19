var chien = {
         nom: "bowie",
         race: "malinois",
         taille: 55, 
         aboyer:function(){
             var cri ="wafff, wafff !!";
             return cri;
         }
};



console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());