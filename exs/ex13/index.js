const imoveis = [];
let opcao = '';

do {
    opcao = prompt(`Bem vindo(a) ao Cadastro de Imóveis!\nImóveis Cadastrados: ${imoveis.length}\n\nEscolha uma das opções:\n1 - Salvar um novo imóvel\n2 - Mostrar todos os imóveis já salvos\n3 - Encerrar programa`);

    switch (opcao) {
        case '1':
            const imovel = {};
            imovel.proprietario = prompt('Nome do proprietário do imóvel: ');
            imovel.quartos = Number(prompt('Quantidade de quartos do imóvel: '));
            imovel.banheiros = Number(prompt('Quantidade de banheiros do imóvel: '));
            imovel.garagem = prompt('O imóvel possue garagem ? (S/N)').toUpperCase();

            const confirmacao = confirm(`Salvar este imóvel ?\n\nProprietário: ${imovel.proprietario}\nQuantidade de quartos: ${imovel.quartos}\nQuantidade de banheiros: ${imovel.banheiros}\nPossui garagem: ${imovel.garagem}`);

            if (confirmacao) {
                imoveis.push(imovel)
                alert('Imóvel salvo com sucesso!');
            } else {
                alert('Voltando o menu.');
            }

            break;
        case '2':
            for (let i = 0; i < imoveis.length; i++) {
                alert(`Imóvel ${i+1}\nProprietário: ${imoveis[i].proprietario}\nQuantidade de quartos: ${imoveis[i].quartos}\nQuantidade de banheiros: ${imoveis[i].banheiros}\nPossui garagem: ${imoveis[i].garagem}`);
            }
            break;
        case '3':
            alert('Encerrando...');
            break;
        default:
            alert('Opção Inválida');
    }
} while (opcao !== '3')