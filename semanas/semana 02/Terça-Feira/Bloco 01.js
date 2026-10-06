/* ============================================================
1️⃣ FILTRO DE VALORES

Dado um array de números, retorne um NOVO array contendo
somente os valores que sejam:

- maiores que 10
- menores que 50

A ordem original deve ser preservada.

O array original não deve ser alterado.

Se nenhum valor atender à condição, o resultado deve ser
um array vazio.

============================================================ */

function filtrarValores(nums) {
  let resultado = [];

  for (let num of nums) {
    if (num > 10 && num < 50) {
      resultado.push(num);
    }
  }

  return resultado;
}

console.log(filtrarValores([5, 12, 30, 55, 40])); // [12, 30, 40]

console.log(filtrarValores([10, 50, 60])); // []

console.log(filtrarValores([11, 20, 49])); // [11, 20, 49]

console.log(filtrarValores([1, 2, 3, 4])); // []

console.log(filtrarValores([50, 49, 10, 11])); // [49, 11]

console.log(filtrarValores([])); // []

/* ============================================================
2️⃣ TRANSFORMAÇÃO DE REGISTROS
Dado um array de objetos contendo:
{
  nome,
  idade
}
Crie um NOVO array contendo objetos no formato:
{
  nome,
  categoria
}
Regras:
- idade menor que 18 → "MENOR"
- idade maior ou igual a 18 → "ADULTO"
A ordem dos registros deve ser preservada.
Não altere os objetos originais.
============================================================ */

function classificarPessoas(pessoas) {
  let resultado = [];
  for (let { nome, idade } of pessoas) {
    let categoria;
    if (idade >= 18) {
      categoria = "ADULTO";
    } else {
      categoria = "MENOR";
    }

    resultado.push({nome, categoria});
  }

  return resultado;
}

console.log(classificarPessoas([{nome: "Ana", idade: 15}, {nome: "Carlos", idade: 20}]));
// [ {nome: "Ana", categoria: "MENOR"}, {nome: "Carlos", categoria: "ADULTO"} ]

console.log(classificarPessoas([{nome: "João", idade: 18}]));
// [ {nome: "João", categoria: "ADULTO"} ]

console.log(classificarPessoas([{nome: "Maria", idade: 10}, {nome: "Pedro", idade: 17},
 {nome: "Lucas", idade: 30}]));
// [ {nome: "Maria", categoria: "MENOR"}, {nome: "Pedro", categoria: "MENOR"}, {nome: "Lucas", categoria: "ADULTO"} ]

console.log(classificarPessoas([]));
// []

console.log(classificarPessoas([{nome: "Bia", idade: 18}, {nome: "Leo", idade: 17}]));
// [ {nome: "Bia", categoria: "ADULTO"}, {nome: "Leo", categoria: "MENOR"} ]

console.log(classificarPessoas([{nome: "Rui", idade: 99}]));
// [ {nome: "Rui", categoria: "ADULTO"} ]

/* ============================================================
3️⃣ PRIMEIRA OCORRÊNCIA
Dado um array de números e um valor alvo, encontre a primeira
posição em que o alvo aparece.
Retorne o índice.
Se o valor não existir no array, retorne -1.
Se o valor aparecer várias vezes, retorne somente a primeira
posição.
============================================================ */

function primeiraOcorrencia(nums, alvo) {
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === alvo) {
      return i;
    }
  }
    
  return -1;
}

console.log(primeiraOcorrencia([4, 8, 2, 8, 10], 8)); // 1

console.log(primeiraOcorrencia([5, 3, 7, 9], 2)); // -1

console.log(primeiraOcorrencia([10, 10, 10], 10)); // 0

console.log(primeiraOcorrencia([1, 2, 3, 4], 1)); // 0

console.log(primeiraOcorrencia([1, 2, 3, 4], 4)); // 3

console.log(primeiraOcorrencia([], 5)); // -1