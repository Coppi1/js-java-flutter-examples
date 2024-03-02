const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]


//MAP
//Como o for each, ele percorre os elementos do array, e pode ir criando um elemento ao mesmo tempo


//Jeito raiz de preencher um array com elementos de outro
const nomes = []

for (let i = 0; i < personagens.length; i++) {
    const personagem = personagens[i]
    nomes.push(personagem.nome)
}

console.log(nomes)

// map: permite obter um novo array a partir de um array existenste
const nomes1 = personagens.map(function (personagem) {
    return personagem.nome
})


//Filter - funciona como o map, porem pode filtrar os elementos

// Jeito raiz para preencher um array com outro filtrando seus elementos
const orcs = []
for (let i = 0; i < personagens.length; i++) {
    const personagem = personagens[i]
    if (personagem.raca === "Orc") {
        orcs.push(personagem)
    }
}

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs1 = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})

console.log(orcs1)

// Reduce - transforma array em outra coisa(obj, valor, string, outro array)

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotal1 = personagens.reduce(function (vlr_acumulado, personagem) {
    return vlr_acumulado + personagem.nivel
}, 0)  // na primeira iteação, o valor acumulado(nível total) será 0


// criando um objeto com o reduce.
const racas = personagens.reduce(function (vlr_acumulado, personagem) {
    if (vlr_acumulado[personagem.raca]) {
        vlr_acumulado[personagem.raca].push(personagem)
    } else {
        vlr_acumulado[personagem.raca] = [personagem]
    }
    return vlr_acumulado
}, {})  // valor inicial é um objeto vazio {}

console.log(racas)


// sort:   -   o método sort é o único que altera o array original
// ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
    return a.nivel - b.nivel
})