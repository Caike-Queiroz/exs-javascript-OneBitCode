let velocidade = 0;

do {
    console.log(`A velocidade do veículo é ${velocidade}km/h`);
    velocidade -= 20;
} while (velocidade > 0)

console.log(`Velocidade final: ${velocidade}km/h`);