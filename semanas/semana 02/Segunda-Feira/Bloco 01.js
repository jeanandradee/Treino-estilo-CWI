/*1️⃣ Primeiro intervalo válido
Dado um array nums, encontre o primeiro par de índices consecutivos em que a diferença entre os valores seja exatamente target.
Retorne:
[indice1, indice2]
Se não existir, retorne:
[-1, -1]
Exemplos
nums = [3, 8, 10, 15]
target = 5

→ [0, 1]
Porque 8 - 3 = 5.
Outro:
nums = [4, 7, 10, 15]
target = 5

→ [2, 3]
Porque 15 - 10 = 5.*/

function primeiroIntervalo(nums, target) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === target) {
      return [i - 1, i];
    }
  }

  return [-1, -1];
}   

console.log(primeiroIntervalo([3, 8, 10, 15], 5)); // [0, 1]

console.log(primeiroIntervalo([4, 7, 10, 15], 5)); // [2, 3]

console.log(primeiroIntervalo([10, 15, 20], 5)); // [0, 1]

console.log(primeiroIntervalo([1, 3, 6, 10], 4)); // [2, 3]

console.log(primeiroIntervalo([5, 8, 12], 2)); // [-1, -1]

console.log(primeiroIntervalo([], 5)); // [-1, -1]


/*2️⃣ Separação por posição
Dado um array nums, construa dois novos arrays:
pares → valores que estão em índices pares;
impares → valores que estão em índices ímpares.
Retorne:
{
  pares: [...],
  impares: [...]
}
Exemplo
nums = [10, 20, 30, 40, 50]
índices:
 0   1   2   3   4
10  20  30  40  50
→ pares   = [10, 30, 50]
→ impares = [20, 40]*/

function separarPorPosicao(nums) {
  let pares = []
  let impares = [];

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      pares.push(nums[i]);
    } else {
      impares.push(nums[i]);
    }
  }

  return {
    pares,
    impares
  }
}

console.log(separarPorPosicao([10, 20, 30, 40, 50]));
// { pares: [10, 30, 50], impares: [20, 40] }

console.log(separarPorPosicao([7, 8, 9]));
// { pares: [7, 9], impares: [8] }

console.log(separarPorPosicao([5]));
// { pares: [5], impares: [] }

console.log(separarPorPosicao([1, 2, 3, 4]));
// { pares: [1, 3], impares: [2, 4] }

console.log(separarPorPosicao([]));
// { pares: [], impares: [] }

console.log(separarPorPosicao([100, 200]));
// { pares: [100], impares: [200] }

/*3️⃣ Maior sequência de crescimento
Dado um array nums, encontre o tamanho da maior sequência consecutiva de crescimento.
Um crescimento acontece quando:
nums[i] > nums[i - 1]
Se houver crescimento em sequência, continue contando.
Quando o valor não crescer, a sequência é interrompida.
Retorne apenas o maior tamanho encontrado.
Exemplo
nums = [2, 4, 6, 3, 5, 8, 10]
2 → 4 → 6
Aqui temos 3 valores crescendo consecutivamente.
Depois:
3 → 5 → 8 → 10
Temos 4 valores.
Resultado:
4*/

function maiorSequenciaCrescimento(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let maior = 1;
  let sequenciaAtual = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      sequenciaAtual++;
    } else {
      sequenciaAtual = 1;
    }

    if (sequenciaAtual > maior) {
      maior = sequenciaAtual;
    }
  }

  return maior;
}

console.log(maiorSequenciaCrescimento([2, 4, 6, 3, 5, 8, 10])); // 4

console.log(maiorSequenciaCrescimento([1, 2, 3, 4])); // 4

console.log(maiorSequenciaCrescimento([5, 4, 3, 2])); // 1

console.log(maiorSequenciaCrescimento([1, 3, 2, 4, 5])); // 3

console.log(maiorSequenciaCrescimento([7])); // 1

console.log(maiorSequenciaCrescimento([])); // 0