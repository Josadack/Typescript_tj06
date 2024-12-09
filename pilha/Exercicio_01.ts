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
            livro.push(readlinesync.question('\ndigite o nome:**  '));
            console.log()
            livro.printStack();
            console.log("Livro adicionado!\n")

       }else if(numero === 2){
             console.log("\nLista de Livros na pilha: ")
              livro.printStack();
        
       }else if(numero === 3){
            if(livro.isEmpty()){
                console.log("\nA Pilha está vazia!\n");  
            }else{
                livro.pop() 
                livro.printStack();
                console.log(`Um livro foi retirado da pilha! Total de Livro na Pilha é: ${livro.count()}`)
            }
                
    }else {  
        console.log("\nPor favor, Verifique o número digita: ")
    }
    }

}while(numero != 0)
    console.log("Programa Finalizado!")