inizio();

function inizio() {

  scelta = prompt("P-Pari o D-Dispari?").toLowerCase();

  console.log(scelta);

  if ((scelta=="d") || (scelta=="p")) {

    numero();

    if ((numero1>=1) && (numero1<=5)) {

      console.log(numero1);

      var numero2 = Math.floor(Math.random() * 5) + 1;

      console.log(numero2);

      giochiamo(numero1, numero2);

    } else {

      alert("Devi darmi un numero tra 1 e 5!!!");

      numero();
    }

  } else {

    alert("Devi scrivere P o D");

    inizio();
  }
}

function giochiamo(nr1, nr2) {

  var somma = nr1 + nr2;

  console.log(somma);

  if (somma%2 && (scelta=="d")) {

    console.log("Hai vinto!");

  } else if (!(somma%2) && (scelta=="p")) {

    console.log("Hai vinto!");

  } else {

    console.log("Hai perso!");
  }
}

function numero() {

  numero1 = parseInt(prompt("Dammi un numero da 1 a 5:"));

}
