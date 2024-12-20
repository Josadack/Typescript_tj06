import { Produtos } from "./Produtos";

export class Medicamento extends Produtos{

    private _generico:string;


	constructor(id: number, nome: string, tipo: number, preco: number, generico: string) {
        super(id, nome, tipo, preco)
		this._generico = generico;
	}

	public get generico(): string {
		return this._generico;
	}

	public set generico(value: string) {
		this._generico = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log('----------------------')
        console.log(`Generico: ${this._generico}`)
    }


}