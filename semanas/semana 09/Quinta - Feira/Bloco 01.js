/* B1 — PRÁTICO
   ========================================
   Q1 — CONTADOR DE LETRAS NA MATRIZ
   ========================================
Crie uma função contarLetraMatriz(matriz, letra).
A função recebe:
- matriz: array contendo várias palavras.
- letra: caractere que será procurado.
A função deve retornar um objeto contendo:
- quantidade: total de vezes que a letra aparece.
- palavrasEncontradas: quantidade de palavras que
  possuem pelo menos uma ocorrência da letra.
REGRAS:
- A comparação deve ignorar maiúsculas e minúsculas.
- Conte todas as ocorrências, inclusive quando
  a mesma letra aparece várias vezes na palavra.
- Cada palavra deve ser contada apenas uma vez
  em palavrasEncontradas.
- Se a matriz estiver vazia, retorne os dois
  contadores zerados.
*/

function contarLetraMatriz(matriz, letra) {
  let quantidade = 0;
  let palavrasEncontradas = 0;

  for (let i = 0 ; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      let palavra = matriz[i][j].toLowerCase();

      if (palavra.includes(letra.toLowerCase())) {
        palavrasEncontradas ++;
      }

      for (let k = 0; k < palavra.length; k++) {
        if (palavra[k] === letra.toLowerCase()) {
          quantidade ++ ;
        }
      }
    }
  }

  return {
    quantidade,
    palavrasEncontradas
  };
}

const palavras = [
["banana", "abacaxi"],
["uva", "laranja"],
["morango", "abacate"]
];

console.log("Testes questão 1")
console.log(contarLetraMatriz(palavras, "a"));
// { quantidade: 14, palavrasEncontradas: 6 }
console.log(contarLetraMatriz(palavras, "B"));
// { quantidade: 3, palavrasEncontradas: 3 }
console.log(contarLetraMatriz([["casa", "bola"]], "z"));
// { quantidade: 0, palavrasEncontradas: 0 }
console.log(contarLetraMatriz([], "a"));
// { quantidade: 0, palavrasEncontradas: 0 }
console.log("Testes Extras Q1"); // TESTES EXTRAS Q1
console.log(contarLetraMatriz([["banana"]], "a"));
// { quantidade: 3, palavrasEncontradas: 1 }
console.log(contarLetraMatriz([["AbAbA", "banana"]], "A"));
// { quantidade: 6, palavrasEncontradas: 2 }
console.log(contarLetraMatriz([["casa", "bola"]], "Z"));
// { quantidade: 0, palavrasEncontradas: 0 }
console.log(contarLetraMatriz([["AAAA", "aaaa"]], "a"));
// { quantidade: 8, palavrasEncontradas: 2 }
console.log(contarLetraMatriz([["JavaScript", "PYTHON"]], "p"));
// { quantidade: 2, palavrasEncontradas: 2 }
console.log("=================================================================")


/* ========================================
   Q2 — INVERSOR DE PALAVRAS
   ========================================
Crie uma função inverterPalavras(frase).
A função deve inverter individualmente cada palavra
da frase, mantendo a ordem original das palavras.
REGRAS:
- Não inverta a frase inteira.
- Preserve os espaços entre as palavras.
- Utilize um laço para inverter os caracteres.
- Não utilize reverse().
- Se a frase estiver vazia, retorne "".
*/

function inverterPalavras(frase) {
  let resultado = "";
  let palavras = frase.split(" ");

  for (let palavra of palavras) {
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
      invertida += palavra[i];
    }

    resultado += invertida + " ";
  }

  return resultado.trimEnd();
}

console.log("Testes questão 2")
console.log(inverterPalavras("JavaScript é legal"));        // "tpircSavaJ é lagel"
console.log(inverterPalavras("casa azul"));                 // "asac luza"
console.log(inverterPalavras("Olá mundo"));                 // "álO odnum"
console.log(inverterPalavras(""));                          // ""
console.log("Testes Extras Q2"); // TESTES EXTRAS Q2
console.log(inverterPalavras("a b c"));                     // "a b c"
console.log(inverterPalavras("um dois tres quatro"));       // "mu siod sert ortauq"
console.log(inverterPalavras("x"));                         // "x"
console.log(inverterPalavras("programar é muito legal"));   // "ramargorp é otium lagel"
console.log(inverterPalavras("oi mundo teste"));            // "io odnum etset"
console.log(inverterPalavras(""));                          // ""
console.log("=================================================================")

/* ========================================
   Q3 — CONVERSOR DE NÚMEROS ROMANOS
   ========================================
Crie uma função converterRomano(numero).
A função recebe um número inteiro entre 1 e 20
e deve retornar sua representação em algarismos romanos.
REGRAS:
- Considere apenas valores de 1 até 20.
- Utilize estruturas de controle.
- Não utilize bibliotecas externas.
- Não retorne o número em formato de texto comum.
Exemplos:
1 = I
4 = IV
5 = V
9 = IX
10 = X
14 = XIV
19 = XIX
20 = XX
*/

function converterRomano(numero) {
  let resultado = "";

  if (numero < 1 || numero > 20) {
    return null;
  }

  if (numero === 20) return "XX";

  if (numero >= 10) {
    resultado += "X";
    numero -= 10;
  }

  if (numero === 9) return resultado + "IX";

  if (numero >= 5) {
    resultado += "V";
    numero -= 5;
  }

  if (numero === 4) return resultado + "IV";

  for (let i = 0; i < numero; i++) {
    resultado += "I";
  }

  return resultado;
}
console.log("Testes questão 3")
console.log(converterRomano(1));     // "I"
console.log(converterRomano(4));     // "IV"
console.log(converterRomano(9));     // "IX"
console.log(converterRomano(14));    // "XIV"
console.log(converterRomano(19));    // "XIX"
console.log(converterRomano(20));    // "XX"
console.log("Testes Extras Q3"); // TESTES EXTRAS Q3
console.log(converterRomano(2));     // "II"
console.log(converterRomano(3));     // "III"
console.log(converterRomano(5));     // "V"
console.log(converterRomano(6));     // "VI"
console.log(converterRomano(8));     // "VIII"
console.log(converterRomano(10));    // "X"
console.log(converterRomano(11));    // "XI"
console.log(converterRomano(13));    // "XIII"
console.log(converterRomano(15));    // "XV"
console.log(converterRomano(18));    // "XVIII"
console.log(converterRomano(7));     // "VII"
console.log(converterRomano(12));    // "XII"
console.log(converterRomano(16));    // "XVI"
console.log(converterRomano(17));    // "XVII"
console.log("=================================================================")

/* ========================================
   Q4 — IDENTIFICADOR DE SEQUÊNCIA
   ========================================
Crie uma função analisarSequencia(numeros).
A função recebe um array de números inteiros.
Deve retornar um objeto contendo:
- crescente: true se cada número for maior que
  o anterior.
- decrescente: true se cada número for menor que
  o anterior.
- constante: true se todos os números forem iguais.
REGRAS:
- Se o array tiver apenas um elemento,
  os três resultados devem ser true.
- Se estiver vazio, retorne null.
- Se a sequência não se encaixar em uma categoria,
  os resultados correspondentes devem ser false.
*/

function analisarSequencia(numeros) {
  if (numeros.length === 0) {
    return null;
  }

  let crescente = true;
  let decrescente = true;
  let constante = true;

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] <= numeros[i - 1]) {
      crescente = false;
    } 
    
    if (numeros[i] >= numeros[i - 1]) {
      decrescente = false;
    } 

    if (numeros[i] !== numeros[i - 1]) {
      constante = false;
    }
  }

  return {
    crescente, 
    decrescente,
    constante
  }
}

console.log(analisarSequencia([1, 2, 3, 4]));
// { crescente: true, decrescente: false, constante: false }
console.log(analisarSequencia([9, 7, 5, 3]));
// { crescente: false, decrescente: true, constante: false }
console.log(analisarSequencia([5, 5, 5]));
// { crescente: false, decrescente: false, constante: true }
console.log(analisarSequencia([1, 3, 2]));
// { crescente: false, decrescente: false, constante: false }
console.log(analisarSequencia([8]));
// { crescente: true, decrescente: true, constante: true }
console.log(analisarSequencia([]));
// null
// TESTES EXTRAS Q4
// Dois números iguais
console.log(analisarSequencia([4, 4]));
// { crescente: false, decrescente: false, constante: true }
console.log(analisarSequencia([7, 7]));
// { crescente: false, decrescente: false, constante: true }
// Sequência alternada
console.log(analisarSequencia([1, 3, 1, 3]));
// { crescente: false, decrescente: false, constante: false }
console.log(analisarSequencia([2, 5, 2, 5]));
// { crescente: false, decrescente: false, constante: false }
// Números negativos
console.log(analisarSequencia([-5, -3, -1]));
// { crescente: true, decrescente: false, constante: false }
console.log(analisarSequencia([-1, -3, -5]));
// { crescente: false, decrescente: true, constante: false }
console.log(analisarSequencia([-4, -4, -4]));
// { crescente: false, decrescente: false, constante: true }
// Um único elemento
console.log(analisarSequencia([10]));
// { crescente: true, decrescente: true, constante: true }
console.log(analisarSequencia([-8]));
// { crescente: true, decrescente: true, constante: true }
// Outros casos
console.log(analisarSequencia([1, 2]));
// { crescente: true, decrescente: false, constante: false }
console.log(analisarSequencia([2, 1]));
// { crescente: false, decrescente: true, constante: false }
console.log(analisarSequencia([3, 2, 2, 1]));
// { crescente: false, decrescente: false, constante: false }
console.log(analisarSequencia([0, 0, 1, 1]));
// { crescente: false, decrescente: false, constante: false }