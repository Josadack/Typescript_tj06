import readlinesync = require( 'readline-sync')

const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6);

let num: number = readlinesync.questionInt("Descubra a posicao do indice no Array de 1 a 10: ")

    if(num > 0 && num <= 10){
        
    console.log(`\nO número ${num} está localizado na posição: ${numeros.indexOf(num)}`)

    }else{
        console.log(`\nO número ${num} não foi encontrado!`)
    }

