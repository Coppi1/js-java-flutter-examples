
// métodos são funções atreladas a objetos

let pessoa = {
    nome: "Coppi",
    idade: 26,
    dizerOla() {   // declaração do método
        console.log("Hello World, my name is" + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla() // chamada do método pelo opjeto
