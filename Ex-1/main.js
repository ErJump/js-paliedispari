let userWord = prompt('Inserisci una parola');

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

palindrome(userWord); 