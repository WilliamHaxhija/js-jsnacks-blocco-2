//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

const userNumber = prompt('Digita un numero di 4 cifre');
console.log(userNumber);
let sum = 0;
for (let i = 0; i < userNumber.length; i++) {
    sum += parseInt(userNumber[i]);
}
console.log(sum);