/*
Uma loja virtual precisa gerar um relatório dos pedidos
realizados pelos clientes.

Cada pedido possui:
- cliente: nome do cliente.
- produto: nome do produto.
- quantidade: quantidade comprada.
- preco: preço unitário.
- status: situação do pedido.

Crie uma função chamada gerarRelatorioPedidos()
que recebe um array de pedidos e retorna um objeto
com as seguintes informações:

1. totalPedidos:
Quantidade de pedidos com status "aprovado".
A comparação deve ignorar maiúsculas e minúsculas.

2. valorTotal:
Soma do valor de todos os pedidos aprovados.
O valor de cada pedido é quantidade * preco.

3. clientes:
Array contendo os nomes dos clientes que possuem
pelo menos um pedido aprovado.
Não deve haver nomes repetidos.

4. produtoMaisVendido:
Nome do produto com maior quantidade total vendida,
considerando somente pedidos aprovados.

5. quantidadeProdutosVendidos:
Soma das quantidades de todos os produtos
dos pedidos aprovados.

REGRAS IMPORTANTES:

- Pedidos pendentes ou cancelados devem ser ignorados.
- A comparação do status deve ignorar maiúsculas
  e minúsculas.
- Se não houver pedidos aprovados:
  totalPedidos deve ser 0;
  valorTotal deve ser 0;
  clientes deve ser [];
  produtoMaisVendido deve ser null;
  quantidadeProdutosVendidos deve ser 0.
- Se houver empate na quantidade vendida entre produtos,
  retorne qualquer um dos produtos empatados.
*/
function gerarRelatorioPedidos(pedidos) {
  const aprovados = pedidos.filter(
    p => p.status.toLowerCase() === "aprovado"
  );

  if (aprovados.length === 0) {
    return {
      totalPedidos: 0,
      valorTotal: 0,
      clientes: [],
      produtoMaisVendido: null,
      quantidadeProdutosVendidos: 0
    };
  }

  const totalPedidos = aprovados.length;

  const valorTotal = aprovados.reduce(
    (acc, p) => acc + (p.quantidade * p.preco), 0
  );

  const clientes = [...new Set(aprovados.map(p => p.cliente))];

  const quantidadeProdutosVendidos = aprovados.reduce((acc, p) => acc + p.quantidade, 0);

  const vendasPorProduto = {};

  for (let pedido of aprovados) {
    if (vendasPorProduto[pedido.produto] === undefined) {
      vendasPorProduto[pedido.produto] = 0;
    }

    vendasPorProduto[pedido.produto] += pedido.quantidade;
  }

  const produtoMaisVendido = Object.keys(vendasPorProduto).reduce(
    (maior, produto) =>
      vendasPorProduto[produto] > vendasPorProduto[maior]
        ? produto
        : maior
  );

  return {
    totalPedidos,
    valorTotal,
    clientes,
    produtoMaisVendido,
    quantidadeProdutosVendidos
  };
}

console.log(gerarRelatorioPedidos([
  { cliente: "Ana", produto: "Mouse", quantidade: 2, preco: 50, status: "aprovado" },
  { cliente: "Carlos", produto: "Teclado", quantidade: 1, preco: 100, status: "pendente" },
  { cliente: "Ana", produto: "Teclado", quantidade: 3, preco: 100, status: "APROVADO" },
  { cliente: "Pedro", produto: "Mouse", quantidade: 4, preco: 50, status: "Aprovado" },
  { cliente: "Maria", produto: "Monitor", quantidade: 1, preco: 800, status: "cancelado" },
  { cliente: "Carlos", produto: "Mouse", quantidade: 1, preco: 50, status: "aprovado" }
]));

/*
Resultado esperado:

{
  totalPedidos: 4,
  valorTotal: 600,
  clientes: ["Ana", "Pedro", "Carlos"],
  produtoMaisVendido: "Mouse",
  quantidadeProdutosVendidos: 10
}
*/

console.log(gerarRelatorioPedidos([
  { cliente: "João", produto: "Mouse", quantidade: 2, preco: 50, status: "pendente" },
  { cliente: "Maria", produto: "Teclado", quantidade: 1, preco: 100, status: "cancelado" }
]));

/*
Resultado esperado:

{
  totalPedidos: 0,
  valorTotal: 0,
  clientes: [],
  produtoMaisVendido: null,
  quantidadeProdutosVendidos: 0
}
*/