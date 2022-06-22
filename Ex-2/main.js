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
