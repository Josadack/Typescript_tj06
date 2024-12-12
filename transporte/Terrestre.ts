import { Transporte } from "./Transporte";

export class Terrestre extends Transporte{

    private _numeroRoda: number;
    private _velocidade: number;


	constructor(capacidade: number,numeroRoda: number, velocidade: number) {
        super(capacidade);
		this._numeroRoda = numeroRoda;
		this._velocidade = velocidade;
	}


	public get numeroRoda(): number {
		return this._numeroRoda;
	}


	public get velocidade(): number {
		return this._velocidade;
	}

 
	public set numeroRoda(value: number) {
		this._numeroRoda = value;
	}

	public set velocidade(value: number) {
		this._velocidade = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Número de rodas: ${this._numeroRoda}`)
        console.log(`Valocidade: ${this._velocidade}`)
    }

}