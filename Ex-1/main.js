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
    
    //ciclo for che si ripete per metà della lunghezza della parola
    for (let i = 0; i < wordLength / 2; i++){
        //ogni ciclo metto a confronto la prima e l'ultima lettera della parola spostandomi ogni volta verso il "centro" della parola  
        if (word[i] !== word[wordLength - 1 - i]){
            //se e solo se un confronto è diverso allora la funzione si interrompe e riporta che la parola non è palindroma
            return `${word} NON è una parola palindroma`;
        } 
        return `${word} è una parola palindroma`;
    }  
}

alert(palindrome(userWord)); 