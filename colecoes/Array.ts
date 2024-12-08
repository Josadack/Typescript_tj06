import readlinesync = require( 'readline-sync')

//Criamos a coleção Array vazia
const numeros: Array<number> = new Array<number>();

//Adcionamos valores
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7, 3);

//Listamos os dados adicionado
for(let numero of numeros){
    console.log(numero);
}
//Adicionamod um numero via teclado
numeros.push(readlinesync.questionFloat('Digite um numero '))

//adicona um ou mais elemento no inicio
numeros.unshift(2,4.5,8,9)

console.table(numeros)

//verificamos se um numero exite na coleção
console.log(`\nExiste o numero 5 no array ${numeros.includes(5)}`)

//Verificamos qual é o indice de elemento
console.log(`\nQual éo indice do humero 3 no array ${numeros.indexOf(3)}`)

//para apagar o elemento 10 o 1 que estar depos da virgula é propeio elemento
numeros.splice(numeros.indexOf(10), 1)