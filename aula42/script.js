function dobro(x) {
    alert(`O dobro de ${x} é igual a ${x * 2}`);
}

// dobro(5);

function ola(name = 'mundo') {
    alert(`Olá ${name}!`);
}

// ola('Caike');

function soma(a, b) {
    alert(`Resultado da soma é : ${a + b}`);
}

// soma(7, 6);

function criarUsuario(nome, email, senha, tipo = 'admin') {
    const usuario = {
        nome, // nome: nome
        email, // email: email
        senha, // senha: senha
        tipo // tipo: tipo
    }

    console.log(usuario)
}

// console.log('Ordem certa: ');
// criarUsuario('Caike', 'emailCaike@email.com', '1234');
// console.log('Ordem errada: ');
// criarUsuario('emailCaike@email.com', 'Caike', '1234');

function novoUsuario(nome, tipo = 'admin', email, senha){
    const usuario = {
        nome, // nome: nome
        email, // email: email
        senha, // senha: senha
        tipo // tipo: tipo
    }

    console.log(usuario)
}


// criarUsuario('Caike', 'emailCaike@email.com', '1234');
// novoUsuario('Caike', 'emailCaike@email.com', '1234');

function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
    // ...
}

muitosParametros('Caike', '12357843', 'rua logo ali', '25/12/2022', 'emailCaike@email.com', 1234);

function objetosComoParametro(usuario){
    usuario.nome
    // ...
}

const dadosDoUsuario = {
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    endereco: '',
    aniversario: ''
}

objetosComoParametro(dadosDoUsuario)