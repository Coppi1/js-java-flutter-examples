const array = ["frodo", "sam", "harry"];
console.log(array);

//add elemento (no final)
//push
array.push("proximo");
console.log(array);

//add no inicio do array
//unshift
array.unshift("proximo");
console.log(array);

//remove ultimo elemento e retorna ele
//pop
const ultimo_element = array.pop();
console.log(array);
console.log(ultimo_element);

//remove o primeiro elemento
//shift
const primeiro_element = array.shift();
console.log(array);
console.log(primeiro_element);

//pesquisa um elemento, retorna true or false
//includes
const possui = array.includes("sam");
console.log(array);
console.log(possui);

//retorna indice
//indexOF
const indice = array.indexOf("sam");
console.log(array);
console.log(indice);

//cortar(dividir array) e concatenar(juntar arrays)
// slice  -  (cortar)
const pedaco = array.slice(0, 2);
const ultimos = array.slice(-2);
console.log(array);
console.log(pedaco);
console.log(ultimos);

// concat  -  (juntar)
const conjunto = array.concat(pedaco, "outro");
console.log(conjunto);

//substituição de elementos
//splice  -  (remove um grupo de elementos e substitui por outros)  e retorna elementos removidos
const elementosRemovidos = conjunto.splice(2, 1, "modificacao");
console.log(conjunto);
console.log(elementosRemovidos);

const elementosRemovidos2 = conjunto.splice(
  1,
  1,
  "modificacao2",
  true,
  1,
  "teste"
);
console.log(conjunto);
console.log(elementosRemovidos2);

//iterar sobre os elementos
for (let i = 0; i < conjunto.length; i++) {
  const elemento = conjunto[i];
  console.log(elemento + " se encontra na pos. " + i);
}
