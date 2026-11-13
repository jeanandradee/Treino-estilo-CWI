/* B1 — Lógica Aplicada
Questão 1 — Nome dos meses
Crie uma função que recebe um número inteiro de 1 a 12
e retorna o nome correspondente ao mês do ano.
O nome deve ser retornado em português, com a primeira
letra maiúscula.
Exemplos:
3  -> "Março"
12 -> "Dezembro"
6  -> "Junho"
*/

function mesNome(numero) {
  const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  return (nomesMeses[numero - 1]);
}

console.log(mesNome(3));  // "Março"
console.log(mesNome(12)); // "Dezembro"
console.log(mesNome(6));  // "Junho"
console.log(mesNome(1));  // "Janeiro"

/* Questão 2 — Controle de Estoque
Uma loja possui uma lista de produtos.
Cada produto contém:
- nome
- quantidade
- minimo
Crie uma função que recebe essa lista e retorna
um array contendo os nomes dos produtos que precisam
ser reabastecidos.
Um produto precisa ser reabastecido quando sua
quantidade for menor ou igual ao mínimo.
A ordem dos nomes deve ser a mesma da lista original.
*/

function verificarEstoque(produtos) {
  return produtos.filter(p => p.quantidade <= p.minimo).map(p => p.nome);
}

console.log(verificarEstoque([
  { nome: "Mouse", quantidade: 5, minimo: 5 },
  { nome: "Teclado", quantidade: 10, minimo: 4 },
  { nome: "Monitor", quantidade: 2, minimo: 3 },
  { nome: "Headset", quantidade: 0, minimo: 2 }
]));
// ["Mouse", "Monitor", "Headset"]

/* Questão 3 — Análise de Notas
Uma escola precisa analisar as notas de uma turma.
Crie uma função que recebe um array de notas
e retorna um objeto contendo:
- aprovados: quantidade de notas maiores ou iguais a 7.
- reprovados: quantidade de notas menores que 7.
- media: média de todas as notas.
Se o array estiver vazio, a média deverá ser 0.
*/

function analisarNotas(notas) {
  const aprovados = notas.filter(n => n >= 7).length;

  const reprovados = notas.filter(n => n < 7).length;

  const media = notas.length > 0 ? 
    notas.reduce((acc, n) => acc + n ,0) / notas.length 
    : 0;

  return {
    aprovados,
    reprovados,
    media
  }
}

console.log(analisarNotas([8, 5, 10, 6, 7])); // { aprovados: 3, reprovados: 2, media: 7.2 }
console.log(analisarNotas([4, 6, 5]));        // { aprovados: 0, reprovados: 3, media: 5 }
console.log(analisarNotas([]));               // { aprovados: 0, reprovados: 0, media: 0 }

/* Questão 4 — Busca de Funcionários
Uma empresa possui uma lista de funcionários.
Cada funcionário contém:
- nome
- departamento
- ativo
Crie uma função que recebe a lista e um departamento.
Retorne um array com os nomes dos funcionários
que atendem às duas condições:
1. Estão ativos.
2. Pertencem ao departamento informado.
A comparação do departamento deve ignorar
diferenças entre letras maiúsculas e minúsculas.
*/

function buscarFuncionarios(funcionarios, departamento) {
  return funcionarios.filter(f => f.departamento.toLowerCase() === departamento.toLowerCase() && f.ativo).map(f => f.nome);
}

console.log(buscarFuncionarios([
  { nome: "Ana", departamento: "TI", ativo: true },
  { nome: "Carlos", departamento: "RH", ativo: true },
  { nome: "Marina", departamento: "ti", ativo: false },
  { nome: "Pedro", departamento: "Ti", ativo: true }
], "ti"));
// ["Ana", "Pedro"]

/* Questão 5 — Relatório de Vendas
Uma empresa precisa analisar suas vendas.
Cada venda possui:
- vendedor
- valor
- status
Crie uma função que recebe um array de vendas
e retorna um objeto contendo:
- totalAprovadas: quantidade de vendas aprovadas.
- valorTotal: soma dos valores das vendas aprovadas.
- maiorVenda: maior valor entre as vendas aprovadas.
- vendedorMaiorVenda: nome do vendedor responsável
  pela maior venda aprovada.
REGRAS:
1. Somente vendas com status "aprovada" entram nos cálculos.
2. A comparação do status deve ignorar maiúsculas
   e minúsculas.
3. Se não existir nenhuma venda aprovada:
   - totalAprovadas deve ser 0.
   - valorTotal deve ser 0.
   - maiorVenda deve ser null.
   - vendedorMaiorVenda deve ser null.
4. Se houver empate na maior venda, considerar
   o primeiro vendedor encontrado.
5. Não modificar o array original.
*/

function gerarRelatorio(vendas) {
  const aprovadas = vendas.filter(
    v => v.status.toLowerCase() === "aprovada"
  );

  const totalAprovadas = aprovadas.length;

  const valorTotal = aprovadas.reduce(
    (acc, v) => acc + v.valor, 0
  );

  if (aprovadas.length === 0) {
    return {
      totalAprovadas: 0,
      valorTotal: 0,
      maiorVenda: null,
      vendedorMaiorVenda: null
    };
  }

  const maior = aprovadas.reduce((maior, venda) =>
    venda.valor > maior.valor ? venda : maior
  );

  return {
    totalAprovadas,
    valorTotal,
    maiorVenda: maior.valor,
    vendedorMaiorVenda: maior.vendedor
  };
}

console.log(gerarRelatorio([
  { vendedor: "Ana", valor: 150, status: "aprovada" },
  { vendedor: "Carlos", valor: 200, status: "pendente" },
  { vendedor: "Pedro", valor: 300, status: "APROVADA" },
  { vendedor: "Marina", valor: 100, status: "aprovada" },
  { vendedor: "João", valor: 300, status: "Aprovada" }
]));

// {
//   totalAprovadas: 4,
//   valorTotal: 850,
//   maiorVenda: 300,
//   vendedorMaiorVenda: "Pedro"
// }