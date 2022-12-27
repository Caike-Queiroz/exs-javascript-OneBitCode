let saldo = Number(prompt("Informe seu saldo: "));
let deposito;
let saque;
let opcao;

do {
    opcao = Number(prompt(`Saldo: R$${saldo}\n1 - Depositar dinheiro\n2 - Sacar dinheiro\n3 - Sair do programa`))

    switch (opcao){
        case 1:
            deposito = Number(prompt("Qual será o valor do depósito ?"));
            saldo += deposito // saldo = saldo + deposito
            break;
        case 2:
            saque = Number(prompt("Qual será o valor do saque ?"));
            if (saldo < saque){
                alert("Operação Inválida\nMotivo: Valor do saque maior que o saldo");
                break;
            }
            saldo -= saque // saldo = saldo - saque
            break;
        case 3:
            continue; 
        default:
            alert("Entrada inválida");
    }
} while (opcao !== 3)

console.log("Encerrando programa ...");