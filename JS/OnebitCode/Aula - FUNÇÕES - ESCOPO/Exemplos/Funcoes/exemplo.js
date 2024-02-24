// podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined
function dizerOla(nome = "mundo") {
    console.log("Olá, " + nome + "!")
}
dizerOla("Isaac")
dizerOla()


// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha = "aaa") {  // valor padrão sempre por ultimo
    // ...
}
function parametrosDoJeitoCerto(usuario) {
    // ...
}
// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)


//FUNÇÕES COM RETURN 
// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
    const media = (a + b) / 2
    return media
}

const resultado = calcularMedia(111, 8)
console.log(resultado)


// Funcao para criar produto e retornalo
function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Notebook Ryzen", 3000)

console.log(notebook)

// Também podemos jogar a saída de uma função dentro dos parâmetros de outra
console.log(criarProduto("Smartphone Samsung Galaxy", 1000))


// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
    return base * altura
}
console.log(areaRetangular(5, 5))
// Ou até o retorno de outra função
function areaQuadrada(lado) {
    return areaRetangular(lado, lado)
}
console.log(areaQuadrada(5)) // quadrado = 4 lados iguais


// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function olaMundo() {
    let texto = "..."
    return texto
    texto = "Olá, mundo!" // não exibe esta parte, o final é o return
    console.log(texto)
}
console.log(olaMundo())

// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maioridade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}
console.log(maioridade(20))
console.log(maioridade(13))