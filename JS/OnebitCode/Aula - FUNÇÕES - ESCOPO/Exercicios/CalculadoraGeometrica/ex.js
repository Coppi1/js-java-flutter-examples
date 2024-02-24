function area_triangulo(base, altura) {
    const area_triangulo = (base * altura) / 2
    return area_triangulo
}

function area_retangulo(base, altura) {
    const area_retangulo = base * altura
    return area_retangulo
}

function area_quadrado(lado) {
    const area_quadrado = lado * lado
    return area_quadrado
}

function area_trapezio(base_maior, base_menor, altura) {
    const baseMTRF = Number(base_maior)
    const baseMNTRF = Number(base_menor)
    const area_trapezio = ((baseMTRF + baseMNTRF) * altura) / 2
    return area_trapezio
}

function area_circulo(raio) {
    const area_circulo = 3.14 * (raio * raio)
    return area_circulo
}

let opcao = ""


do {

    opcao = prompt(
        "CALCULADORA GEOMÉTRICA " +
        "\n\nOpções:" +
        "\n1 - Área do triangulo" +
        "\n2 - Área do retângulo" +
        "\n3 - Área do quadrado" +
        "\n4 - Área do trapézio" +
        "\n5 - Área do circulo" +
        "\n6 - Quit - Sair"
    );

    switch (opcao) {
        case "1":
            const baseT = prompt("Digite a base do triângulo")
            const alturaT = prompt("Digite a altura do triângulo")
            alert("A Area do triangulo é: " + area_triangulo(base, altura))
            break
        case "2":
            const baseR = prompt("Digite a base do retângulo")
            const alturaR = prompt("Digite a altura do retângulo")
            alert("a Area do retângulo: " + area_retangulo(baseR, alturaR))
            break
        case "3":
            const baseQ = prompt("Digite o lado do quadrado")
            alert("a area do quadrado é: " + area_quadrado(baseQ))
            break
        case "4":
            const baseMTR = prompt("Digite a base maior do trapezio: ")
            const baseMNTR = prompt("Digite a base menor do trapezio: ")
            const alturaTR = prompt("Digite a altura do trapezio: ")
            alert("a Area do trapezio: " + area_trapezio(baseMTR, baseMNTR, alturaTR))
            break
        case "5":
            const raioC = prompt("Digite o Raio do circulo:")
            alert("A area do circulo é: " + area_circulo(raioC))
            break

        case "6":
            alert("Encerrando..")
            break

        default:
            alert("Opção Inválida")
    }


} while (opcao !== "6")

