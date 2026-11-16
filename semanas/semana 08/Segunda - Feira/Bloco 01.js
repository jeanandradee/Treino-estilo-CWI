/* B1 — Q1 — Análise de produtos
Uma loja precisa analisar seu estoque.
A função recebe um array de produtos.
Cada produto possui:
- nome
- quantidade
- preco
Regras:
1. Considerar produtos com quantidade maior que zero.
2. Contar quantos produtos possuem estoque disponível.
3. Calcular o valor total do estoque
   (quantidade * preco de cada produto).
4. Encontrar o produto com maior valor total em estoque.
Retorne um objeto contendo:
- totalProdutos
- valorEstoque
- produtoMaiorEstoque
Se não houver produtos disponíveis,
produtoMaiorEstoque deve ser null.
*/

function analisarProdutos(produtos) {
  const produtosDisponiveis = produtos.filter((p) => p.quantidade > 0);

  const valorEstoque = produtosDisponiveis.reduce(
    (acc, p) => acc + p.quantidade * p.preco,
    0,
  );

  const produtoMaiorEstoque =
    produtosDisponiveis.length === 0
      ? null
      : produtosDisponiveis.reduce((maior, atual) => {
          return atual.quantidade * atual.preco > maior.quantidade * maior.preco
            ? atual
            : maior;
        }).nome;

  return {
    totalProdutos: produtosDisponiveis.length,
    valorEstoque,
    produtoMaiorEstoque,
  };
}

console.log(
  analisarProdutos([
    { nome: "Teclado", quantidade: 5, preco: 100 },
    { nome: "Mouse", quantidade: 10, preco: 50 },
    { nome: "Monitor", quantidade: 0, preco: 800 },
    { nome: "Headset", quantidade: 3, preco: 200 },
  ]),
);

// Resultado esperado:
//
// {
//   totalProdutos: 3,
//   valorEstoque: 1600,
//   produtoMaiorEstoque: "Headset"
// }

/* Q2 — Controle de funcionários
Uma empresa precisa organizar seus funcionários.
Cada funcionário possui:
- nome
- idade
- setor
- ativo
Regras:
1. Considerar somente funcionários ativos.
2. Contar quantos funcionários ativos existem.
3. Calcular a idade média dos funcionários ativos.
4. Identificar os setores dos funcionários ativos,
   sem repetir setores.
Retorne:
- totalAtivos
- idadeMedia
- setores

Se não houver funcionários ativos,
idadeMedia deve ser zero.
*/

function analisarFuncionarios(funcionarios) {
  const funcionariosAtivos = funcionarios.filter((f) => f.ativo);

  const totalAtivos = funcionariosAtivos.length;

  const idadeMedia =
    totalAtivos === 0
      ? 0
      : funcionariosAtivos.reduce((acc, f) => acc + f.idade, 0) / totalAtivos;

  const setores = [...new Set(funcionariosAtivos.map((f) => f.setor))];

  return {
    totalAtivos,
    idadeMedia,
    setores,
  };
}

console.log(
  analisarFuncionarios([
    { nome: "Ana", idade: 25, setor: "TI", ativo: true },
    { nome: "Carlos", idade: 30, setor: "RH", ativo: false },
    { nome: "Pedro", idade: 35, setor: "TI", ativo: true },
    { nome: "Maria", idade: 40, setor: "Vendas", ativo: true },
  ]),
);

// Resultado esperado:
//
// {
//   totalAtivos: 3,
//   idadeMedia: 33.333333333333336,
//   setores: ["TI", "Vendas"]
// }

/* Q3 — Análise de palavras
Crie uma função que recebe uma frase.
Regras:
1. Remover espaços desnecessários no início e no final.
2. Contar quantas palavras existem na frase.
3. Identificar a maior palavra.
4. A comparação deve ignorar maiúsculas e minúsculas.
5. Se houver palavras com o mesmo tamanho máximo,
   considerar a primeira encontrada.
Retorne:
- totalPalavras
- maiorPalavra
Se a frase estiver vazia ou possuir apenas espaços,
retorne totalPalavras igual a zero e maiorPalavra
como null.
*/

function analisarFrase(frase) {
  const fraseLimpa = frase.trim();

  const palavras = fraseLimpa === "" ? [] : fraseLimpa.split(/\s+/);

  const totalPalavras = palavras.length;

  const maiorPalavra =
    totalPalavras === 0
      ? null
      : palavras.reduce((maior, atual) => {
          return atual.length > maior.length ? atual : maior;
        });

  return {
    totalPalavras,
    maiorPalavra,
  };
}

console.log(analisarFrase(" JavaScript é muito interessante "));

// Resultado esperado:
//
// {
//   totalPalavras: 4,
//   maiorPalavra: "interessante"
// }

/* Q4 — Monitoramento de notas
Uma escola precisa analisar as notas dos alunos.
A função recebe uma matriz de notas.
Cada linha representa um aluno e contém suas notas.
Regras:
1. Calcular a média geral de todas as notas.
2. Contar quantas notas são maiores ou iguais a 7.
3. Encontrar a menor nota registrada.
Retorne:
- mediaGeral
- notasAprovadas
- menorNota
Se não houver nenhuma nota registrada:
- mediaGeral deve ser zero.
- notasAprovadas deve ser zero.
- menorNota deve ser null.
*/

function analisarNotas(matriz) {
  const notas = matriz.flat();

  const totalNotas = notas.length;

  const mediaGeral =
    totalNotas === 0
      ? 0
      : notas.reduce((acc, nota) => acc + nota, 0) / totalNotas;

  const notasAprovadas = notas.filter((nota) => nota >= 7).length;

  const menorNota =
    totalNotas === 0
      ? null
      : notas.reduce((menor, atual) => {
          return atual < menor ? atual : menor;
        });

  return {
    mediaGeral,
    notasAprovadas,
    menorNota,
  };
}

console.log(
  analisarNotas([
    [8, 7, 9],
    [5, 6, 10],
    [7, 8, 4],
  ]),
);

// Resultado esperado:
//
// {
//   mediaGeral: 7.111111111111111,
//   notasAprovadas: 6,
//   menorNota: 4
// }
