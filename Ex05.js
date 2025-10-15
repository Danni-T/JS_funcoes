
var carrinho = [];
/*Cria um array vazio para guardar os produtos*/

function adicionarProduto() {
    var nome = prompt("Digite o nome do produto:");
    var preco = parseFloat(prompt("Digite o preço do produto:"));

    // Cria um objeto com nome e preço
    var produto = { nome: nome, preco: preco };

    // Adiciona o produto ao array
    carrinho.push(produto);

    alert("Produto adicionado com sucesso!");
}

function calcularTotais(listaProdutos) {
    var subtotal = 0;

    // soma o preço de todos os produtos do array
    for (var i = 0; i < listaProdutos.length; i++) {
        subtotal += listaProdutos[i].preco;
    }

    var imposto = subtotal * 0.10;       // 10% de imposto
    var totalComImposto = subtotal + imposto;

    // retorna um objeto com todos os valores
    return {
        subtotal: subtotal,
        imposto: imposto,
        total: totalComImposto
    };
}

function exibirCarrinho(listaProdutos) {
    if (listaProdutos.length === 0) {
        alert("O carrinho está vazio!");
        return;
    }

    var texto = " Lista de produtos:\n\n";

    for (var i = 0; i < listaProdutos.length; i++) {
        texto += (i + 1) + " - " + listaProdutos[i].nome + 
                 " - R$ " + listaProdutos[i].preco.toFixed(2) + "\n";
    }

    var totais = calcularTotais(listaProdutos);

    texto += "\nSubtotal: R$ " + totais.subtotal.toFixed(2);
    texto += "\nImposto (10%): R$ " + totais.imposto.toFixed(2);
    texto += "\nTotal com imposto: R$ " + totais.total.toFixed(2);

    alert(texto);
}

function iniciar() {
    var opcao;

    do {
        opcao = prompt(
            "Escolha uma opção:\n" +
            "1 - Adicionar produto\n" +
            "2 - Ver carrinho\n" +
            "3 - Sair"
        );

        if (opcao == "1") {
            adicionarProduto();
        } else if (opcao == "2") {
            exibirCarrinho(carrinho);
        } else if (opcao != "3") {
            alert("Opção inválida!");
        }

    } while (opcao != "3");

    alert("Encerrando o programa...");
}

iniciar();
