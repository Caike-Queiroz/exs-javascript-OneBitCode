let pokemon = 'Charmander';

function evoluir(){
    pokemon = 'Charmelion';
}

// console.log(pokemon)
// evoluir()
// console.log(pokemon)

function criarAnimal(){
    let animal = 'Gato';
}

// criarAnimal()
// console.log(animal)


function avaliarNota(nota){
    if(nota > 60){
        var aprovado = true;
        let situacao = 'Aprovado';
    } else {
        var aprovado = false;
        let situacao = 'Reprovado';
    }

    console.log(nota);
    console.log(aprovado);
    console.log(situacao); // Gera erro
}


// avaliarNota(83);
// avaliarNota(49);

function ola(){
    var texto = 'Olá, Mundo!';
}

// console.log(texto);

// Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto
console.log(nome)
console.log(sobrenome)
var nome = "Isaac" 
let sobrenome = "Pontes"
console.log(nome)
console.log(sobrenome)

// o hoisting só funciona para o VAR, o hoisting é como se a
// a variável subisse para o topo do aqruivo, porém 
// ele não atribui valor (undefined)