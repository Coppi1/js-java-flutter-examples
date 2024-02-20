const array = [
    "1º nível",
    ["2º Nível", 52, true],  // 
    ["3º nivel", "c"],
    ["4º nível", [["b",["b", 22, "n3"], "8"]]]
]

// console.log(array)
// console.log(array[0])
// console.log(array[1]) // exibe o o primeiro elemento fora do colchete do segundo nivel, e primeiro de dentro dele
// console.log(array[1][0])
// console.log(array[0][1])
// console.log(array[3][1][0][1]) // exibe umtima camada do 4º nível
// console.log(array[3][1][0][1][1]) // exibe o segundo elemento dela (ª Camada)

// Array matriz  
const matriz = [
    ["l1, c1", "l1, c2", "11, c3"],
    ["l2, c1", "l2, c2", "l2, c3"],
    ["l3, c1", "l3, c2", "l3, c3"],
    ["l4, c1", "l4, c2", "l4, c3"],
    ["l5, c1", "l5, c2", "l5, c3"],
]

// console.table(matriz)

// matriz.push(["nova Linha"])           // adiciona nova linha
// matriz[0].push("nova Coluna")         // adiciona nova coluna

// console.table(matriz)

for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++){
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
    //console.log(matriz[i])
}

