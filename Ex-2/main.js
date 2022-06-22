let oddOrEvenCheck = false
let oddOrEvenChoice;

while (oddOrEvenCheck === false){
    oddOrEvenChoice = prompt('Scegli "pari" o "dispari"');
    if (oddOrEvenChoice === 'pari' || oddOrEvenChoice === 'dispari'){
        oddOrEvenCheck = true;
    }
}
