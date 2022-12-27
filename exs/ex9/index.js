let num = Number(prompt("Digite o número que você deseja saber a tabuada de 1 a 20: "));

console.log("ROBÔ DA TABUADA");
console.log(`Resultado da tabuada de ${num}: `)
for (i = 1; i <= 20; i++){
    console.log(`${num} X ${i} = ${num * i}`);
}