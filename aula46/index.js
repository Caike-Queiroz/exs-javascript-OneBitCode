function dividir(num){
    console.log(num);

    if (num % 2 === 0){
        if (num === 2){
            return num;
        }
        dividir(num / 2);
    } else {
        return num;
    }
}

// dividir(16);


// !5 = 5 * 4 * 3 * 2 * 1 --> 120
function fatorial(num){
    console.log(`Número: ${num}`);
    if (num === 0){
        // caso base
        return 1;
    } else if (num === 1){
        return 1;
    } else {
        console.log(`${num} * !${num - 1}`);
        return num * fatorial(num - 1);
    }
}

console.log(fatorial(3));