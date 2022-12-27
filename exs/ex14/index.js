const pi = 3.14;

function areaTriangulo() {
    const base = Number(prompt(`Digite o valor da base do triângulo: `));
    const altura = Number(prompt(`Digite o valor da altura do triângulo: `));
    return (base * altura) / 2;
}

function areaRetangulo() {
    const base = Number(prompt(`Digite o valor da base do retângulo: `));
    const altura = Number(prompt(`Digite o valor da altura do retângulo: `));
    return base * altura;
}

function areaQuadrado() {
    const lado = Number(prompt(`Digite o valor do lado do quadrado: `));
    return lado ** 2;
}

function areaTrapezio() {
    const bMenor = Number(prompt(`Digite o valor da base menor do trapézio: `));
    const bMaior = Number(prompt(`Digite o valor da base maior do trapézio: `));
    const alturaTrapezio = prompt(`Digite o valor da altura do trapézio: `);
    return (bMenor + bMaior) * alturaTrapezio / 2;
}

function areaCirculo() {
    const r = Number(prompt(`Digite o valor do raio da circunferência: `));
    return pi * r ** 2;
}

function exibirMenu() {
    return prompt(`Calculadora Geométrica\n1 - Calcular área do triângulo\n2 - Calcular área do retângulo\n3 - Calcular área do quadrado\n4 - Calcular área do trapézio\n5 - Calcular área do círculo\n6 - Encerrar programa`);
}

function executar() {
    let opcao = '';

    do {
        opcao = exibirMenu();

        switch (opcao) {
            case '1':
                alert(`A área do triângulo é equivalente a: ${areaTriangulo()}`);
                break;
            case '2':
                alert(`A área do retângulo é equivalente a: ${areaRetangulo()}`);
                break;
            case '3':
                alert(`A área do quadrado é equivalente a: ${areaQuadrado()}`);
                break;
            case '4':
                alert(`A área do trapézio é equivalente a: ${areaTrapezio()}`);
                break;
            case '5':
                alert(`A área da circunferência é equivalente a: ${areaCirculo()}`);
                break;
            case '6':
                alert(`Encerrando ...`);
                break;
            default:
                alert('Opção Inválida !');
        }
    } while (opcao !== '6')
}


executar();