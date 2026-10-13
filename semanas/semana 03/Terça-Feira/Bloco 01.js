/* 1. Localizador de elemento 🔎
Uma matriz contém um único caractere "X".
Retorne [linha, coluna] com a posição de X.
Os índices começam em zero.
Percorra as linhas de cima para baixo e as colunas
da esquerda para a direita.
Não altere a matriz.
*/

function localizarElemento(matriz) {
  let li= -1;
  let co = -1;

  for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
      if (matriz[linha][coluna] === "X") {
        li = linha;
        co = coluna;
      }
    }
  }

  return [li, co];
}

console.log(localizarElemento([["A", "B"], ["C", "X"]])); // [1, 1]
console.log(localizarElemento([["X", "A"], ["B", "C"]])); // [0, 0]
console.log(localizarElemento([["A", "X", "C"]])); // [0, 1]
console.log(localizarElemento([["A"], ["X"], ["C"]])); // [1, 0]
console.log(localizarElemento([["A", "B", "C"], ["D", "E", "X"]])); // [1, 2]
console.log(localizarElemento([["A", "B"], ["C", "D"], ["X", "F"]])); // [2, 0]

/* 2. Soma da diagonal principal ➕
Receba uma matriz quadrada de números.
Calcule a soma dos elementos da diagonal principal,
isto é, os elementos em que o índice da linha é igual
ao índice da coluna.
A matriz terá pelo menos uma linha.
Não altere a matriz original.
*/

function somarDiagonal(matriz) {
  let soma = 0;

  for(let i = 0; i < matriz.length; i++) {
    soma += matriz[i][i];
  }

  return soma;
}

console.log(somarDiagonal([[1, 2], [3, 4]])); // 5
console.log(somarDiagonal([[5]])); // 5
console.log(somarDiagonal([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 15
console.log(somarDiagonal([[0, 2], [3, 0]])); // 0
console.log(somarDiagonal([[-1, 4], [5, -2]])); // -3
console.log(somarDiagonal([[10, 0, 0], [0, 20, 0], [0, 0, 30]])); // 60

/* 3. Contagem de ilhas de caracteres 🧩
Receba uma matriz de caracteres contendo "X" e ".".
Conte quantas células contêm "X".
As células podem estar em qualquer posição.
Não conte ".".
A matriz terá pelo menos uma linha.
Não altere a matriz original.
*/

function contarX(matriz) {
  let contador = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === "X") {
        contador++;
      }
    }
  }

  return contador;
}

console.log(contarX([["X", ". "], [".", "X"]])); // 2
console.log(contarX([[".", ".", "."]])); // 0
console.log(contarX([["X"]])); // 1
console.log(contarX([["X", "X"], ["X", "."]])); // 3
console.log(contarX([[".", "X", "."], ["X", "X", "X"]])); // 4
console.log(contarX([["X", "X"], ["X", "X"], ["X", "X"]])); // 6

/* 4. Primeiro elemento repetido 🔁
Receba um array de números.
Retorne o primeiro número que aparecer novamente
durante a leitura da esquerda para a direita.
Ou seja, retorne o primeiro elemento cujo valor já
tenha aparecido antes.
Se nenhum número se repetir, retorne -1.
Não altere o array original.
*/

function primeiroRepetido(numeros) {
  let vistos = [];

  for (let numero of numeros) {
    if (vistos.includes(numero)) {
      return numero;
    } else {
      vistos.push(numero);
    }
  }

  return -1;
}

console.log(primeiroRepetido([4, 2, 4, 2])); // 4
console.log(primeiroRepetido([1, 2, 3, 4])); // -1
console.log(primeiroRepetido([7, 7, 8])); // 7
console.log(primeiroRepetido([1, 2, 3, 2, 1])); // 2
console.log(primeiroRepetido([-1, 0, -1])); // -1
console.log(primeiroRepetido([5, 4, 3, 4, 3])); // 4
 

/* 5. Soma dos vizinhos de um elemento 📍
Receba uma matriz de números e uma posição [linha, coluna].
Some os vizinhos imediatamente acima, abaixo, à esquerda
e à direita da posição indicada.
Não conte diagonais.
Ignore vizinhos que estejam fora dos limites da matriz.
Não inclua o próprio elemento na soma.
A posição recebida sempre será válida.
*/

function somarVizinhos(matriz, linha, coluna) {
  let soma = 0;

  if (linha > 0) {
    soma += matriz[linha - 1][coluna];
  }

  if (linha < matriz.length - 1) {
    soma += matriz[linha + 1][coluna];
  }

  if (coluna > 0) {
    soma += matriz[linha][coluna - 1];
  }

  if (coluna < matriz[linha].length - 1) {
    soma += matriz[linha][coluna + 1];
  }

  return soma
}

console.log(somarVizinhos([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1, 1)); // 20
console.log(somarVizinhos([[1, 2], [3, 4]], 0, 0)); // 5
console.log(somarVizinhos([[5, 8, 2]], 0, 1)); // 7
console.log(somarVizinhos([[1], [2], [3]], 1, 0)); // 4
console.log(somarVizinhos([[10, 20], [30, 40]], 1, 1)); // 50
console.log(somarVizinhos([[1, 2, 3], [4, 5, 6]], 0, 2)); // 7

/* 6. Maior região horizontal de iguais 📏
Receba um array de números.

Descubra o tamanho da maior sequência de números iguais
que estejam em posições consecutivas.

Não é necessário que todos os números iguais do array
estejam juntos; considere apenas sequências consecutivas.

Retorne o tamanho da maior sequência.
Se o array estiver vazio, retorne 0.
*/

function maiorSequenciaIgual(numeros) {
  if (numeros.length === 0) {
    return 0;
  }

  let sequenciaAtual = 1;
  let maiorSequencia = 1;

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] === numeros[i - 1]) {
      sequenciaAtual++;
    } else {
      sequenciaAtual = 1;
    }

    if (sequenciaAtual > maiorSequencia) {
      maiorSequencia = sequenciaAtual;
    }
  }

  return maiorSequencia;
}

console.log(maiorSequenciaIgual([1, 1, 2, 2, 2, 3])); // 3
console.log(maiorSequenciaIgual([5, 5, 5, 5])); // 4
console.log(maiorSequenciaIgual([1, 2, 3, 4])); // 1
console.log(maiorSequenciaIgual([7])); // 1
console.log(maiorSequenciaIgual([1, 1, 2, 2, 2, 2, 1])); // 4
console.log(maiorSequenciaIgual([])); // 0