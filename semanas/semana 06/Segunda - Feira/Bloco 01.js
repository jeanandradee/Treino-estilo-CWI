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
  for (let letra of texto) {
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
