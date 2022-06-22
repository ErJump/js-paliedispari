let userWord = prompt('Inserisci una parola');

console.log(userWord.length)
//Too easy
/* function palindrome (word){
    //converto la stringa in un array attraverso split 
    //e inverto gli elementi degli array tramite reverse
    const wordArray = word.split('').reverse();
    //converto l'array in stringa tramite la funzione join
    const reverseWord = wordArray.join(''); 
    console.log(reverseWord);
    //metto le condizioni di verifica
    if (word === reverseWord){
        console.log(`${word} è una parola palindroma`)
    } else {
        console.log(`${word} non è una parola palindroma`)
    }
} */

function palindrome(word){
    const wordLength = word.length;
    //ciclo for basato su metà della lunghezza della parola
    for (let i = 0; i < wordLength / 2; i++){
        //ottengo in console la singola lettera della mezza parola ogni ciclo
        console.log(word[i]);
    }
    
}

palindrome(userWord); 