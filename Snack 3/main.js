// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine
var zucchine = [
    {
        "varieta": "prima" ,
        "peso": 2,
        "lunghezza": 10
    },
    {
        "varieta": "seconda",
        "peso": 3,
        "lunghezza": 16
    },
    {
        "varieta": "terza",
        "peso": 3,
        "lunghezza": 17
    },
    {
        "varieta":"quarta" ,
        "peso": 2,
        "lunghezza": 13
    },
    {
        "varieta": "quinta" ,
        "peso": 2,
        "lunghezza": 12
    },
    {
        "varieta": "sesta" ,
        "peso": 5,
        "lunghezza": 18
    },
    {
        "varieta": "settima" ,
        "peso": 3,
        "lunghezza": 18
    },
    {
        "varieta": "ottava" ,
        "peso": 4,
        "lunghezza": 20
    },
    {
        "varieta": "nona" ,
        "peso": 2,
        "lunghezza": 11
    },
    {
        "varieta": "decima" ,
        "peso": 3,
        "lunghezza": 16
    },
]
var zucchineCorte = [];
var zucchineCortePeso = 0;
var zucchineLunghe = [];
var zucchineLunghePeso = 0;

for (var i = 0; i < zucchine.length; i++) {
    var zucchina = zucchine[i];
    var lunghezzaZucchina = zucchina.lunghezza;
    if (lunghezzaZucchina <= 15 ) {
        zucchineCorte.push(zucchina);
        zucchineCortePeso += zucchina.peso
    }
    else {
        zucchineLunghe.push(zucchina);
        zucchineLunghePeso += zucchina.peso
    }
}
console.log(zucchineCorte);
console.log(zucchineCortePeso);
console.log(zucchineLunghe);
console.log(zucchineLunghePeso);
