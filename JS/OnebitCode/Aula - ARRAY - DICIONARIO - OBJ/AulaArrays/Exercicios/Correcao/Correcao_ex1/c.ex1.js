const fila_espera = ["KLEDERON", "ALCIDES", "TESTE"]


let x = ""

do {
    let pacientes = ""
    
    for (let i = 0; i < fila_espera.length; i++) {
        pacientes += (i + 1) + "º - " + fila_espera[i] + "\n"
    }

    x = prompt("Pacientes: " + pacientes +
        "\n\nOpções:" +
        "\n1 - Novo paciente" +
        "\n2 - Consultar paciente" +
        "\n3 - Sair")

    switch (x) {
        case "1":
            const novo = prompt("Digite o nome do Proximo Paciente:");
            fila_espera.push(novo);
            console.log(fila_espera);
            break

        case "2":
            const consultado = fila_espera.shift();
            
            alert(consultado + " foi removido da fila")
            console.log(fila_espera)
            break
        case "3":
            alert("Encerrando..")
            break
        default:
            alert("Opção Inválida")
    }

} while (x !== "3")