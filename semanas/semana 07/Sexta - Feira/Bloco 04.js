/* B4 — Desafios Integrados
Q1 — Relatório de Vendas
Uma empresa precisa gerar um relatório das vendas realizadas.
A função recebe um array de vendas. Cada venda possui:
- produto: nome do produto.
- valor: valor da venda.
- status: situação da venda.
Considere somente vendas com status "aprovado".
A comparação deve ignorar letras maiúsculas e minúsculas.
Retorne um objeto contendo:
- totalVendas: quantidade de vendas aprovadas.
- valorTotal: soma dos valores das vendas aprovadas.
- maiorVenda: maior valor entre as vendas aprovadas.
Se nenhuma venda for aprovada, os valores numéricos
devem ser 0.
*/

function gerarRelatorio(vendas) {
  const totalVendas = vendas.filter(venda => venda.status.toLowerCase() === "aprovado");

  const valorTotal = totalVendas.reduce((acc, v) => acc + v.valor ,0);

  const maiorVenda = totalVendas.length > 0
    ? Math.max(...totalVendas.map(v => v.valor))
    : 0;

  return {
    totalVendas: totalVendas.length,
    valorTotal,
    maiorVenda
  }
}

console.log(gerarRelatorio([
  { produto: "Mouse", valor: 100, status: "aprovado" },
  { produto: "Teclado", valor: 200, status: "pendente" },
  { produto: "Monitor", valor: 300, status: "APROVADO" },
  { produto: "Headset", valor: 150, status: "Aprovado" }
])); // { totalVendas: 3, valorTotal: 550, maiorVenda: 300 }

console.log(gerarRelatorio([ { produto: "Mouse", valor: 100, status: "cancelado" } ])); 
// { totalVendas: 0, valorTotal: 0, maiorVenda: 0 }

/* Q2 — Análise de Temperaturas
Uma estação meteorológica registra temperaturas
durante vários dias, organizadas em uma matriz.
Cada linha representa uma semana e cada número
representa a temperatura registrada em um dia.
Crie uma função que retorne um objeto contendo:
- maiorTemperatura: maior temperatura registrada.
- somaTemperaturas: soma de todas as temperaturas.
- diasQuentes: quantidade de temperaturas superiores a 30.
Atenção:
- Considere todas as linhas da matriz.
- Temperaturas iguais a 30 não entram em diasQuentes.
- Se não houver temperaturas registradas,
  maiorTemperatura deve ser null.
  somaTemperaturas e diasQuentes devem ser 0.
*/

function analisarClima(matriz) {
  const temperaturas = matriz.flat();

  const maiorTemperatura = temperaturas.length > 0
    ? Math.max(...temperaturas)
    : null;

  const somaTemperaturas = temperaturas.reduce(
    (acc, t) => acc + t, 0
  );

  const diasQuentes = temperaturas.filter(
    temp => temp > 30
  ).length;

  return {
    maiorTemperatura,
    somaTemperaturas,
    diasQuentes
  };
}

console.log(analisarClima([ [25, 32, 28], [35, 30, 22], [31, 27, 29] ]));
// { maiorTemperatura: 35, somaTemperaturas: 259, diasQuentes: 3 }

console.log(analisarClima([ [-5, -2], [-8, -1] ]));
// { maiorTemperatura: -1, somaTemperaturas: -16, diasQuentes: 0 }

console.log(analisarClima([ [], [] ]));
// { maiorTemperatura: null, somaTemperaturas: 0, diasQuentes: 0 }

/* Q3 — Sistema de Produtos em JSON
Uma loja recebe os dados de seus produtos
em formato JSON (uma string).
Cada produto possui:
- nome: nome do produto.
- preco: preço unitário.
- estoque: quantidade disponível.
- ativo: indica se o produto está ativo.
Crie uma função que recebe essa string JSON
e retorna um objeto contendo:
- produtosDisponiveis: array com os nomes dos produtos
  que estão ativos e possuem estoque maior que zero.
- quantidadeProdutos: quantidade de produtos disponíveis.
- valorEstoque: soma do valor total dos estoques
  dos produtos disponíveis (preço * quantidade).

Atenção:
- Considere somente produtos ativos com estoque maior que zero.
- Se nenhum produto atender às condições,
  retorne um array vazio e valores numéricos iguais a zero.
*/

function analisarProdutos(json) {
  const produtos = JSON.parse(json);

  const disponiveis = produtos.filter(
    p => p.ativo && p.estoque > 0
  );

  const produtosDisponiveis = disponiveis.map(
    p => p.nome
  );

  const quantidadeProdutos = disponiveis.length;

  const valorEstoque = disponiveis.reduce(
    (acc, p) => acc + (p.preco * p.estoque), 0
  );

  return {
    produtosDisponiveis,
    quantidadeProdutos,
    valorEstoque
  };
}

console.log(analisarProdutos(JSON.stringify([
  { nome: "Mouse", preco: 50, estoque: 10, ativo: true },
  { nome: "Teclado", preco: 100, estoque: 5, ativo: true },
  { nome: "Monitor", preco: 800, estoque: 0, ativo: true },
  { nome: "Headset", preco: 150, estoque: 3, ativo: false },
  { nome: "Webcam", preco: 200, estoque: 2, ativo: true }
])));
/*
{
  produtosDisponiveis: ["Mouse", "Teclado", "Webcam"],
  quantidadeProdutos: 3,
  valorEstoque: 1450
}
*/

console.log(analisarProdutos(JSON.stringify([
  { nome: "Mouse", preco: 50, estoque: 0, ativo: true },
  { nome: "Teclado", preco: 100, estoque: 5, ativo: false }
])));
/*
{
  produtosDisponiveis: [],
  quantidadeProdutos: 0,
  valorEstoque: 0
}
*/