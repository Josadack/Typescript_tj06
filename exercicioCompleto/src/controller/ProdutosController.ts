import { Produtos } from "../model/Produtos";
import { ProdutosRepository } from "../repository/ProdutosRepository";
import { colors } from "../util/Cores";

export class ProdutosController implements ProdutosRepository{
  

    private listarProdutos = new Array<Produtos>();

    public numero: number = 0;


    procuraPorProduto(numero: number): void {
        const buscaProduto = this.buscarNoArray(numero);

        if(buscaProduto !== null){
              buscaProduto.visualizar();
         
        }else{
            console.log(colors.fg.red,"\nProduto não encontrada", colors.reset)
        }
    }


    listarTodos(): void {
       this.listarProdutos.forEach(produto => produto.visualizar() )
    }


    criarProduto(produto: Produtos): void {
        this.listarProdutos.push(produto);
        console.log(colors.fg.greenstrong,`Produto ${colors.fg.redstrong}${produto.nome}${colors.reset, colors.fg.greenstrong} cadastro com sucesso! `,colors.reset)
    }


    atualizar(produto: Produtos): void {
        const buscaConta = this.buscarNoArray(produto.id);

        if(buscaConta !== null){
             this.listarProdutos[this.listarProdutos.indexOf(buscaConta)] = produto;
             console.log(colors.fg.greenstrong,`Produto foi Atulizado para ${colors.fg.redstrong}${produto.nome}${colors.reset, colors.fg.greenstrong}  com sucesso!`, colors.reset);
         
        }else{
         console.log("\nProduto não encontrada")
        }
    }


    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
             this.listarProdutos.splice(this.listarProdutos.indexOf(buscaConta), 1)
             console.log(colors.bg.black, colors.fg.yellow,`Produto  foi DELETADO com sucesso!`,colors.reset);
           
         
        }else{
         console.log("\nProduto não encontrada")
        }
    }

    procurarPorNome(nome: string): void {
           //filtragem de dados
           let buscaPorNome = this.listarProdutos.filter(pd => 
            pd.nome.toUpperCase().includes(nome.toUpperCase())
         )
  
         //Listagem  dos dados
         if (buscaPorNome.length > 0) {  
            buscaPorNome.forEach(pd => {  
                pd.visualizar(); // Chama o método visualizar para cada produto encontrado  
            });  
        } else {  
            console.log("Produto Não encontrado"); // Mensagem se nenhum produto foi encontrado  
        } 
        
    }

    //Gerar ID
    public gerarId():number{
        return ++ this.numero;
    }

    public buscarNoArray(id: number):  Produtos | null{
        for(let produto of this.listarProdutos){
            if(produto.id === id)
                return produto;
        }
        return null;

    }
    
}