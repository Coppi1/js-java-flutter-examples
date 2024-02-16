let x = prompt("Digite um numero para exibir sua tabuada");
let resultado = "";

for (let i = 0; i < 20; i++) {
  resultado += i + " X " + x + " = " + i * x + "\n";
}

alert(resultado);
