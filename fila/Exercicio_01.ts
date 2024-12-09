
import readlinesync = require( 'readline-sync')
import { Queue } from './Queue'

const banco = new Queue<string>()
let numero: number

do{
    console.log("\n******* Bem Vindos ao Banco *******");
    console.log("***********************************");
    console.log(" 1 - Adicionar Cliente na Fila: ");
    console.log(" 2 - Listar todos os Clientes: ");
    console.log(" 3 - Retirar Cliente da fila:  ");
    console.log(" 0 - Sair:  ");
    console.log("***********************************");

    numero = readlinesync.questionInt('Entre com a opcao desejada: ');
    
    if(numero >=0 && numero <= 3 ){
        if(numero === 1){
            banco.enqueue(readlinesync.question('\nDigite o nome: '));
            console.log()
            banco.printQueue();
            console.log("Cliente adicionado!\n")

       }else if(numero === 2){
             console.log("\nLista de Cliente na Fila: ")
              banco.printQueue();
        
       }else if(numero === 3){
            console.log(`Fila atualizada, no momento temos ${banco.count() -1 } cliente:` )
              banco.dequeue()
              banco.printQueue();

            
     }
    }else {  
        console.log("\nPor favor, Verifique o número digita: ")
    }


}while(numero != 0)