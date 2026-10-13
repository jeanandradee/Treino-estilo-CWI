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
