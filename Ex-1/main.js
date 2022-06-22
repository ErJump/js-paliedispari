let userWord = prompt('Inserisci una parola');

function palindrome (word){
    //converto la stringa in un array attraverso split 
    //e inverto gli elementi degli array tramite reverse
    const wordArray = word.split('').reverse();
    //converto l'array in stringa tramite la funzione join
    const reverseWord = wordArray.join(''); 
    console.log(reverseWord);
}

palindrome(userWord); 