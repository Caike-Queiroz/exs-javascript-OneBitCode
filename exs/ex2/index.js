const n1 = Number(window.prompt("Digite um valor númerico: "));
const n2 = Number(window.prompt("Digite um valor númerico: "));

// Soma
console.log(`Soma = ${n1 + n2}`);

// Subtração 
console.log(`Subtração = ${n1 - n2}`);

// Multiplicação
console.log(`Multiplicação = ${n1 * n2}`);

// Divisão
if (n1 > n2){
    console.log(`Divisão = ${n1 / n2}`);
} else if (n2 > n1){
    console.log(`Divisão = ${n2 / n1}`);
} else if (n1 === n2){
    console.log(`Divisão = 1`)
}

// Módulo
if (n1 > n2){
    console.log(`Módulo = ${n1 % n2}`);
} else if (n2 > n1){
    console.log(`Módulo = ${n2 % n1}`);
} else if (n1 === n2){
    console.log(`Módulo = 0`)
}