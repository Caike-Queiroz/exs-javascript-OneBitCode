let carro1 = String(window.prompt("Qual é o nome do primeiro carro ?"));
let velocidade1 = Number(window.prompt(`Qual é a velocidade do(da) ${carro1} ?`));

let carro2 = String(window.prompt("Qual é o nome do segundo carro ?"));
let velocidade2 = Number(window.prompt(`Qual é a velocidade do(da) ${carro2}?`));

if (velocidade1 > velocidade2){
    console.log(`O ${carro1} é mais rápido que o ${carro2}.`);
} else if (velocidade2 > velocidade1){
    console.log(`O ${carro2} é mais rápido que o ${carro1}.`);
} else {
    console.log("Os dois carros possuem a mesma velocidade.");
}