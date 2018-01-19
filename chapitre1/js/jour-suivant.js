var jour = prompt("saisissez un jour de la semaine:"); 
switch (jour){
    case "lundi": 
    console.log("demain, nous serons mardi");
    break; 
    
    case "mardi": 
        console.log("demain; nous serons mercredi"); 
        break; 
    case "mercredi": 
        console.log("demain nous serons jeudi"); 
        break; 
    case "jeudi": 
        console.log("demain nous serons vendredi"); 
        break; 
    case "vendredi": 
        console.log("demain nous serons samedi"); 
        break; 
    case "samedi": 
        console.log("demain nous serons dimanche"); 
        break; 
    case "dimanche": 
        console.log("demain nous serons lundi"); 
        break; 
    default: 
        console.log("tapez un jour de la semaine correct !"); 
}