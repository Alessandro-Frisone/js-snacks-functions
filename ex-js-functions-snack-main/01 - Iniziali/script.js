/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetter(namesArray) {
    const result = [];
    for (let i = 0; i < namesArray.length; i++) {
      result.push(namesArray[i][0]);
    }
    return result;
  }
const finalFirstLetter = firstLetter(names);
// Invoca la funzione qui e stampa il risultato in console
console.log(finalFirstLetter);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]