const pilha_de_cartas = ["A1", "B2", "C3", "D4"]


let x = ""

do {
    let baralho = ""
    x = prompt("Quantidade de Cartas: " + pilha_de_cartas.length +
        "\n\nOpções:" +
        "\n1 - Adicionar uma carta" +
        "\n2 - Puxar uma carta" +
        "\n3 - Sair")

    switch (x) {
        case "1":
            const nova_carta = prompt("Digite a nova Carta:")
            pilha_de_cartas.unshift(nova_carta); 
            console.log(pilha_de_cartas);
            break

        case "2":
            const carta_selecionada = pilha_de_cartas.pop()
            if (!carta_selecionada) {   // caso não possua carta selecionada
                alert("Não há cartas selecionadas")
            } else { // senão mostra carta 
                alert("carta selecionada.. : " + carta_selecionada)
            }
            console.log(pilha_de_cartas)
            break
        case "3":
            alert("Encerrando")
            break
        default:
            alert("Opção Inválida")
    }

} while (x !== "3")