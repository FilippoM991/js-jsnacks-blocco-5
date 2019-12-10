var array = ["pippo", "pluto", "paperino","topolino", "minnie","pietro"];
var numeroUno = 1;
var numeroDue = 4;
var nuovoArray = unione(array, numeroUno, numeroDue);
console.log(nuovoArray);
function unione(a,b,c){
    var arrayFinale = [];
    for (var i = (b-1); i < c; i++) {
        var elementoArray = a[i];
        arrayFinale.push(elementoArray);
    }
    return arrayFinale
}
