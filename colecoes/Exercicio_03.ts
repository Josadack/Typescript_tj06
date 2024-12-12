import readlinesync = require( 'readline-sync')

const numeros: Set<number> = new Set<number>([10]);

for(let i = 0; i < 10; i++){
    numeros.add(readlinesync.questionInt(`Digete um numero: `))
}

console.log(`\nLista do Set:`)
let setOrdenado:  Array<number> = Array.from(numeros).sort((a,b) => a -b);
 console.table(setOrdenado)
