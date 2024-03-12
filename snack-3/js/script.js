//Crea due tag div con due id diversi: un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

//Creo 2 div nell'html con due id diversi
//Creo un array in js con dei numeri
  //Creo un ciclo che passa in rassegna l'array
    // Se il numero è pari andrà nell'id verde
    // altrimenti andrà nell' id rosso
const red = document.querySelector('#rosso');
red.style.color = 'red';
const green = document.querySelector('#verde');
green.style.color = 'green';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i];
    if (thisNumber % 2 === 0) {
        green.innerHTML += thisNumber;
    } else if (thisNumber % 2 !== 0) {
        red.innerHTML += thisNumber;
    }
}