function calcular(a, b, operacao) {
    console.log('Realizando uma operação.');
    const resultado = operacao(a, b); // somar (3, 5)
    return resultado;
}

// Calcular é uma High Order Function

function somar(x, y) {
    console.log('Realizando uma soma!');
    return x + y;
}

function subtracao(x, y) {
    console.log('Realizando uma subtração!');
    return x - y;
}

function multiplicacao(x, y) {
    console.log('Realizando uma multiplicação!');
    return x * y;
}

console.log(`O resultado da soma é ${calcular(3, 5, somar)}`);
console.log(`O resultado da subtração é ${calcular(10, 4, subtracao)}`);
console.log(`O resultado da multiplicação é ${calcular(3, 5, multiplicacao)}`);
console.log(`O resultado da divisão é ${calcular(64, 8, function(x, y) {
    console.log('Realizando uma divisao!');
    if (x > y) {
        return x / y;
    } else if (y > x) {
        return y / x;
    } else if (x === y) {
        return 1;
    }
}
)}`);


function exibirElemento(elemento, indice, array){
    console.log({
        elemento, // elemento: elemento
        indice, // indice: indice
        array // array: array
    })
}

const lista = ['Maça', 'Banana', 'Laranja', 'Limão'];

for (let i = 0; i < lista.length ; i++){
    exibirElemento(lista[i], i , lista);
}

lista.forEach(exibirElemento)

lista.forEach(function (elemento, indice, array){
    console.log({
        elemento,
        indice, 
        array
    })
})