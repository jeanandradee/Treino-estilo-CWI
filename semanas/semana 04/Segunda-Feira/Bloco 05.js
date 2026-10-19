/*
DESAFIO: Relatório de Vendas

Crie a função analisarVendas(vendas).

Cada venda é um objeto com:
- produto: nome do produto (string)
- quantidade: unidades vendidas (number)
- precoUnitario: preço de cada unidade (number)

A função deve retornar um objeto com:

- totalVendido: quantidade total de unidades vendidas.
- faturamento: soma do valor de todas as vendas.
- produtoMaisVendido: nome do produto com a maior quantidade vendida.
- quantidadeProdutos: quantidade de registros de venda recebidos.

REGRAS:
1. O faturamento deve ser calculado usando quantidade * precoUnitario.
2. Se houver empate na quantidade vendida, mantenha o produto que apareceu primeiro.
3. Se o array estiver vazio, retorne:
   {
     totalVendido: 0,
     faturamento: 0,
     produtoMaisVendido: null,
     quantidadeProdutos: 0
   }
4. Não altere o array original nem seus objetos.
5. O faturamento deve ser arredondado para duas casas decimais.
*/

function analisarVendas(vendas) {
  let totalVendido = 0.
  let faturamento = 0;
  let produtoMaisVendido = null;
  let quantidadeMaisVendido = 0;
  let quantidadeProdutos = 0;

  for (let { produto, quantidade, precoUnitario } of vendas) {
    totalVendido += quantidade;
    faturamento += quantidade * precoUnitario;
    quantidadeProdutos ++;

    if (produtoMaisVendido === null || quantidade > quantidadeMaisVendido) {
      quantidadeMaisVendido = quantidade;
      produtoMaisVendido = produto;
    }

  }

  return { totalVendido, faturamento, produtoMaisVendido, quantidadeProdutos };
}


console.log(analisarVendas([ { produto: "Teclado", quantidade: 3, precoUnitario: 50 },
 { produto: "Mouse", quantidade: 5, precoUnitario: 30 }, { produto: "Monitor", quantidade: 2, precoUnitario: 600 } ]));
// Esperado: { totalVendido: 10, faturamento: 1500, produtoMaisVendido: "Mouse", quantidadeProdutos: 3 }

console.log(analisarVendas([ { produto: "Caderno", quantidade: 4, precoUnitario: 12.50 },
 { produto: "Caneta", quantidade: 4, precoUnitario: 2.25 }]));
// Esperado: { totalVendido: 8, faturamento: 59, produtoMaisVendido: "Caderno", quantidadeProdutos: 2 }

console.log(analisarVendas([]));
// Esperado: { totalVendido: 0, faturamento: 0, produtoMaisVendido: null, quantidadeProdutos: 0 }