/* B5 — DESAFIO FINAL | PREPARAÇÃO CWI
   ========================================
   Q1 — VALIDADOR DE EXPRESSÕES
   ========================================
Crie uma função "validarExpressao(expressao)".
A função recebe uma string contendo parênteses "()", colchetes "[]" e chaves "{}" e deve verificar se todos os símbolos estão corretamente abertos e fechados.
REGRAS:
- Cada símbolo de abertura deve possuir um fechamento correspondente.
- Os fechamentos devem respeitar a ordem correta de abertura.
- Uma expressão vazia deve ser considerada válida.
- Outros caracteres devem ser ignorados.
- A função deve retornar "true" se a expressão for válida ou "false" caso contrário.
EXEMPLOS:
- ""({[]})"" → true
- ""([)]"" → false
- ""{[()]}"" → true
- ""((("" → false*/

function validarExpressao(expressao) {
  let pilha = [];

  for (let caractere of expressao) {

    if (caractere === "(" || caractere === "[" || caractere === "{") {
      pilha.push(caractere);

    } else if (caractere === ")" || caractere === "]" || caractere === "}") {

      if (pilha.length === 0) {
        return false;
      }

      let ultimo = pilha.pop();

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

// Testes principais
console.log(validarExpressao("({[]})")); // true
console.log(validarExpressao("([)]")); // false
console.log(validarExpressao("{[()]}")); // true
console.log(validarExpressao("(((")); // false
// Testes extras
console.log(validarExpressao("")); // true
console.log(validarExpressao("abc")); // true
console.log(validarExpressao("a+(b*c)-[d]")); // true
console.log(validarExpressao("{[(])}")); // false
console.log(validarExpressao("(()())")); // true
console.log(validarExpressao("]")); // false
console.log(validarExpressao("({[()]})")); // true
console.log(validarExpressao("((()))]")); // false
console.log(validarExpressao("{[}")); // false
console.log(validarExpressao("{{{{}}}}")); // true
console.log(validarExpressao("([{}])")); // true