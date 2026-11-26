/* B3 — CAÇA-BUG
   ========================================
   Q1 — CLASSIFICADOR DE TEMPERATURA
   ========================================
O código deveria classificar uma temperatura conforme as regras:
- Abaixo de 15: "Frio".
- De 15 até 25: "Agradável".
- Acima de 25: "Quente".
Identifique e corrija o erro.
*/

function classificarTemperatura(temperatura) {
  if (temperatura < 15) {
    return "Frio";

  // CORREÇÃO:
  // Antes estava > 15 e < 25.
  // Isso excluía os valores 15 e 25.
  // Agora usamos >= 15 e <= 25.
  } else if (temperatura >= 15 && temperatura <= 25) {
    return "Agradável";

  } else {
    return "Quente";
  }
}

// Testes principais
console.log(classificarTemperatura(10));  // "Frio"
console.log(classificarTemperatura(15));  // "Agradável"
console.log(classificarTemperatura(20));  // "Agradável"
console.log(classificarTemperatura(25));  // "Agradável"
console.log(classificarTemperatura(30));  // "Quente"
// Testes extras
console.log(classificarTemperatura(0));   // "Frio"
console.log(classificarTemperatura(14));  // "Frio"
console.log(classificarTemperatura(16));  // "Agradável"
console.log(classificarTemperatura(24));  // "Agradável"
console.log(classificarTemperatura(26));  // "Quente"
console.log(classificarTemperatura(-5));  // "Frio"


/* ========================================
Q2 — CONTADOR DE VOGAIS
========================================
O código deveria contar quantas vogais existem em uma palavra,
ignorando maiúsculas e minúsculas.
Identifique e corrija os erros.
*/

function contarVogais(texto) {
  let quantidade = 0;
  let vogais = "aeiou";

  // CORREÇÃO:
  // Antes estava <= texto.length.
  // Isso fazia o código acessar uma posição inexistente.
  // O correto é usar apenas < texto.length.
  for (let i = 0; i < texto.length; i++) {

    let letra = texto[i].toLowerCase();

    if (vogais.includes(letra)) {

      // CORREÇÃO:
      // Antes estava quantidade =+ 1.
      // Isso apenas atribuía +1 à variável.
      // O correto é += para somar 1 ao valor atual.
      quantidade += 1;
    }
  }

  return quantidade;
}

// Testes principais

console.log(contarVogais("banana"));       // 3
console.log(contarVogais("JavaScript"));   // 3
console.log(contarVogais("PROGRAMACAO"));  // 5
console.log(contarVogais("xyz"));          // 0
// Testes extras
console.log(contarVogais("AEIOU"));        // 5
console.log(contarVogais("AbCdEf"));       // 2
console.log(contarVogais(""));             // 0
console.log(contarVogais("aaaaaa"));       // 6
console.log(contarVogais("bcdfg"));        // 0
console.log(contarVogais("Ola Mundo"));    // 4


/* ========================================
   Q3 — ATUALIZADOR DE SALDO
   ========================================
Uma função recebe um saldo inicial e uma operação.
REGRAS:
- "credito": adiciona o valor ao saldo.
- "debito": subtrai o valor do saldo.
- Se o tipo for desconhecido, mantém o saldo original.
- O saldo nunca pode ficar negativo.
  Se o débito ultrapassar o saldo, mantenha o saldo original.
O código apresenta erros de lógica.
Identifique e corrija.
*/

function atualizarSaldo(saldo, tipo, valor) {
  if (tipo === "credito") {

    // CORREÇÃO:
    // Crédito deve adicionar o valor.
    // Antes estava saldo -= valor.
    saldo += valor;

  } else if (tipo === "debito") {

    // CORREÇÃO:
    // Débito deve subtrair o valor.
    // Antes estava saldo += valor.
    saldo -= valor;

    // CORREÇÃO:
    // Se o débito deixar o saldo negativo,
    // devemos manter o saldo original.
    // Por isso, adicionamos o valor novamente.
    if (saldo < 0) {
      saldo += valor;
    }
  }

  // Se o tipo for desconhecido, nenhuma operação acontece.
  // O saldo permanece igual ao original.

  return saldo;
}

// Testes principais

console.log(atualizarSaldo(100, "credito", 50));  // 150
console.log(atualizarSaldo(100, "debito", 30));   // 70
console.log(atualizarSaldo(100, "debito", 150));  // 100
console.log(atualizarSaldo(100, "outro", 50));    // 100
// Testes extras
console.log(atualizarSaldo(0, "credito", 20));     // 20
console.log(atualizarSaldo(50, "debito", 50));     // 0
console.log(atualizarSaldo(50, "debito", 51));     // 50
console.log(atualizarSaldo(75, "credito", 0));     // 75
console.log(atualizarSaldo(30, "outro", 100));     // 30
console.log(atualizarSaldo(200, "credito", 100));  // 300


/* ========================================
   Q4 — LOCALIZADOR DE ELEMENTO
   ========================================
A função deveria receber um array e um número procurado.
Ela deve retornar:
- O índice da primeira ocorrência do número, caso exista.
- -1 caso o número não exista.
O código apresenta um erro que pode fazer o resultado ficar incorreto.
Identifique e corrija.
*/

function localizarNumero(numeros, procurado) {
  for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] === procurado) {
      return i;
    }

    // CORREÇÃO:
    // Antes o else retornava -1 imediatamente.
    // Isso fazia a função parar na primeira posição,
    // mesmo quando o número poderia estar mais adiante.
    //
    // Agora o for continua procurando.
  }

  // CORREÇÃO:
  // O -1 deve ficar FORA do for.
  // Assim, só será retornado quando o número
  // não for encontrado em nenhuma posição.
  return -1;
}

// Testes principais

console.log(localizarNumero([10, 20, 30, 40], 30));     // 2
console.log(localizarNumero([5, 8, 12], 5));            // 0
console.log(localizarNumero([1, 2, 3], 9));             // -1
console.log(localizarNumero([7, 7, 7], 7));             // 0
// Testes extras
console.log(localizarNumero([], 5));                    // -1
console.log(localizarNumero([4, 8, 12, 16], 16));       // 3
console.log(localizarNumero([3, 9, 3, 9], 9));          // 1
console.log(localizarNumero([-5, -2, 0, 4], -2));       // 1
console.log(localizarNumero([100], 100));               // 0
console.log(localizarNumero([2, 4, 6, 8], 5));          // -1