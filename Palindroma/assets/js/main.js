var parola = prompt("Scrivi una parola, ti dirò se è palindroma:")

reversed = inversione();

if (parola.slice(0, Math.floor(parola.length/2)) == reversed.slice(0, Math.floor(reversed.length/2))){
  console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}

// funzioni
function inversione() {
  return parola.split("").reverse().join("");
}
