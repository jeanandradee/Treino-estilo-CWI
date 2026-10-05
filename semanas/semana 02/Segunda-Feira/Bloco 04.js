/* ============================================================
1️⃣ PRIMEIRO TRECHO CRESCENTE

Dado um array nums, encontre o primeiro trecho consecutivo
em que os valores começam a crescer.

O trecho começa quando um número é MAIOR que o anterior.

A partir daí, conte quantos elementos consecutivos continuam
crescendo.

Retorne um objeto:

{
  inicio,
  tamanho
}

"inicio" é o índice do primeiro elemento do trecho.

Se não existir nenhum crescimento, retorne:

{
  inicio: -1,
  tamanho: 0
}

Exemplo:

[4, 7, 9, 3, 5]

4 → 7 → 9 cresce.

Resultado:
{
  inicio: 1,
  tamanho: 3
}

A contagem inclui o primeiro elemento do trecho.
============================================================ */

function primeiroTrechoCrescente(nums) {
  // faça aqui
}

console.log(primeiroTrechoCrescente([4, 7, 9, 3, 5]));
// {inicio: 1, tamanho: 3}

console.log(primeiroTrechoCrescente([10, 5, 8, 12, 15]));
// {inicio: 1, tamanho: 4}

console.log(primeiroTrechoCrescente([9, 7, 5, 3]));
// {inicio: -1, tamanho: 0}

console.log(primeiroTrechoCrescente([2, 5]));
// {inicio: 0, tamanho: 2}

console.log(primeiroTrechoCrescente([3, 3, 4, 6]));
// {inicio: 1, tamanho: 3}

console.log(primeiroTrechoCrescente([]));
// {inicio: -1, tamanho: 0}


/* ============================================================
2️⃣ POSIÇÃO DO VALOR MAIS PRÓXIMO

Dado um array nums e um valor alvo, encontre o elemento cuja
distância até o alvo seja a menor.

Retorne:

{
  valor,
  posicao
}

A distância deve ser calculada usando valor absoluto.

Se houver empate, mantenha a PRIMEIRA ocorrência.

Exemplo:

nums = [10, 14, 18]
alvo = 16

14 está a 2 de distância.
18 está a 2 de distância.

Empate → fica com 14, pois aparece primeiro.

Resultado:
{
  valor: 14,
  posicao: 1
}

Se o array estiver vazio, retorne:

{
  valor: null,
  posicao: -1
}
============================================================ */

function valorMaisProximo(nums, alvo) {
  // faça aqui
}

console.log(valorMaisProximo([10, 14, 18], 16));
// {valor: 14, posicao: 1}

console.log(valorMaisProximo([5, 20, 30], 24));
// {valor: 20, posicao: 1}

console.log(valorMaisProximo([100, 40, 70], 60));
// {valor: 70, posicao: 2}

console.log(valorMaisProximo([8, 3, 12], 8));
// {valor: 8, posicao: 0}

console.log(valorMaisProximo([1, 9, 20], 15));
// {valor: 9, posicao: 1}

console.log(valorMaisProximo([], 10));
// {valor: null, posicao: -1}


/* ============================================================
3️⃣ MAIOR BLOCO DE VALORES IGUAIS

Dado um array nums, encontre o maior bloco de valores iguais
que aparecem CONSECUTIVAMENTE.

Retorne:

{
  valor,
  tamanho,
  inicio
}

"valor" é o número que forma o maior bloco.
"tamanho" é a quantidade de vezes consecutivas.
"inicio" é o índice onde o bloco começa.

Se houver empate entre blocos, mantenha o PRIMEIRO bloco.

Exemplo:

[2, 2, 5, 5, 5, 3]

O maior bloco é:

5, 5, 5

Resultado:
{
  valor: 5,
  tamanho: 3,
  inicio: 2
}

Se o array estiver vazio, retorne:

{
  valor: null,
  tamanho: 0,
  inicio: -1
}
============================================================ */

function maiorBlocoIgual(nums) {
  // faça aqui
}

console.log(maiorBlocoIgual([2, 2, 5, 5, 5, 3]));
// {valor: 5, tamanho: 3, inicio: 2}

console.log(maiorBlocoIgual([7, 7, 4, 4, 4, 9, 9]));
// {valor: 4, tamanho: 3, inicio: 2}

console.log(maiorBlocoIgual([1, 2, 3, 4]));
// {valor: 1, tamanho: 1, inicio: 0}

console.log(maiorBlocoIgual([6, 6, 8, 8, 8, 6, 6]));
// {valor: 8, tamanho: 3, inicio: 2}

console.log(maiorBlocoIgual([5, 5, 3, 3, 5, 5]));
// {valor: 5, tamanho: 2, inicio: 0}

console.log(maiorBlocoIgual([]));
// {valor: null, tamanho: 0, inicio: -1}