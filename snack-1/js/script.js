//L'utente inserisce un numero nel prompt, se è pari stampa il numero, se è dispari stampa il numero successivo

//Chiedo un numero all'utente con un prompt
  //Se è pari, lo stampo in un p
  //Altrimenti stampo il numero successivo

  let userNumber = parseInt(prompt('Inserisci un umero'));
  if (userNumber % 2 === 0) {
    document.querySelector('#even-number').innerHTML = userNumber;
  } else {
    userNumber++;
    document.querySelector('#even-number').innerHTML = userNumber;
  }