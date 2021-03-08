inizio();

function inizio() {

  scelta = prompt("P-Pari o D-Dispari?").toLowerCase();

  if ((scelta=="d") || (scelta=="p")) {

    scrviScelta();

    numero();

    if ((numero1>=1) && (numero1<=5)) {

      console.log(numero1);

      document.getElementById("nr1").innerHTML = numero1;


      var numero2 = Math.floor(Math.random() * 5) + 1;

      console.log(numero2);

      document.getElementById("nr2").innerHTML = numero2;

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

    document.getElementById("risultato").innerHTML = "Hai vinto!";

    document.body.style.background = "green";

  } else if (!(somma%2) && (scelta=="p")) {

    console.log("Hai vinto!");

    document.getElementById("risultato").innerHTML = "Hai vinto!";

    document.body.style.background = "green";

  } else {

    console.log("Hai perso!");

    document.getElementById("risultato").innerHTML = "Hai perso!";

    document.body.style.background = "red";
  }
}

function numero() {

  numero1 = parseInt(prompt("Dammi un numero da 1 a 5:"));

}

function scrviScelta() {
  if ((scelta=="d")) {
    document.getElementById("scelta").innerHTML = "Hai scelto DISPARI";
  } else {
    document.getElementById("scelta").innerHTML = "Hai scelto PARI";
  }
}
