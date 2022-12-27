const arr = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Leogolas', 'Gimli'];
console.log(arr);

// Adicionar Elementos ao final da array - push
arr.push('Boromir');
console.log(arr);

// Adicionar Elementos ao início da array - unshift
arr.unshift('Boromir');
console.log(arr);

// Remover Elementos ao final da array - pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// Remover elementos ao início da array - shift
ultimoElemento = arr.shift();
console.log(ultimoElemento);
console.log(arr);

// Pesquisar por um elemento - includes
const inclui = arr.includes('Gandalf');
console.log(inclui);

// Pesquisar um elemento por índice, retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. - indexOf 
const indice = arr.indexOf('Gandalf'); // 4
console.log(indice); 

// Cortar
// slice
const hobbits = arr.slice(0 , 4); // O índice final fica de fora
const outros = arr.slice(-4); // Índices negativos referenciam para começar do final da array
console.log(arr);
console.log(hobbits);
console.log(outros);

// Concatenar
// concat
const sociedade = hobbits.concat(outros, 'Boromir');
console.log(sociedade);

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf, o cinzento');
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os elementos
for (let i = 0; i < sociedade.length; i++){
    const elemento = sociedade[i];
    console.log(`${elemento} se encontra na posição ${i}.`);
}