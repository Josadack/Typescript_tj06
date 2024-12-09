import { Stack } from "./Stack"

import readlinesync = require( 'readline-sync')

const livro = new Stack<string>();
let numero: number

do{
    console.log("\n******* Bem Vindos a Livraria *******");
    console.log("***********************************");
    console.log(" 1 - Adicionar Livro na pilha: ");
    console.log(" 2 - Listar todos os Livros: ");
    console.log(" 3 - Retirar Livro da pilha:  ");
    console.log(" 0 - Sair:  ");
    console.log("***********************************");

    numero = readlinesync.questionInt('Entre com a opcao desejada: ');
    
    if(numero >=0 && numero <= 3 ){
        if(numero === 1){
            livro.push(readlinesync.question('\ndigite o nome: '));
            console.log()
            livro.printStack();
            console.log("Livro adicionado!\n")

       }else if(numero === 2){
             console.log("\nLista de Livros na pilha: ")
              livro.printStack();
        
       }else if(numero === 3){
            console.log(`\nA Pilha atualizada!\nNo momento temos ${livro.count() -1 } Livros:` )
              livro.pop()
              livro.printStack();

            
     }
    }else {  
        console.log("\nPor favor, Verifique o número digita: ")
    }


}while(numero != 0)