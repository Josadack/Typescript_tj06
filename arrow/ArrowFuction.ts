
let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//tradicional
for(let numero of numeros){
    console.log(numero)
}

//Arrow Fuction
numeros.forEach(numero => console.log(numero))

//Fazer o numero elevado ao quadrado
numeros.forEach(numero => console.log(numero*numero))

//Numero listar somente pares
numeros.forEach(numero => {
    if (numero % 2 === 0) 
        console.log(numero) 
    })