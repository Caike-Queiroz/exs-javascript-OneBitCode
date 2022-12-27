const nomeTurista = String(prompt("Qual é o seu nome ?"));
let visitou = prompt("Já visitou alguma cidade ?").toUpperCase();
let quantidade = 0;
let cidades = [];

while (visitou === 'S') {
    quantidade += 1;
    cidades.push(prompt(`Qual é o nome da ${quantidade}° cidade que ${nomeTurista} visitou ?`));
    console.log(`A ${quantidade}° cidade visitada por ${nomeTurista} foi: ${cidades[quantidade - 1]}`);
    visitou = prompt("Já visitou alguma outra cidade ?").toUpperCase();
}

console.log(`${nomeTurista} visitou ${quantidade} cidade(s)`);
