var mousquetaires = ["Athos","Porthos","Aramis"]; 

for( var i= 0; i < mousquetaires.length; i++){
    console.log( mousquetaires[i]);
}

mousquetaires.push("Artagnan"); 

console.log(mousquetaires); 

mousquetaires.forEach(function(mousquetaire) {
    console.log(mousquetaire); 
});