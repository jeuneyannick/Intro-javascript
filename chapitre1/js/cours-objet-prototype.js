var unobjet = {
    a:2
};

var UnAutreObjet = Object.create(unobjet); 

console.log(UnAutreObjet.a); 

var EncoreUnAutre = Object.create(UnAutreObjet); 
console.log(EncoreUnAutre.a); 