import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Ciclista, Nadador, Corredor{


    pedalar(): void {
        console.log("Pedalando.....");
    }
  
    nadar(): void {
        console.log("Nadando.....");
    }
    aquecer(): void {
        console.log("Aquecendo.....");
    }
    correr(): void {
        console.log("Correndo.....");
    }
   
    public cansou(): void {
        console.log("Cansado.....");
    }

}