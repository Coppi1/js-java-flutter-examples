let palavra = prompt(
  "Qual palavra testara (palíndromo(palavra ao inverso igual))"
);

let palavraInversa = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInversa += palavra[i];
}

// alert(palavraInversa);

if (palavra == palavraInversa) {
  alert("Palavra Palindromo!");
} else {
  alert("Palavra digitada inverse: " + palavraInversa);
}
