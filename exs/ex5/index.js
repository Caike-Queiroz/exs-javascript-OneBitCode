let valor = Number(prompt("Digite um valor em metro(s): "));
const opcao = prompt("Escolha para qual unidade de medida o valor digitado anteriormente deve ser convertido: "
    + "\nmilímetro (mm)"
    + "\ncentímetro (cm)"
    + "\ndecímetro (dm)"
    + "\ndecâmetro (dam)"
    + "\nhectômetro (hm)"
    + "\nquilômetro (km)");


switch (opcao) {
    case "mm":
        // converterá para milímetro (mm)
        console.log(`Valor em metro(s): ${valor}`);
        valor = valor * 1000;
        console.log(`Valor em milímetro(s): ${valor}`);
        break;
    case "cm":
        // converterá para centímetro (cm)
        console.log(`Valor em metro(s): ${valor}`);
        valor = valor * 100;
        console.log(`Valor em centímetro(s): ${valor}`);
        break;
    case "dm":
        // converterá para decímetro (dm)
        console.log(`Valor em metro(s): ${valor}`);
        valor = valor * 10;
        console.log(`Valor em decímetro(s): ${valor}`);
        break;
    case "dam":
        // converterá para decâmetro (dam)
        console.log(`Valor em metro(s): ${valor}`);
        valor = valor / 10;
        console.log(`Valor em decâmetro(s): ${valor}`);
        break;
    case "hm":
        // converterá para hectômetro (hm)
        console.log(`Valor em metro(s): ${valor}`);
        valor = valor / 100;
        console.log(`Valor em hectômetro(s): ${valor}`);
        break;
    case "km":
        // converterá para quilômetro (km)
        console.log(`Valor em metro(s): ${valor}`);
        valor = valor / 1000;
        console.log(`Valor em quilômetro(s): ${valor}`);
        break;
    default:
        // Avisará que foi selecionada uma opção inválida
        console.log("Você digitou uma opção inválida");
        break;
}