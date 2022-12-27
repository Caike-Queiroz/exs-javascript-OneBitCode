const palavra = prompt("Digite uma palavra, para identificarmos se a mesma é um palíndromo ou não: ");
let palavraInvertida = "";

// macarrao
// 01234567
for (let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida){
    console.log(`"${palavra}" é um palíndromo.`);
} else {
    console.log(`"${palavra}" não é um palíndromo.`);
}