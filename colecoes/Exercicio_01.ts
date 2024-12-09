import readlinesync = require( 'readline-sync')

const cores: Array<string> = new Array<string>(5);

//Iteração 
for(let i = 0; i < 5; i++){
   cores[i] = readlinesync.question(`Digite a cor ${i + 1}:  `)

}
//Lista
console.log('\nListando as cores:')
console.table(cores)

//Ordem 
let ordenaCores: Array<string> = Array.from(cores).sort();
console.log('\nCores Ordenas: ')
console.table(ordenaCores)