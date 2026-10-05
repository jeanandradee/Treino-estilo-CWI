/* ============================================================
1️⃣ PRIMEIRO ELEMENTO DIFERENTE
Dado um array nums, encontre o primeiro elemento que seja
diferente do elemento imediatamente anterior.
Retorne o índice desse elemento.
Se todos forem iguais ou houver menos de 2 elementos,
retorne -1.
Exemplo:
[5, 5, 5, 8, 8] → 3
[2, 2, 7, 7, 9] → 2
============================================================ */

function primeiroDiferente(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      return i;
    }
  }

  return -1;
}

console.log(primeiroDiferente([5, 5, 5, 8, 8])); // 3

console.log(primeiroDiferente([2, 2, 7, 7, 9])); // 2

console.log(primeiroDiferente([1, 2, 2, 3])); // 1

console.log(primeiroDiferente([4, 4, 4, 4])); // -1

console.log(primeiroDiferente([9])); // -1

console.log(primeiroDiferente([])); // -1


/* ============================================================
2️⃣ SOMA ENTRE EXTREMOS
Dado um array nums, encontre o menor e o maior valor.
Depois, some todos os elementos entre as posições desses
dois valores, incluindo os próprios extremos.
Se o menor ou maior aparecer mais de uma vez, use a
primeira ocorrência.
O intervalo deve ser percorrido normalmente, mesmo quando
o maior valor aparecer antes do menor.
Se o array estiver vazio, retorne 0.
Exemplo:
[4, 2, 7, 3, 5]
menor = 2 → índice 1
maior = 7 → índice 2
soma = 2 + 7 = 9
============================================================ */

function somarEntreExtremos(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let menor = nums[0];
  let maior = nums[0];

  let indiceMenor = 0;
  let indiceMaior = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < menor) {
      menor = nums[i];
      indiceMenor = i;
    }

    if (nums[i] > maior) {
      maior = nums[i];
      indiceMaior = i;
    }
  }

  let inicio = Math.min(indiceMenor, indiceMaior);
  let fim = Math.max(indiceMenor, indiceMaior);

  let soma = 0;

  for (let i = inicio; i <= fim; i++) {
    soma += nums[i];
  }

  return soma;
}

console.log(somarEntreExtremos([4, 2, 7, 3, 5])); // 9
console.log(somarEntreExtremos([8, 3, 6, 1, 5])); // 18
console.log(somarEntreExtremos([5, 2, 9, 4, 7])); // 16
console.log(somarEntreExtremos([10])); // 10
console.log(somarEntreExtremos([3, 1, 3, 2])); // 4
console.log(somarEntreExtremos([])); // 0


/* ============================================================
3️⃣ MAIOR DIFERENÇA ENTRE VIZINHOS
Dado um array nums, encontre a maior diferença absoluta
entre dois elementos consecutivos.
Retorne um objeto:
{
  diferenca,
  posicao
}
posicao é o índice do segundo elemento da dupla que
produziu a maior diferença.
Se houver empate, mantenha a primeira ocorrência.
Se houver menos de 2 elementos, retorne:
{
  diferenca: 0,
  posicao: -1
}
Exemplo:
[10, 14, 5, 8]
10 → 14 = diferença 4
14 → 5  = diferença 9
5 → 8   = diferença 3
Resultado:
{
  diferenca: 9,
  posicao: 2
}
============================================================ */

function maiorDiferenca(nums) {
  let diferenca = 0;
  let posicao = -1;

  for (let i = 1; i < nums.length; i++) {
    let diferencaAtual = Math.abs(nums[i] - nums[i - 1]);

    if (diferencaAtual > diferenca) {
      diferenca = diferencaAtual;
      posicao = i;
    }
  }

  return {diferenca, posicao};
}

console.log(maiorDiferenca([10, 14, 5, 8])); // {diferenca: 9, posicao: 2}

console.log(maiorDiferenca([1, 10, 3, 12])); // {diferenca: 9, posicao: 1}

console.log(maiorDiferenca([5, 2, 8, 5])); // {diferenca: 6, posicao: 2}

console.log(maiorDiferenca([7, 7, 7])); // {diferenca: 0, posicao: -1}

console.log(maiorDiferenca([20])); // {diferenca: 0, posicao: -1}

console.log(maiorDiferenca([])); // {diferenca: 0, posicao: -1}