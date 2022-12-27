let opcao;

do {
    opcao = Number(prompt("Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Divisão\n4 - Multiplicação\n5 - Encerrar programa"));
    
    switch (opcao){
        case 1:
            console.log("A opção escolhida foi a primeira.");
            break;
        case 2:
            console.log("A opção escolhida foi a segunda.");
            break;
        case 3:
            console.log("A opção escolhida foi a terceira.");
            break;
        case 4:
            console.log("A opção escolhida foi a quarta.");
            break;
        default:
            continue;
    }
} while (opcao !== 5)

console.log("Encerrando ...");