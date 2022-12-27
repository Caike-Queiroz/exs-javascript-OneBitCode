// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
//     - Listar vagas disponíveis
//     - Criar um nova vaga
//     - Visualizar uma vaga
//     - Inscrever um candidato em uma vaga
//     - Excluir uma vaga
//     - Sair
// - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

const vagas = [];

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vagaAtual, indice) {
        // 1. nome, (X candidatos)
        textoFinal += indice + '. ';
        textoFinal += vagaAtual.nome;
        textoFinal += ' (' + vagaAtual.candidatos.length + ' candidatos)\n'
        return textoFinal;
    }, '')

    alert(vagasEmTexto);
}


function novaVaga() {
    const nome = prompt('Informe um nome para a vaga: ');
    const descricao = prompt('Informe uma descrição para a vaga: ');
    const dataLimite = prompt('Informe uma data limite: (dd/mm/aaaa)');

    const confirmacao = confirm(
        'Deseja criar uma nova vaga com essas informações ?\n' +
        `Nome: ${nome}\nDescrição: ${descricao}\nData Limite: ${dataLimite}`
    )

    if (confirmacao) {
        const novaVaga = {
            nome, // nome: nome
            descricao, // descricao: descricao
            dataLimite, // dataLimite: dataLimite
            candidatos: []
        }
        vagas.push(novaVaga);
        alert('Vaga criada.');
    }
}

function exibirVaga() {
    const indice = prompt('Informe o índice da vaga que deseja exibir: ');
    if (indice >= vagas.length || indice < 0) {
        alert('Índice inválido')
        return
    }
    const vaga = vagas[indice];

    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + `\n - ${candidato}`;
    }, '');

    alert(`Vaga n°${indice}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData limite: ${vaga.dataLimite}\nQuantidade de candidatos: ${vaga.candidatos.length}\nCandidatos inscritos: ${candidatosEmTexto}`);
}

function inscreverCandidato() {
    const candidato = prompt('Informe o nome do candidato(a): ');
    const indice = prompt('Informe o índice da vaga para qual o(a) candidato(a) deseja se inscrever: ');
    const vaga = vagas[indice];

    const confirmacao = confirm(
        `Deseja inscrever o candidato ${candidato} na vaga ${indice} ?\n` +
        `Nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`
    );

    if (confirmacao) {
        vaga.candidatos.push(candidato);
        alert('Inscrição realizada');
    }
}

function excluirVaga() {
    const indice = prompt('Informe o índice da vaga que se deseja excluir: ');
    const vaga = vagas[indice];

    const confirmacao = confirm(
        `Tem certeza que deseja excluir a vaga ${indice} ?\n` +
        `Nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\nData Limite: ${vaga.dataLimite}`
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert('Vaga excluída.')
    }
}

function exibirMenu() {
    const opcao = prompt('Cadastro de Vagas de Emprego\n\nEscolha uma funcionalidade:\n1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma nova vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair');

    return opcao;
}


function executar() {
    let opcao = '';

    do {
        opcao = exibirMenu();

        switch (opcao) {
            case '1':
                listarVagas();
                break;
            case '2':
                novaVaga();
                break;
            case '3':
                exibirVaga();
                break;
            case '4':
                inscreverCandidato();
                break;
            case '5':
                excluirVaga();
                break;
            case '6':
                alert('Encerrando ...');
                break;
            default:
                alert('Opção Inválida');
        }
    } while (opcao !== '6')
}

executar();