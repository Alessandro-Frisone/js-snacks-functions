/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filterByLetter(namesArray, letter) {
    const filteredArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i][0].toLowerCase() === letter.toLowerCase()) {
            filteredArray.push(namesArray[i]);
        }
    }
    return filteredArray;
}
const result = filterByLetter(names, "a"); 

// Invoca la funzione qui e stampa il risultato in console
console.log(result);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]