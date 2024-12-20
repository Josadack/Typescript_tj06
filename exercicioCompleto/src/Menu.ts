import readlinesync = require('readline-sync')
import { colors } from "./util/Cores"
import { ProdutosController } from './controller/ProdutosController';
import { Produtos } from './model/Produtos';
import { Medicamento } from './model/Medicamentos';
import { Cosmeticos } from './model/Cosmeticos';


export function main(){
let opcao, id, tipo, preco: number;
let  nome, generico, fragancia:string;

const tipoProdutos =['Medicamento', 'Cosmetico']

const produtos = new ProdutosController();

   //Novas Instâncias da Classe Medicamentos(Objetos)
   produtos.criarProduto(new Medicamento(produtos.gerarId(),"Dorflex", 1, 15, ""))
   produtos.criarProduto(new Medicamento(produtos.gerarId(),"Dipirona", 1, 25, "Dor"))

   // Novas Instâncias da Classe Cosmedico (Objetos)
   produtos.criarProduto(new Cosmeticos(produtos.gerarId(),"Dove", 2, 5, "Lavanda"));
   produtos.criarProduto(new Cosmeticos(produtos.gerarId(),"Salo liine Kid´s", 2, 10, "Melancia"));

while(true){

        console.log(colors.fg.red,
            "\n**************************************************")
        console.log("                                     ")                             
        console.log(colors.fg.cyanstrong,
                "              Farmacia Todo dia!               ")
        console.log(colors.fg.red,
                "                                    ")
        console.log("************************************************")
        console.log("                                     ")
        console.log("         1 - Criar Produto             ")
        console.log("         2 - Listar Todos os produtos            ")
        console.log("         3 - Buscar produto pelo ID           ")
        console.log("         4 - Atulizar Dados do produto            ")
        console.log("         5 - Apagar Produto                       ")
        console.log("         6 - Buscar por Produto                              ")
        console.log("         0 - Sair                               ")
        console.log(colors.fg.yellowstrong,"\nEntre com a opção desejada: ",colors.fg.red)
        opcao = readlinesync.questionInt("") 

        if(opcao === 0){
            about();
            process.exit();
        }

        switch(opcao){
            case 1:
                console.log(colors.reset,"\nCadastrar Produto");

                console.log("\nDigite o nome do Produto")
                nome = readlinesync.question('');

                console.log("\nDigite o preço do Produto")
                preco = readlinesync.questionInt('R$');

                console.log("Escolha o tipo do Produto")
                tipo = readlinesync.keyInSelect(tipoProdutos,"", {cancel: false}) + 1;

                switch(tipo){
                    case 1: 
                      console.log("Digite o nome Generico do produto: ")
                      generico = readlinesync.question('');
                      produtos.criarProduto(new Medicamento(produtos.gerarId(),nome, tipo, preco, generico))
                        break;

                    case 2: 
                      console.log("Especifique o Cosmestico ")
                      fragancia = readlinesync.question('');
                      produtos.criarProduto(new Cosmeticos(produtos.gerarId(),nome, tipo, preco, fragancia))
                        break;
                }

            keyPress();
                break;

            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                console.log(colors.fg.green), produtos.listarTodos(), console.log(colors.reset);

            keyPress();
                break;

            case 3:
                console.log("\n\nConsultar dados do Produto pelo ID\n\n");

                console.log('Digite o ID do Produto: ')
                id = readlinesync.questionInt('')

                produtos.procuraPorProduto(id);

            keyPress();
                break;

            case 4:
                console.log("\n\nAtualizar dados do Produto\n\n");

                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt('');

                let produto = produtos.buscarNoArray(id);
                
                if(produto !== null){

                    console.log(`${colors.fg.whitestrong}Editar o produto ${colors.fg.red}${produto?.nome} ${colors.reset}`)
                    console.log("\nDigite o novo nome do Produto")
                    nome = readlinesync.question('');

                    console.log("Digite o novo preço")
                    preco = readlinesync.questionFloat('R$');

                    tipo = produto.tipo;
                    switch(tipo){
                        case 1:
                            console.log("Digite o novo nome do Generico do Medicameno: ")
                            generico = readlinesync.question(''); 
                            produtos.atualizar(new Medicamento(id,nome, tipo, preco, generico))
                            break;
                        case 2:
                            console.log("Digite o nova fragrância do Cosmedico:")
                            fragancia = readlinesync.question('');
                            produtos.atualizar(new Cosmeticos(id,nome, tipo, preco, fragancia))
                            break;
                    }
            }else{
                console.log("Produto não encontrada!")
            }

            keyPress();
                break;

            case 5:
                console.log("\n\nApagar um Produto\n\n");

                console.log("Digite o ID do Produto: ");
                id = readlinesync.questionInt('');
                

                produtos.deletar(id);

            keyPress();
                break;
                case 6:
                    console.log("\n\nConsulta pelo nome do produtos");
                
                console.log("\nDigite o nome do Produto:");
                nome = readlinesync.question('')

                produtos.procurarPorNome(nome);

                keyPress();
                break;

                default:
                console.log(colors.fg.red,"\nOPÇÃO INVÁLIDA!",colors.reset)
        }
        }
}


/* Função com os dados da pessoa desenvolvedora */
export function about(): void{

    console.log(colors.fg.gray,"************************************************")
    console.log(" Desenvolvido por: ")
    console.log(colors.fg.red,"Josadaque Ferreira ")
    console.log(colors.fg.gray,"github.com/josadack ")
    console.log("************************************************",colors.reset)
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();