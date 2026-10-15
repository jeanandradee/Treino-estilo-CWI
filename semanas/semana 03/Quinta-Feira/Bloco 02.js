/*🧩 B2 — Lógica em Prática
Nível 3,5/10 — 6 questões
Questão 1 — Rotação de elementos
Implemente rotacionarDireita(numeros, passos).
Desloque os elementos para a direita conforme a quantidade de passos. Os elementos que saírem do final voltam para o início. Se o array estiver vazio, retorne []. Se passos for maior que o tamanho do array, a rotação deve continuar normalmente. Não altere o array original.
*/

function rotacionarDireita(numeros, passos) {
  let resultado = [];

  if (numeros.length === 0) {
    return resultado;
  }

  passos = passos % numeros.length;

  for (let i = numeros.length - passos; i < numeros.length; i++) {
    resultado.push(numeros[i]);
  }

  for (let i = 0; i < numeros.length - passos; i++) {
    resultado.push(numeros[i]);
  }

  return resultado;
} 

console.log(rotacionarDireita([1, 2, 3, 4, 5], 2));
// Esperado: [4, 5, 1, 2, 3]

console.log(rotacionarDireita([10, 20, 30], 1));
// Esperado: [30, 10, 20]

console.log(rotacionarDireita([7, 8, 9], 3));
// Esperado: [7, 8, 9]

console.log(rotacionarDireita([1, 2, 3], 5));
// Esperado: [2, 3, 1]

console.log(rotacionarDireita([], 4));
// Esperado: []

console.log(rotacionarDireita([42], 8));
// Esperado: [42]

/* Questão 2 — Soma de valores únicos
Implemente somarValoresUnicos(numeros).
Some apenas os números que aparecem exatamente uma vez no array. Se nenhum número aparecer uma única vez, retorne 0.
*/

function somarValoresUnicos(numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    let contador = 0;

    for (let j = 0; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        contador++;
      }
    }

    if (contador === 1) {
      soma += numeros[i];
    }
  }

  return soma;
}

console.log(somarValoresUnicos([1, 2, 2, 3, 4, 4]));
// Esperado: 4

console.log(somarValoresUnicos([5, 5, 5]));
// Esperado: 0

console.log(somarValoresUnicos([1, 2, 3, 4]));
// Esperado: 10

console.log(somarValoresUnicos([7, 7, 8, 9, 9]));
// Esperado: 8

console.log(somarValoresUnicos([-2, 3, -2, 5]));
// Esperado: 8

console.log(somarValoresUnicos([]));
// Esperado: 0

/* Questão 3 — Maior salto entre valores vizinhos
Implemente indiceMaiorSalto(numeros).
Calcule a diferença absoluta entre cada par de elementos vizinhos. Retorne o índice do elemento à esquerda do par com a maior diferença. Em caso de empate, retorne o primeiro índice encontrado. Se houver menos de dois elementos, retorne -1.
*/

function indiceMaiorSalto(numeros) {
  if (numeros.length < 2) {
    return -1;
  }

  let maiorSalto = 0;
  let indice = 0;

  for (let i = 0; i < numeros.length - 1; i++) {
    let diferenca = Math.abs(numeros[i] - numeros[i + 1]);

    if (diferenca > maiorSalto) {
      maiorSalto = diferenca;
      indice = i;
    }
  }

  return indice;
}

console.log(indiceMaiorSalto([2, 5, 12, 4, 6]));
// Esperado: 2

console.log(indiceMaiorSalto([10, 2, 8, 1]));
// Esperado: 2

console.log(indiceMaiorSalto([1, 4, 7, 10]));
// Esperado: 0

console.log(indiceMaiorSalto([-5, -1, 8, 2]));
// Esperado: 1

console.log(indiceMaiorSalto([9]));
// Esperado: -1

console.log(indiceMaiorSalto([]));
// Esperado: -1

/* Questão 4 — Validação de código
Implemente validarCodigo(codigo).
Retorne true somente se o código tiver exatamente 8 caracteres e todos forem algarismos de 0 a 9. Não utilize expressões regulares (regex).
*/

function validarCodigo(codigo) {
  if (codigo.length !== 8) {
    return false;
  }

  for (let caracter of codigo) {
    if (caracter < "0" || caracter > "9") {
      return false;
    }
  }

  return true;
}

console.log(validarCodigo("12345678"));
// Esperado: true

console.log(validarCodigo("00001234"));
// Esperado: true

console.log(validarCodigo("1234567"));
// Esperado: false

console.log(validarCodigo("123456789"));
// Esperado: false

console.log(validarCodigo("1234A678"));
// Esperado: false

console.log(validarCodigo("12 45678"));
// Esperado: false

/* Questão 5 — Cálculo de troco
Implemente calcularTroco(preco, valorPago).
Se o valor pago for suficiente, retorne o troco. Se for insuficiente, retorne null. Considere que os valores são números positivos ou zero.
*/

function calcularTroco(preco, valorPago) {
  if (preco > valorPago) {
    return null;
  } else {
    return  valorPago - preco;
  }
}

console.log(calcularTroco(35, 50));
// Esperado: 15

console.log(calcularTroco(20, 20));
// Esperado: 0

console.log(calcularTroco(18.5, 20));
// Esperado: 1.5

console.log(calcularTroco(45, 30));
// Esperado: null

console.log(calcularTroco(0, 10));
// Esperado: 10

console.log(calcularTroco(12, 0));
// Esperado: null

/* Questão 6 — União de intervalos
Implemente unirIntervalos(intervalos).
Cada elemento do array representa um intervalo no formato [inicio, fim]. Una os intervalos que se sobrepõem ou se encostam e retorne o resultado em ordem crescente de início. Não altere o array original. Considere que o início de cada intervalo é menor ou igual ao fim.
*/

function unirIntervalos(intervalos) {
  if (intervalos.length === 0) {
    return [];
  }

  let ordenados = [...intervalos].sort((a, b) => a[0] - b[0]);
  let resultado = [[ordenados[0][0], ordenados[0][1]]];

  for (let i = 1; i < ordenados.length; i++) {
    let atual = ordenados[i];
    let ultimo = resultado[resultado.length - 1];

    if (atual[0] <= ultimo[1]) {
      ultimo[1] = Math.max(ultimo[1], atual[1]);
    } else {
      resultado.push([atual[0], atual[1]]);
    }
  }

  return resultado;
}

console.log(unirIntervalos([[1, 3], [2, 5], [8, 10]]));
// Esperado: [[1, 5], [8, 10]]

console.log(unirIntervalos([[1, 2], [3, 4]]));
// Esperado: [[1, 4]]

console.log(unirIntervalos([[5, 8], [1, 3], [2, 6]]));
// Esperado: [[1, 8]]

console.log(unirIntervalos([[4, 4], [4, 7]]));
// Esperado: [[4, 7]]

console.log(unirIntervalos([]));
// Esperado: []

console.log(unirIntervalos([[10, 12], [1, 2], [5, 6]]));
// Esperado: [[1, 2], [5, 6], [10, 12]]