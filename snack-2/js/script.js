//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

//Chiedo all'utente di inserire due parole con due prompt consecutivi
  //Trovo la lunghezza delle due parole e le stampo in ordine crescente

  const userWord1 = prompt('Digita una parola a piacere');
  const userWord2 = prompt('Digita una parola a piacere');
  if (userWord1.length < userWord2.length) {
    console.log(userWord1);
    console.log(userWord2);
  } else if (userWord1.length > userWord2.length) {
    console.log(userWord2);
    console.log(userWord1);
  }