export abstract class  Pessoa{

    private  _nome:string;

    constructor(nome: string) {
        this._nome = nome
        
    }

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}
    public abstract cansou(): void;

    public visualizar(){
        console.log("*****************")
        console.log("Dados pessoa")
        console.log("*****************")
        console.log(` ${this._nome}`)
    }

}