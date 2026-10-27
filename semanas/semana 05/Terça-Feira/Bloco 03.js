
/*
==================================================
DESAFIO 1 — CONTADOR DE CARACTERES
==================================================

Uma ferramenta deve contar quantas letras existem em cada texto.
Espaços não devem ser contabilizados.

A função deve retornar a quantidade de caracteres não
brancos de cada texto, preservando a ordem.
*/

function contarCaracteres(textos) {
  let resultado = [];

  for (let texto of textos) {
    let quantidade = 0;

    for (let caractere of texto) {
      // CORREÇÃO: verificar se o caractere não é espaço em branco.
      // Antes, !== " " ignorava apenas o espaço comum, não tabulações
      // ou quebras de linha. trim() não resolveria espaços internos.
      if (!/\s/.test(caractere)) {
        quantidade++;
      }
    }

    resultado.push(quantidade);
  }

  return resultado;
}

console.log("B3.1:", contarCaracteres([
  "Java Script",
  "CWI",
  " lógica "
]));
// Esperado: [10, 3, 6]


/*
==================================================
DESAFIO 2 — ATUALIZADOR DE PRODUTOS
==================================================

A função deve criar um novo array com o preço atualizado
de cada produto.

Regra:
- Se o produto estiver ativo, aumentar o preço em 10%.
- Se estiver inativo, manter o preço.
- Não modificar os objetos originais.

Cada produto possui { nome, preco, ativo }.
*/

function atualizarProdutos(produtos) {
  let resultado = [];

  for (let produto of produtos) {
    // CORREÇÃO: criar um novo objeto usando spread (...).
    // Antes, produto.preco = ... modificava o objeto original.
    let produtoAtualizado = { ...produto };

    if (produtoAtualizado.ativo) {
      produtoAtualizado.preco = produtoAtualizado.preco * 1.10;
    }

    // CORREÇÃO: adicionar a cópia, não o objeto original.
    resultado.push(produtoAtualizado);
  }

  return resultado;
}

const produtosTeste = [
  { nome: "Mouse", preco: 100, ativo: true },
  { nome: "Teclado", preco: 200, ativo: false }
];

console.log("B3.2:", atualizarProdutos(produtosTeste));
console.log("B3.2 — Originais:", produtosTeste);
// Esperado no resultado: Mouse 110, Teclado 200.
// Os objetos originais devem continuar com preços 100 e 200.


/*
==================================================
DESAFIO 3 — PRIMEIRA NOTA REPROVADA
==================================================

A função deve retornar o índice da primeira nota menor
que 5. Se nenhuma nota for menor que 5, retornar null.
*/

function encontrarNotaBaixa(notas) {
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 5) {
      return i;
    }

    // CORREÇÃO: o return null estava dentro do for.
    // Isso encerrava a função logo após verificar a primeira nota.
    // Colocamos o retorno depois do laço para verificar todas as notas.
  }

  return null;
}

console.log("B3.3:", encontrarNotaBaixa([8, 7, 3, 9]));
// Esperado: 2

console.log("B3.3 — Sem reprovação:", encontrarNotaBaixa([7, 8, 9]));
// Esperado: null


/*
==================================================
DESAFIO 4 — SOMA DAS BORDAS
==================================================

A função deve somar todos os elementos da borda de uma
matriz quadrada, sem contar nenhum elemento duas vezes.

Em uma matriz 1x1, o único elemento também é uma borda.
*/

function somarBordas(matriz) {
  let soma = 0;

  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      if (
        linha === 0 ||
        coluna === 0 ||
        linha === matriz.length - 1 ||
        coluna === matriz[linha].length - 1
      ) {
        // CORREÇÃO: faltava verificar a última coluna.
        // Antes, os elementos da direita não eram somados,
        // exceto quando também pertenciam à primeira ou última linha.
        // Usar uma única condição evita contar cantos duas vezes.
        soma += matriz[linha][coluna];
      }
    }
  }

  return soma;
}

console.log("B3.4:", somarBordas([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
// Esperado: 40


/*
==================================================
DESAFIO 5 — NORMALIZADOR DE USUÁRIOS
==================================================

A função deve retornar os nomes normalizados:
- Remover espaços das extremidades.
- Converter para letras minúsculas.
- Ignorar nomes vazios.
- Preservar a ordem dos nomes válidos.
*/

function normalizarUsuarios(nomes) {
  let resultado = [];

  for (let nome of nomes) {
    // CORREÇÃO: os métodos trim() e toLowerCase() retornam strings.
    // Eles não alteram a variável original automaticamente.
    // Antes, o resultado dessas operações era descartado.
    nome = nome.trim().toLowerCase();

    if (nome !== "") {
      resultado.push(nome);
    }
  }

  return resultado;
}

console.log("B3.5:", normalizarUsuarios([
  " Ana ",
  "BETO",
  "   ",
  " Caio "
]));
// Esperado: ["ana", "beto", "caio"]


/*
==================================================
DESAFIO 6 — COMPARADOR DE ESTOQUE
==================================================

A função deve retornar os nomes dos produtos cujo estoque
atual é menor que o estoque mínimo.

Cada produto possui:
{ nome, estoqueAtual, estoqueMinimo }
*/

function verificarEstoque(produtos) {
  let resultado = [];

  for (let produto of produtos) {
    // CORREÇÃO: a comparação estava invertida.
    // Antes, eram selecionados os produtos com estoque acima
    // do mínimo. O enunciado pede estoque ATUAL menor que o mínimo.
    if (produto.estoqueAtual < produto.estoqueMinimo) {
      resultado.push(produto.nome);
    }
  }

  return resultado;
}

console.log("B3.6:", verificarEstoque([
  { nome: "Mouse", estoqueAtual: 3, estoqueMinimo: 5 },
  { nome: "Teclado", estoqueAtual: 8, estoqueMinimo: 4 },
  { nome: "Monitor", estoqueAtual: 2, estoqueMinimo: 2 },
  { nome: "Cabo", estoqueAtual: 1, estoqueMinimo: 6 }
]));
// Esperado: ["Mouse", "Cabo"]
