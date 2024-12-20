


try{
    const resultado = converte("Abc");
    console.log(resultado);

}catch(error: any){
    if(error instanceof TypeError)
        console.error('você digitou um valor que não do tipo string')
    else
       console.error('\nErro Inesperado', error.message);
   
}finally{
    console.log("programa finalizado!")
}
export function converte(conteudo: any): string {
    return conteudo.toUpperCase();


}