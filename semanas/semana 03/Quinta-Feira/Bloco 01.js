/*🧩 Q1 — Separador de temperaturas
Um sistema meteorológico recebe temperaturas de várias cidades. Crie separarTemperaturas(temperaturas) para retornar um objeto com três arrays:
frias: temperaturas abaixo de 15.
amenas: temperaturas de 15 até 25, inclusive.
quentes: temperaturas acima de 25.
Preserve a ordem original dos valores e não modifique o array recebido.*/
function separarTemperaturas(temperaturas) {
  let frias = [];
  let amenas = [];
  let quentes = [];

  for (let temperatura of temperaturas) {
    if (temperatura < 15) {
      frias.push(temperatura);
    } else if (temperatura <= 25) {
      amenas.push(temperatura);
    } else {
      quentes.push(temperatura);
    }
  }

  return {frias, amenas, quentes};
}

console.log(separarTemperaturas([10, 20, 30, 15, 25]));
// { frias: [10], amenas: [20, 15, 25], quentes: [30] }

console.log(separarTemperaturas([5, 8, 12]));
// { frias: [5, 8, 12], amenas: [], quentes: [] }

console.log(separarTemperaturas([15, 25]));
// { frias: [], amenas: [15, 25], quentes: [] }

console.log(separarTemperaturas([26, 40, 50]));
// { frias: [], amenas: [], quentes: [26, 40, 50] }

console.log(separarTemperaturas([]));
// { frias: [], amenas: [], quentes: [] }

console.log(separarTemperaturas([25, 14, 26, 15, 14]));
// { frias: [14, 14], amenas: [25, 15], quentes: [26] }

/*🧩 Q2 — Localizador de diferença
Uma função recebe dois arrays numéricos do mesmo tamanho. Crie primeiraDiferenca(a, b) para retornar o primeiro índice em que os valores forem diferentes. Se todos forem iguais, retorne -1.*/
function primeiraDiferenca(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return i;
    }
  }

  return -1;
}

console.log(primeiraDiferenca([1, 2, 3], [1, 9, 3])); // 1
console.log(primeiraDiferenca([4, 5], [4, 5]));        // -1
console.log(primeiraDiferenca([7, 8, 9], [0, 8, 9])); // 0
console.log(primeiraDiferenca([1], [2]));              // 0
console.log(primeiraDiferenca([], []));                // -1
console.log(primeiraDiferenca([2, 4, 6], [2, 4, 7])); // 2

/* 🧩 Q3 — Controle de tentativas
Um sistema registra tentativas de acesso como "OK" ou "ERRO". Crie analisarTentativas(tentativas) para retornar:
sucessos: quantidade de "OK".
erros: quantidade de "ERRO".
ultimoResultado: último valor recebido ou null, se o array estiver vazio.*/
function analisarTentativas(tentativas) {
  let sucessos = 0;
  let erros = 0;
  let ultimoResultado = null;

  for (let tentativa of tentativas) {
    if (tentativa === "OK") {
      sucessos ++;
      ultimoResultado = "OK";
    } else if (tentativa === "ERRO") {
      erros ++;
      ultimoResultado = "ERRO";
    }
  }

  return {sucessos, erros, ultimoResultado};
}

console.log(analisarTentativas(["OK", "ERRO", "OK"]));
// { sucessos: 2, erros: 1, ultimoResultado: "OK" }

console.log(analisarTentativas(["ERRO", "ERRO"]));
// { sucessos: 0, erros: 2, ultimoResultado: "ERRO" }

console.log(analisarTentativas(["OK"]));
// { sucessos: 1, erros: 0, ultimoResultado: "OK" }

console.log(analisarTentativas([]));
// { sucessos: 0, erros: 0, ultimoResultado: null }

console.log(analisarTentativas(["OK", "OK", "OK"]));
// { sucessos: 3, erros: 0, ultimoResultado: "OK" }

console.log(analisarTentativas(["ERRO", "OK", "ERRO", "OK"]));
// { sucessos: 2, erros: 2, ultimoResultado: "OK" }

/*🧩 Q4 — Calculadora de saldo acumulado
Um usuário começa com saldo zero e realiza movimentações. Valores positivos representam créditos; valores negativos representam débitos.
retorne o saldo final.*/

function calcularSaldo(movimentos) {
  let saldo = 0;

  for (let movimento of movimentos) {
    saldo += movimento;
  }

  return saldo;
}

console.log(calcularSaldo([10, -3, 5]));     // 12
console.log(calcularSaldo([-10, 4]));        // -6
console.log(calcularSaldo([]));              // 0
console.log(calcularSaldo([100]));           // 100
console.log(calcularSaldo([-5, -5, -5]));    // -15
console.log(calcularSaldo([20, -20, 7, -2])); // 5

/*🧩 Q5 — Contagem de palavras longas
Crie contarPalavrasLongas(palavras, limite) para contar quantas palavras possuem comprimento estritamente maior que limite.
Considere o comprimento da string exatamente como recebido, incluindo maiúsculas e minúsculas normalmente.*/

function contarPalavrasLongas(palavras, limite) {
  let contador = 0; 

  for (let palavra of palavras) {
    if (palavra.length > limite) {
      contador ++;
    }
  }

  return contador;
}

console.log(contarPalavrasLongas(["sol", "janela", "computador"], 4)); // 2
console.log(contarPalavrasLongas(["gato", "casa", "bola"], 4));        // 0
console.log(contarPalavrasLongas(["javascript", "JS", "código"], 2));  // 2
console.log(contarPalavrasLongas([], 3));                             // 0
console.log(contarPalavrasLongas(["ab", "abcd", "abcdef"], 3));       // 2
console.log(contarPalavrasLongas(["a", "bb", "ccc"], 1));             // 2

/*🧩 Q6 — Encontrar o menor valor positivo
Crie menorPositivo(numeros) para retornar o menor número estritamente positivo do array. Se não houver nenhum, retorne null.
Não utilize sort().*/

function menorPositivo(numeros) {
  let menor = null;

  for (let numero of numeros) {
    if (numero > 0) {
      if (menor === null || numero < menor) {
        menor = numero;
      }
    } else {
      continue;
    }
  }

  return menor;
}

console.log(menorPositivo([4, -2, 7, 1, 3])); // 1
console.log(menorPositivo([-5, 0, -1]));       // null
console.log(menorPositivo([8, 3, 5]));        // 3
console.log(menorPositivo([0, 2, 0, 1]));     // 1
console.log(menorPositivo([]));               // null
console.log(menorPositivo([10, 10, 4, 4]));   // 4