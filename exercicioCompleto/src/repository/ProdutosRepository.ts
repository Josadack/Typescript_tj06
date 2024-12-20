import { Produtos } from "../model/Produtos";

export interface ProdutosRepository{

    procuraPorProduto(numero: number):void;
    listarTodos():void;
    criarProduto(produto: Produtos):void;
    atualizar(produto: Produtos): void;
    deletar(numero:number):void;
    procurarPorNome(nome: string):void;
    
}