let idade = window.prompt("Informe a sua idade: ");

if (idade >= 18) {
    console.log("Você é maior de idade");
} else if (idade > 12) {
    console.log("Você é menor de idade");
} else if (idade > 4) {
    console.log("Você é criança");
} else if (idade === null) {
    let idade = window.prompt("Informe a sua idade: ");
    if (idade >= 18) {
        console.log("Você é maior de idade");
    } else if (idade > 12) {
        console.log("Você é menor de idade");
    } else if (idade > 4) {
        console.log("Você é criança");
    }
}


// Operador Ternario

// const resultado = (6 === 6) ? "Verdadeiro" : "Falso";
// console.log(resultado)