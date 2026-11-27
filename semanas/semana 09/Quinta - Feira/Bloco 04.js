/* B4 — PRÁTICO | PREPARAÇÃO CWI
   ========================================
   Q1 — ANALISADOR DE MAIOR NÚMERO
   ========================================
Crie uma função "encontrarMaior(numeros)".
A função recebe um array de números e deve retornar o maior valor encontrado.
REGRAS:
- Considere números positivos, negativos e zero.
- Se o array estiver vazio, retorne "null".
- Não utilize "Math.max()".
*/

function encontrarMaior(numeros) {
  let maior = null;

  for (let num of numeros) {
    if (maior === null || num > maior) {
      maior = num;
    }
  }

  return maior;
}

// Testes principais
console.log(encontrarMaior([5, 10, 3, 8]));         // 10
console.log(encontrarMaior([20, 15, 30, 10]));      // 30
console.log(encontrarMaior([2, 2, 2]));             // 2
console.log(encontrarMaior([]));                    // null
// Testes extras
console.log(encontrarMaior([-5, -2, -10]));         // -2
console.log(encontrarMaior([-20, -30, -5]));        // -5
console.log(encontrarMaior([0, -1, -5]));           // 0
console.log(encontrarMaior([100]));                 // 100
console.log(encontrarMaior([-8]));                  // -8
console.log(encontrarMaior([7, 7, 7, 7]));          // 7

/* ========================================
   Q2 — SOMA DA DIAGONAL PRINCIPAL
   ========================================
Crie uma função "somarDiagonalPrincipal(matriz)".
A função recebe uma matriz quadrada e deve retornar a soma dos elementos da diagonal principal.
A diagonal principal é formada pelos elementos em que o índice da linha é igual ao índice da coluna.
Exemplo:
[
  [2, 4, 6],
  [1, 5, 8],
  [3, 7, 9]
]
Diagonal principal: "2 + 5 + 9 = 16".
REGRAS:
- A matriz será sempre quadrada.
- Considere matrizes de diferentes tamanhos.
- Não utilize métodos prontos para calcular a soma.
*/
function somarDiagonalPrincipal(matriz) {
  let soma = 0; 

  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][i];
  }

  return soma;
}

// Testes principais

console.log(somarDiagonalPrincipal([ [2, 4, 6], [1, 5, 8], [3, 7, 9] ]));   // 16
console.log(somarDiagonalPrincipal([ [1, 2], [3, 4] ]));                    // 5
console.log(somarDiagonalPrincipal([ [10] ]));                              // 10
// Testes extras
console.log(somarDiagonalPrincipal([ [5, 1, 2, 3], [4, 6, 7, 8],
 [9, 2, 7, 1], [3, 4, 5, 8] ]));                                            // 26
console.log(somarDiagonalPrincipal([ [-1, 2], [3, -5] ]));                  // -6
console.log(somarDiagonalPrincipal([ [0, 1, 2], [3, 0, 4], [5, 6, 0] ]));   // 0

/* ========================================
   Q3 — CONTADOR DE PALAVRAS
   ========================================
Crie uma função "contarPalavras(texto)".
A função recebe uma string e deve retornar a quantidade de palavras existentes nela.
REGRAS:
- Espaços no início e no final não devem contar.
- Vários espaços consecutivos devem ser considerados uma única separação.
- Uma string vazia deve retornar zero.
- Considere palavras separadas por espaços.
*/

function contarPalavras(texto) {
  let contador = 0;
  texto = texto.trim().split(/\s+/);

  if (texto[0] === "") {
    return 0;
  }
 
  for (let palavra of texto) {
    if (palavra !== "") {
      contador ++;
    }
  }

  return contador;
}

// Testes principais
console.log(contarPalavras("JavaScript é legal"));        // 3
console.log(contarPalavras("Olá mundo"));                 // 2
console.log(contarPalavras("Aprender programação"));      // 2
// Testes extras
console.log(contarPalavras(""));                          // 0
console.log(contarPalavras("   "));                       // 0
console.log(contarPalavras("  JavaScript  é  legal  "));  // 3
console.log(contarPalavras("uma"));                       // 1
console.log(contarPalavras("palavra   palavra"));         // 2
console.log(contarPalavras("  teste"));                   // 1
console.log(contarPalavras("teste  "));                   // 1
console.log(contarPalavras("A B C D E"));                 // 5