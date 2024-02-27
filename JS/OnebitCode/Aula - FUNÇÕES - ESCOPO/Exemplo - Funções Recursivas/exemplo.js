

// Função recursiva é uma função que chama a sí própria, e com isso ela cria uma pilha de chamadas

function dividir(num) {

    console.log(num)

    if (num % 2 === 0) {
        dividir(num / 2)  //chamou a função denovo, caso ela for par, caso impar, retorna numero
    } else {
        return num
    }
}

dividir(256)


function dobrar(num) {
    console.log(num)
    dobrar(num * 2)  // dobra o valor infinitamente
}

// dobrar(2)

function fatorial(num) {
    console.log("Numero: " + num)

    if (num === 0) {
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1))
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))














