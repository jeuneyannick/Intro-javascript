var moyenne = parseFloat(prompt("Entrez votre moyenne:")); 
if (moyenne >= 10 && moyenne <= 12){
    console.log("le candidat est reçu"); 
} else if (moyenne > 12){
    console.log("le candidat a la mention"); 
} else {
    console.log("le candidat est recalé"); 
}