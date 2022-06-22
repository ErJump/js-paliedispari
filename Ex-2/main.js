let oddOrEvenCheck = false;
let oddOrEvenChoice;

while (oddOrEvenCheck === false){
    oddOrEvenChoice = prompt('Scegli "pari" o "dispari"');
    if (oddOrEvenChoice === 'pari' || oddOrEvenChoice === 'dispari'){
        oddOrEvenCheck = true;
    }
}

let userNumberCheck = false;
let userNumber;

while (userNumberCheck === false){
    userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
    if (!isNaN(userNumber) && userNumber <= 5 && userNumber >= 1){
        userNumberCheck = true;
    }
}

function getRandom (min, max){
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

const sum = userNumber + getRandom(1,5);

console.log(`La somma tra il tuo numero il numero randomico è ${sum}`);

function sumOddOrEven (number){
    if (number % 2 === 0){
        return 'pari'
    } else {
        return 'dispari'
    }
}

if (oddOrEvenChoice === sumOddOrEven(sum)){
    alert('Winner winner chicken dinner!')
} else {
    alert('Defeat')
}
