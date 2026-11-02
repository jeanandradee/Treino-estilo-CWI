/* B1 — Rotina de Lógica
Questão 1 — Pares e ímpares
Retorne um objeto contendo:
pares: array com os números pares;
impares: array com os números ímpares;
somaPares: soma dos pares;
somaImpares: soma dos ímpares.*/
function analisarNumeros(numeros) {
  let pares = [];
  let impares = [];
  let somaPares = 0;
  let somaImpares = 0;

  for (let num of numeros) {
    if (num % 2 === 0) {
      pares.push(num);
      somaPares += num;
    } else {
      impares.push(num);
      somaImpares += num;
    }
  }

  return { pares, impares, somaPares, somaImpares };
}
console.log(analisarNumeros([2, 5, 8, 3, 10, 7, 4]))
// Resultado: { pares: [2, 8, 10, 4], impares: [5, 3, 7], somaPares: 24, somaImpares: 15 }

/* Questão 2 — Maior e menor número
Retorne:
maior: maior número do array;
menor: menor número do array.
Se o array estiver vazio, ambos devem ser null.*/

function encontrarExtremos(numeros) {
  let maior = null;
  let menor = null;

  for (let num of numeros) {
    if (maior === null || num > maior) {
      maior = num;
    }

    if (menor === null || num < menor) {
      menor = num;
    }
  }

  return { maior, menor };
}

console.log(encontrarExtremos([12, 5, 30, 8, 2, 19])) // Resultado: { maior: 30, menor: 2 }

/* Questão 3 — Contagem de vogais
Retorne a quantidade de vogais existentes no texto.
Regras:
Considere a, e, i, o, u.
Ignore diferenças entre maiúsculas e minúsculas.
Não conte espaços ou números.*/
function contarVogais(texto) {
  let contador = 0;
  for (let letra of texto.toLowerCase()) {
    if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u" 
    ) {
      contador ++ ;
    }
  }

  return contador;
}


console.log(contarVogais("JavaScript")) // Resultado: 3

/* Questão 4 — Tabuada
Retorne um array com os resultados da multiplicação do número recebido por todos os números de 1 até 10.*/

function gerarTabuada(numero) {
  let resultado = [];

  for (let i = 1; i <= 10; i++) {
    resultado.push(numero * i);
  }

  return resultado;
}
console.log(gerarTabuada(5)) // Resultado: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

/* Questão 5 — Números positivos, negativos e zeros
Retorne um objeto contendo:
positivos: quantidade de números maiores que zero;
negativos: quantidade de números menores que zero;
zeros: quantidade de números iguais a zero;
soma: soma de todos os números.*/

function classificarNumeros(numeros) {
  let positivos = 0;
  let negativos = 0;
  let zeros = 0; 
  let soma = 0;

  for (let num of numeros) {
    if (num > 0) {
      positivos ++;
    } else if (num < 0) {
      negativos ++ ;
    } else {
      zeros ++;
    }

    soma += num;
  }

  return {
    positivos,
    negativos,
    zeros,
    soma
  }
}


console.log(classificarNumeros([5, -2, 0, 8, -4, 0, 3])) // Resultado: { positivos: 3, negativos: 2, zeros: 2, soma: 10 }

/* Questão 6 — Inverter texto
Retorne o texto com seus caracteres na ordem inversa. */
function inverterTexto(texto) {
  let invertido = "";

  for (let i = texto.length -1; i >=0; i --) {
    invertido += texto[i];
  }

  return invertido;
}

console.log(inverterTexto("javascript")); // Resultado "tpircsavaj"