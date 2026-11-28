/* B4 — SIMULAÇÃO PRÁTICA | CWI
   ========================================
   Q1 — VALIDADOR DE EXPRESSÕES
   ========================================
Crie uma função "validarExpressao(expressao)".
A função recebe uma string contendo uma expressão matemática simplificada e deve verificar se os símbolos de agrupamento estão corretamente abertos e fechados.
Símbolos considerados:
- "(" e ")"
- "[" e "]"
- "{" e "}"
A função deve retornar "true" se todos os símbolos estiverem corretamente balanceados e "false" caso contrário.
REGRAS:
- Todo símbolo aberto deve possuir seu fechamento correspondente.
- A ordem de fechamento deve ser respeitada.
- Símbolos de tipos diferentes não podem ser fechados incorretamente.
- Outros caracteres devem ser ignorados.
- Uma string vazia é considerada válida.
*/

function validarExpressao(expressao) {
  const pilha = [];

  for (let i = 0; i < expressao.length; i++) {
    const caractere = expressao[i];

    if (
      caractere === "(" ||
      caractere === "[" ||
      caractere === "{"
    ) {
      pilha.push(caractere);
    } else if (
      caractere === ")" ||
      caractere === "]" ||
      caractere === "}"
    ) {
      if (pilha.length === 0) {
        return false;
      }

      const ultimo = pilha.pop();

      if (
        (caractere === ")" && ultimo !== "(") ||
        (caractere === "]" && ultimo !== "[") ||
        (caractere === "}" && ultimo !== "{")
      ) {
        return false;
      }
    }
  }

  return pilha.length === 0;
}

console.log(validarExpressao("(A+B)"));             // true
console.log(validarExpressao("{[A+B]*(C-D)}"));     // true
console.log(validarExpressao("([)]"));              // false
console.log(validarExpressao("((A+B)"));            // false
console.log(validarExpressao("A+B)"));              // false
console.log(validarExpressao("{[()]}"));            // true
console.log(validarExpressao(""));                  // true


/* ========================================
   Q2 — ANALISADOR DE MOVIMENTAÇÃO
   ========================================
Crie uma função "analisarMovimentacao(movimentos)".
A função recebe um array de números inteiros representando movimentações de um saldo.
- Números positivos representam créditos.
- Números negativos representam débitos.
- Zero representa uma movimentação sem alteração.
Retorne um objeto contendo:
- "totalCreditos": soma de todos os valores positivos.
- "totalDebitos": soma dos valores negativos em valor absoluto.
- "saldoFinal": soma de todas as movimentações.
- "maiorCredito": maior movimentação positiva encontrada, ou "0" se não houver crédito.
- "quantidadeMovimentos": quantidade total de elementos do array.
REGRAS:
- Não modifique o array original.
- Considere números negativos, positivos e zero.
- Se o array estiver vazio, todos os valores numéricos devem retornar zero.
*/

function analisarMovimentacao(movimentos) {
  let totalCreditos = 0;
  let totalDebitos = 0;
  let saldoFinal = 0;
  let maiorCredito = 0;

  for (let i = 0; i < movimentos.length; i++) {
    const valor = movimentos[i];

    if (valor > 0) {
      totalCreditos += valor;

      if (valor > maiorCredito) {
        maiorCredito = valor;
      }
    }

    else if (valor < 0) {
      totalDebitos += Math.abs(valor);
    }

    saldoFinal += valor;
  }

  return {
    totalCreditos,
    totalDebitos,
    saldoFinal,
    maiorCredito,
    quantidadeMovimentos: movimentos.length
  };
}

console.log(analisarMovimentacao([100, -30, 50, -10, 0]));
// { totalCreditos: 150, totalDebitos: 40, saldoFinal: 110, maiorCredito: 100, quantidadeMovimentos: 5 }

console.log(analisarMovimentacao([-20, -10, 0]));
// { totalCreditos: 0, totalDebitos: 30, saldoFinal: -30, maiorCredito: 0, quantidadeMovimentos: 3 }

console.log(analisarMovimentacao([15, 25, 40]));
// { totalCreditos: 80, totalDebitos: 0, saldoFinal: 80, maiorCredito: 40, quantidadeMovimentos: 3 }

console.log(analisarMovimentacao([]));
// { totalCreditos: 0, totalDebitos: 0, saldoFinal: 0, maiorCredito: 0, quantidadeMovimentos: 0 }

/* ========================================
   Q3 — DECODIFICADOR DE SEQUÊNCIA
   ========================================
Crie uma função "decodificarSequencia(sequencia)".
A função recebe uma string contendo letras seguidas de números.
Cada letra deve ser repetida a quantidade de vezes indicada pelo número que vem imediatamente depois dela.
Exemplo:
""A3B2C1"" deve gerar ""AAABBC"".
Retorne a string decodificada.
REGRAS:
- Cada letra será seguida por um número inteiro positivo.
- Considere letras maiúsculas e minúsculas.
- Uma letra pode ser seguida por números com mais de um algarismo.
- A sequência será sempre válida.
- Não utilize "repeat()".
*/

function decodificarSequencia(sequencia) {
  let resultado = "";
  let i = 0;

  while (i < sequencia.length) {
    const letra = sequencia[i];

    i++;

    let numero = "";

    while (i < sequencia.length && sequencia[i] >= "0" && sequencia[i] <= "9") {
      numero += sequencia[i];
      i++;
    }

    const quantidade = Number(numero);

    for (let j = 0; j < quantidade; j++) {
      resultado += letra;
    }
  }

  return resultado;
}


console.log(decodificarSequencia("A3B2C1"));    // "AAABBC"
console.log(decodificarSequencia("X4"));        // "XXXX"
console.log(decodificarSequencia("A10B2"));     // "AAAAAAAAAABB"
console.log(decodificarSequencia("a2B3"));      // "aaBBB"
console.log(decodificarSequencia("C1D1E1"));    // "CDE"   