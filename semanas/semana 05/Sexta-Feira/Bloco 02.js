/* 1. Sistema de estacionamento — Cálculo de permanência
Um estacionamento cobra pelo tempo de permanência de cada veículo:
Primeira hora: R$ 10.
Cada hora adicional: R$ 5.
Qualquer fração de hora adicional conta como uma hora inteira.
Permanência de até 30 minutos é gratuita.*/

function calcularEstacionamento(minutos) {
  if (minutos <= 30) {
    return 0;
  }

  let preco = 10;

  if (minutos > 60) {
    let horasAdicionais = Math.ceil((minutos - 60) / 60);
    preco += horasAdicionais * 5;
  }

  return preco;
}

// Retorne o valor a pagar.

console.log(calcularEstacionamento(20)); // 0
console.log(calcularEstacionamento(60)); // 10
console.log(calcularEstacionamento(90)); // 15
console.log(calcularEstacionamento(125)); // 20
console.log(calcularEstacionamento(240)); // 25

/* 2. Strings — Compactador de texto
Um sistema precisa compactar sequências de caracteres repetidos. */

function compactarTexto(texto) {
  if (texto.length === 0) {
    return "";
  }

  let resultado = "";
  let contador = 1;

  for (let i = 0; i < texto.length; i++) {

    if (texto[i] === texto[i + 1]) {
      contador++;
    } else {
      resultado += texto[i] + contador;
      contador = 1;
    }
  }

  return resultado;
}

// Substitua sequências consecutivas de caracteres iguais pelo caractere seguido da quantidade de repetições.

console.log(compactarTexto("aaabbccccd"));
// "a3b2c4d1"

console.log(compactarTexto("abcd"));
// "a1b1c1d1"

console.log(compactarTexto("xxxxxx"));
// "x6"

/* 3. Matrizes — Rotação de mapa
Um sistema armazena um mapa em uma matriz quadrada.*/

function rotacionarMapa(matriz) {
  let novaMatriz = [];

  for (let coluna = 0; coluna < matriz.length; coluna++) {
    let novaLinha = [];

    for (let linha = matriz.length - 1; linha >= 0; linha--) {
      novaLinha.push(matriz[linha][coluna]);
    }

    novaMatriz.push(novaLinha);
  }

  return novaMatriz;
}

console.log(rotacionarMapa([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]));
// [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]

/* 4. Matemática — Encontrando o segundo maior
Uma plataforma recebe uma lista de números e precisa encontrar o segundo maior valor distinto.*/

function encontrarSegundoMaior(numeros) {
  let maior = null;
  let segundoMaior = null;

  for (let num of numeros) {

    if (maior === null || num > maior) {
      segundoMaior = maior;
      maior = num;

    } else if (num !== maior && (segundoMaior === null || num > segundoMaior)) {
      segundoMaior = num;
    }
  }

  return segundoMaior;
}

console.log(encontrarSegundoMaior([10, 5, 8, 20, 15])); // 15
console.log(encontrarSegundoMaior([7, 7, 5, 7, 3]));    // 5
console.log(encontrarSegundoMaior([9, 9, 9]));          // null
console.log(encontrarSegundoMaior([-5, -2, -10]));      // -5

/* 5. Lógica — Validador de parênteses
Um editor de código precisa verificar se os parênteses de uma expressão estão corretamente organizados.*/

function validarParenteses(expressao) {
  let contador = 0;

  for (let caractere of expressao) {

    if (caractere === "(") {
      contador++;

    } else if (caractere === ")") {
      contador--;
    }

    if (contador < 0) {
      return false;
    }
  }

  return contador === 0;
}

console.log(validarParenteses("(A+B)"));     // true
console.log(validarParenteses("((A+B)*C)")); // true
console.log(validarParenteses("(A+B"));      // false
console.log(validarParenteses("A+B)"));      // false
console.log(validarParenteses("(()))("));    // false
console.log(validarParenteses("A+(B*C)"));   // true

/* 6. Ordenação — Classificação de resultados
Uma competição precisa organizar seus participantes por pontuação.*/

function classificarResultados(participantes) {
  return [...participantes].sort((a, b) => {

    if (a.pontos !== b.pontos) {
      return b.pontos - a.pontos;
    }

    return a.tempo - b.tempo;
  });
}


console.log(classificarResultados([ { nome: "Ana", pontos: 80, tempo: 120 },
  { nome: "Carlos", pontos: 95, tempo: 150 }, { nome: "Pedro", pontos: 80, tempo: 100 },
  { nome: "Julia", pontos: 95, tempo: 130 }, { nome: "Marcos", pontos: 80, tempo: 100 } ]));
// [ { nome: "Julia", pontos: 95, tempo: 130 }, { nome: "Carlos", pontos: 95, tempo: 150 },
//   { nome: "Pedro", pontos: 80, tempo: 100 }, { nome: "Marcos", pontos: 80, tempo: 100 },
//   { nome: "Ana", pontos: 80, tempo: 120 } ]