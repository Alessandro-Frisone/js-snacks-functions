/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'parallelepipedo';


// Dichiara la funzione qui.
function countWord(word) {
    const vocali = 0;
    for (let i = 0; i < word.length; i++) {
        if ('aeiou'.includes(word[i].toLowerCase())) {
            vocali++;
            }
        }
        return vocali;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(countWord(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)