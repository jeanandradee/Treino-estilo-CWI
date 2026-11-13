/* Uma empresa precisa gerar um relatório completo sobre suas vendas.
O sistema recebe um array de vendedores.
Cada vendedor possui:
- nome
- ativo
- vendas
Cada venda possui:
- valor
- status
- categoria
REGRAS:
1. Vendedores:
- Considerar somente vendedores ativos.
- Vendedores inativos devem ser completamente ignorados.
2. Vendas:
- Considerar somente vendas com status "aprovada".
- A comparação do status não deve diferenciar maiúsculas de minúsculas.
- Vendas pendentes ou canceladas não devem entrar nos cálculos.
3. Cálculos:
- Calcular o total de vendas aprovadas.
- Calcular o valor total das vendas aprovadas.
- Encontrar o maior valor de venda aprovada.
- Contar quantas vendas aprovadas possuem valor superior a 100.
4. Categorias:
- Identificar as categorias das vendas aprovadas.
- Não repetir categorias no resultado.
- Manter a ordem em que as categorias aparecem pela primeira vez.
5. Resultado:
Retornar um objeto contendo:
- totalVendas
- valorTotal
- maiorVenda
- vendasAcimaDe100
- categoriasEncontradas

6. Casos especiais:
- Se nenhuma venda for aprovada, maiorVenda deve ser null.
- Se não existirem vendedores ativos, os contadores e valores devem ser zero.
- O array original e seus objetos não podem ser modificados.

Implemente a função completa.
*/

function gerarRelatorioVendas(vendedores) {
  let totalVendas = 0;
  let valorTotal = 0;
  let maiorVenda = null;
  let vendasAcimaDe100 = 0;
  let categoriasEncontradas = [];

  for (let { nome, ativo, vendas } of vendedores) {

    if (ativo !== true) {
      continue;
    }

    for (let { valor, status, categoria } of vendas) {

      if (status.toLowerCase() !== "aprovada") {
        continue;
      }

      totalVendas++;
      valorTotal += valor;

      if (maiorVenda === null || valor > maiorVenda) {
        maiorVenda = valor;
      }

      if (valor > 100) {
        vendasAcimaDe100++;
      }

      if (!categoriasEncontradas.includes(categoria)) {
        categoriasEncontradas.push(categoria);
      }
    }
  }

  return {
    totalVendas,
    valorTotal,
    maiorVenda,
    vendasAcimaDe100,
    categoriasEncontradas
  };
}

console.log(gerarRelatorioVendas([
  {
    nome: "Ana",
    ativo: true,
    vendas: [
      { valor: 150, status: "aprovada", categoria: "Eletrônicos" },
      { valor: 80, status: "pendente", categoria: "Móveis" },
      { valor: 200, status: "APROVADA", categoria: "Móveis" }
    ]
  },
  {
    nome: "Carlos",
    ativo: false,
    vendas: [
      { valor: 500, status: "aprovada", categoria: "Eletrônicos" }
    ]
  },
  {
    nome: "Marina",
    ativo: true,
    vendas: [
      { valor: 120, status: "Aprovada", categoria: "Roupas" },
      { valor: 90, status: "cancelada", categoria: "Eletrônicos" },
      { valor: 110, status: "aprovada", categoria: "Eletrônicos" }
    ]
  }
]));

// Resultado esperado:
//
// {
//   totalVendas: 4,
//   valorTotal: 580,
//   maiorVenda: 200,
//   vendasAcimaDe100: 4,
//   categoriasEncontradas: [
//     "Eletrônicos",
//     "Móveis",
//     "Roupas"
//   ]
// }