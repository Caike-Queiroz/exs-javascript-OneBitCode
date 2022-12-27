const name = window.prompt("Qual é o seu nome ?");
const lastName = window.prompt("Qual é o seu último sobrenome ?");
const campoEstudo = window.prompt("Qual o seu campo de estudo ?");
const anoNascimento = window.prompt("Qual é o seu ano de nascimento ?");

console.log(`Nome completo: ${name}` + ' ' + `${lastName}`);
console.log(`Campo de Estudo: ${campoEstudo}`);
console.log(`Idade: ${2022 - anoNascimento} anos`);