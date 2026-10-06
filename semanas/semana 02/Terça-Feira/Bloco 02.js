/* ============================================================
1️⃣ AGRUPAMENTO DE VALORES
Dado um array de números, crie um NOVO objeto contendo:
{
  menores: [],
  maioresOuIguais: []
}
Regras:
- valores menores que 10 vão para "menores"
- valores maiores ou iguais a 10 vão para "maioresOuIguais"
- preserve a ordem original dentro de cada grupo
- não altere o array original
============================================================ */

function agruparValores(nums) {
  let menores = [];
  let maioresOuIguais = [];

  for (let num of nums) {
    if (num < 10) {
      menores.push(num);
    } else {
      maioresOuIguais.push(num);
    }
  }

  return {
    menores,
    maioresOuIguais
  }
}

console.log(agruparValores([5, 12, 3, 20, 10]));
// { menores: [5, 3], maioresOuIguais: [12, 20, 10] }

console.log(agruparValores([10, 10, 10]));
// { menores: [], maioresOuIguais: [10, 10, 10] }

console.log(agruparValores([1, 2, 3]));
// { menores: [1, 2, 3], maioresOuIguais: [] }

console.log(agruparValores([50, 2, 30, 7, 9]));
// { menores: [2, 7, 9], maioresOuIguais: [50, 30] }

console.log(agruparValores([]));
// { menores: [], maioresOuIguais: [] }

console.log(agruparValores([9, 10, 11, 8]));
// { menores: [9, 8], maioresOuIguais: [10, 11] }

/* ============================================================
2️⃣ AJUSTE DE PREÇOS
Dado um array de produtos:
{
  nome,
  preco
}
Crie um NOVO array.
Regras:
- produtos com preço menor que 100 recebem aumento de 10%
- produtos com preço maior ou igual a 100 não sofrem alteração
- mantenha o mesmo nome
- preserve a ordem
- o preço final deve continuar sendo um número
- não altere os objetos originais
============================================================ */

function ajustarPrecos(produtos) {
  let resultado = [];

  for (let { nome, preco } of produtos) {
    if (preco < 100) {
      preco += preco * 0.1;
    }

    resultado.push({nome , preco});
  }

  return resultado;
}

console.log(ajustarPrecos([{nome: "A", preco: 50}, {nome: "B", preco: 100}]));
// [ {nome: "A", preco: 55}, {nome: "B", preco: 100} ]

console.log(ajustarPrecos([{nome: "Mouse", preco: 80}, {nome: "Teclado", preco: 150}]));
// [ {nome: "Mouse", preco: 88}, {nome: "Teclado", preco: 150} ]

console.log(ajustarPrecos([{nome: "A", preco: 99}, {nome: "B", preco: 100}, {nome: "C", preco: 101}]));
// [ {nome: "A", preco: 108.9}, {nome: "B", preco: 100}, {nome: "C", preco: 101} ]

console.log(ajustarPrecos([{nome: "Livro", preco: 10}]));
// [ {nome: "Livro", preco: 11} ]

console.log(ajustarPrecos([]));
// []

console.log(ajustarPrecos([{nome: "A", preco: 0}, {nome: "B", preco: 200}]));
// [ {nome: "A", preco: 0}, {nome: "B", preco: 200} ]

/* ============================================================
3️⃣ RESUMO DE TEXTO
Dado um array de palavras, retorne um objeto:
{
  quantidade,
  maiorPalavra,
  menorPalavra
}
Regras:
- "quantidade" = número total de palavras
- "maiorPalavra" = palavra com maior quantidade de caracteres
- "menorPalavra" = palavra com menor quantidade de caracteres
- em caso de empate, mantenha a PRIMEIRA palavra encontrada
- se o array estiver vazio, retorne:
  {
    quantidade: 0,
    maiorPalavra: null,
    menorPalavra: null
  }

============================================================ */

function resumirPalavras(palavras) {
  let quantidade = palavras.length;
  let maiorPalavra = null;
  let menorPalavra = null;

  for (let palavra of palavras) {
    if (maiorPalavra === null || palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }

    if (menorPalavra === null || palavra.length < menorPalavra.length) {
      menorPalavra = palavra;
    }
  }

  return {
    quantidade,
    maiorPalavra,
    menorPalavra
  }
}

console.log(resumirPalavras(["casa", "computador", "sol", "janela"]));
// { quantidade: 4, maiorPalavra: "computador", menorPalavra: "sol" }

console.log(resumirPalavras(["abc", "def", "gh"]));
// { quantidade: 3, maiorPalavra: "abc", menorPalavra: "gh" }

console.log(resumirPalavras(["teste", "outro", "final"]));
// { quantidade: 3, maiorPalavra: "teste", menorPalavra: "teste" }

console.log(resumirPalavras(["javascript"]));
// { quantidade: 1, maiorPalavra: "javascript", menorPalavra: "javascript" }

console.log(resumirPalavras([])); // { quantidade: 0, maiorPalavra: null, menorPalavra: null }

console.log(resumirPalavras(["aa", "bbbb", "cc", "dddd"]));
// { quantidade: 4, maiorPalavra: "bbbb", menorPalavra: "aa" }