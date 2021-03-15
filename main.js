/* La pagina espone 5 numeri generati casualmente. Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */



$(document).ready(function () {
  var numeriArray = [];
  var maxNum = 50;
  



/* Creo numeri random e li metto nel tag p nel DOM */
  numeriArray = memo(numeriArray, maxNum);

  function memo(numeriArray, maxNum) {
    while (numeriArray.length < 5) {
      var numero = numeroRandom(1, maxNum);
  
      if (!numeriArray.includes(numero)) {
        numeriArray.push(numero);
      }
    }
    console.log(numeriArray);
    $('#numeri').text(numeriArray)
    return numeriArray;
  }

  function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
})






/* soluzione di stack overflow da studiare
var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr); */