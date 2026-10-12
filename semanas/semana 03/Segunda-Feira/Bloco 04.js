// ==========================================
// B4 — DESAFIO MISTO
// Questão 1 — Decodificador de texto
// Resultado: 6/6 testes | 5/5 pontos
// ==========================================

function inverterPalavras(texto) {
  let resultado = "";
  let palavra = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      palavra = texto[i] + palavra;
    } else {
      resultado += palavra + " ";
      palavra = "";
    }
  }

  resultado += palavra;

  return resultado;
}

console.log(inverterPalavras("ola mundo")); // "alo odnum"
console.log(inverterPalavras("JS e legal")); // "SJ e lagel"
console.log(inverterPalavras("abc")); // "cba"
console.log(inverterPalavras("a b c")); // "a b c"
console.log(inverterPalavras("casa azul grande")); // "asac luza ednarg"
console.log(inverterPalavras("")); // ""


// ==========================================
// Questão 2 — Resumo de matriz numérica
// Sua vez de resolver!
// ==========================================

/*
Uma função recebe uma matriz de números.

Calcule:
- somaPares: soma de todos os números pares;
- somaImpares: soma de todos os números ímpares;
- maior: maior número da matriz;
- menor: menor número da matriz.

Considere números negativos e zero.
A matriz terá pelo menos um elemento.
Não altere a matriz original.

Retorne:
{somaPares, somaImpares, maior, menor}
*/

function resumirMatriz(matriz) {
  let somaPares = 0;
  let somaImpares = 0;
  let maior = null;
  let menor = null;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        somaPares += matriz[i][j];
      } else {
        somaImpares += matriz[i][j];
      }

      if (maior === null || matriz[i][j] > maior) {
        maior = matriz[i][j];
      }

      if (menor === null || matriz[i][j] < menor) {
        menor = matriz[i][j];
      }
    }
  }

  return {somaPares, somaImpares, maior, menor};
}

console.log(resumirMatriz([ [1, 2], [3, 4] ]));
// {somaPares: 6, somaImpares: 4, maior: 4, menor: 1}

console.log(resumirMatriz([ [0, -2], [-3, 5] ]));
// {somaPares: -2, somaImpares: 2, maior: 5, menor: -3}

console.log(resumirMatriz([ [7] ]));
// {somaPares: 0, somaImpares: 7, maior: 7, menor: 7}

console.log(resumirMatriz([ [10, 20], [30, 40] ]));
// {somaPares: 100, somaImpares: 0, maior: 40, menor: 10}

console.log(resumirMatriz([ [-5, -4], [-3, -2] ]));
// {somaPares: -6, somaImpares: -8, maior: -2, menor: -5}

console.log(resumirMatriz([ [2, 2], [1, 1] ]));
// {somaPares: 4, somaImpares: 2, maior: 2, menor: 1}


// ==========================================
// Questão 3 — Calculadora de percurso
// Resultado: 6/6 testes | 5/5 pontos
// ==========================================

function analisarPercurso(trechos) {
  let distanciaTotal = 0;
  let maiorTrecho = trechos[0];
  let menorTrecho = trechos[0];
  let quantidadeLongos = 0;

  for (let trecho of trechos) {
    distanciaTotal += trecho;

    if (trecho > maiorTrecho) {
      maiorTrecho = trecho;
    }

    if (trecho < menorTrecho) {
      menorTrecho = trecho;
    }

    if (trecho > 10) {
      quantidadeLongos++;
    }
  }

  return {
    distanciaTotal,
    maiorTrecho,
    menorTrecho,
    quantidadeLongos
  };
}

console.log(analisarPercurso([5, 12, 8]));
// {distanciaTotal: 25, maiorTrecho: 12, menorTrecho: 5, quantidadeLongos: 1}

console.log(analisarPercurso([10, 10, 10]));
// {distanciaTotal: 30, maiorTrecho: 10, menorTrecho: 10, quantidadeLongos: 0}

console.log(analisarPercurso([15]));
// {distanciaTotal: 15, maiorTrecho: 15, menorTrecho: 15, quantidadeLongos: 1}

console.log(analisarPercurso([2, 4, 6, 8]));
// {distanciaTotal: 20, maiorTrecho: 8, menorTrecho: 2, quantidadeLongos: 0}

console.log(analisarPercurso([11, 3, 25, 10]));
// {distanciaTotal: 49, maiorTrecho: 25, menorTrecho: 3, quantidadeLongos: 2}

console.log(analisarPercurso([7, 13, 9, 14, 6]));
// {distanciaTotal: 49, maiorTrecho: 14, menorTrecho: 6, quantidadeLongos: 2}