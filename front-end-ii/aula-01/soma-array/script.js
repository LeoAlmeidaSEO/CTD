const numeros = [1,2,4,8];
let soma = 0;

console.log(numeros);

for (var i = 0; i<numeros.length; i++) {
    console.log(soma+= numeros[i])
}

// Utilizando reduce

// const numeros = [1,2,3,4];

// var soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0); 

// console.log(soma);