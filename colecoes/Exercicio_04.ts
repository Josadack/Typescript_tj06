
import readlinesync = require( 'readline-sync')

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6]);

let num: number = readlinesync.questionInt("Descubra a posicao do indice no Set de 1 a 10: ")

    if(num > 0 && num <= 10){
        
    console.log(`\nO número ${num} Foi encontrado! `)

    }else{
        console.log(`\nO número ${num} Não foi encontrado!`)
    }
