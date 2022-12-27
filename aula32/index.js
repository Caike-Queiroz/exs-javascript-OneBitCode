const listaCompras = ["Açucar", false];
console.log(listaCompras);

listaCompras[0] = 'Arroz';
listaCompras[1] = 'Feijão';
listaCompras[2] = 7;
listaCompras[5] = "Batata";


console.log(listaCompras);
console.log(listaCompras[10]);
// O Js permite que referenciemos posições que não existem, só que ele retorna undefined