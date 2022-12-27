const atacante = String(prompt("Qual é o nome do personagem atacante ?"));
const poderDeAtaque = Number(prompt("Qual é o seu poder de ataque ?"));

const defensor = String(prompt("Qual é o nome do personagem defensor ?"));
let pontosDeVida = Number(prompt("Quantos pontos de vida ele possui ?"));
const poderDeDefesa = Number(prompt("Qual é o seu poder de defesa ?"));
let possuiEscudo = prompt("Possui escudo ? S/N").toUpperCase();

if (possuiEscudo === 'S') {
    possuiEscudo = true;
} else {
    possuiEscudo = false;
}

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === false) {
    danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === true) {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado;

console.log(`${atacante} causou ${danoCausado} pontos de dano em ${defensor}`);

console.log(`${atacante}\nPoder de ataque: ${poderDeAtaque}`);
console.log(`${defensor}\nPontos de vida: ${pontosDeVida}\nPoder de defesa: ${poderDeDefesa}\nPossui escudo: ${possuiEscudo}`)