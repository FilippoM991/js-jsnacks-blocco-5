// Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
var arraUno = ["a", "b", "c", "d", "e", "f"];
var arrayDue = [1,2,3,4,5,6,7,8];
var sommaArray = unisciArray(arraUno, arrayDue);
console.log(sommaArray);
function unisciArray(a,b){
    var unione = [];
    var lunghezza_a = a.length;
    var lunghezza_b = b.length;

    if (lunghezza_a >= lunghezza_b) {
        for (var i = 0; i < a.length; i++) {
            var elemento_a = a[i];
            var elemento_b = b[i];
            unione.push(elemento_a);
            if (i < b.length) {
                unione.push(elemento_b);
            }
        }
    }
    if (lunghezza_a < lunghezza_b) {
        for (var i = 0; i < b.length; i++) {
            var elemento_a = a[i];
            var elemento_b = b[i];
            if (i < a.length) {
                unione.push(elemento_a);
            }
            unione.push(elemento_b);
        }
    }
    return unione
}
