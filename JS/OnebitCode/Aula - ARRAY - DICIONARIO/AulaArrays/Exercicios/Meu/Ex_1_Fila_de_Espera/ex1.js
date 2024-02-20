const fila_espera = ["Marcos", "Klebinho", "Jorjão", "Carneiro"];


let x = 0;

while (x =! 0) {
  
    let x = prompt(
    "Fila :" +
      "\n1 - " +
      fila_espera[0] +
      "\n2 - " +
      fila_espera[1] +
      "\n3 - " +
      fila_espera[2] +
      "\n4 - " +
      fila_espera[3] +
      "\n\n Opções:" +
      "\n1 - Novo paciente" +
      "\n2 - Consultar paciente" +
      "\n3 - Sair"
  )

  if (x == 1) {
    let novo = prompt("Digite o nome do Proximo Paciente:");
    fila_espera.push(novo);
    console.log(fila_espera);
  } else if (x == 2) {
    fila_espera.shift();
    console.log(fila_espera)
  } else if (x == 3) {
    x = 0;
    break;
  } 

}
