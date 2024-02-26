const pilha_cartas = ["A", "B", "C", "1", "2", "3"];
console.log(pilha_cartas)

let x = 0;

while (x =! 0) {

    let x = prompt(
        "Quantidade de Cartas: " +
        pilha_cartas.length +
        "\n\n Opções:" +
        "\n1 - Adicionar Carta" +
        "\n2 - Puxar Carta" +
        "\n3 - Sair"
    );

    if (x == 1) {
        let nova_carta = prompt("Nome da carta:")
        pilha_cartas.unshift(nova_carta)
        console.log(pilha_cartas)
    } else if (x == 2) {
        let carta_puxada = pilha_cartas.pop()
        alert(carta_puxada)
        console.log(pilha_cartas)
    } else if (x == 3) {
        x = 0;
        break;
    }
}
