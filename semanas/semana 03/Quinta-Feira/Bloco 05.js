/*
B5 — Interpretador de Operações

Você está criando uma calculadora simples.

Crie a função interpretarOperacao(a, operador, b), que recebe:
- a: primeiro número;
- operador: uma string com "+", "-", "*" ou "/";
- b: segundo número.

Regras:
1. Se o operador for "+", retorne a soma.
2. Se for "-", retorne a subtração de a por b.
3. Se for "*", retorne a multiplicação.
4. Se for "/", retorne a divisão de a por b.
5. Se o operador for inválido, retorne null.
6. Se o operador for "/" e b for zero, retorne null.

Não altere os parâmetros recebidos.
*/

function interpretarOperacao(a, operador, b) {
  if (operador === "+") {
    return a + b;
  } else if (operador === "-") {
    return a - b;
  } else if (operador === "*") {
    return a * b;
  } else if (operador === "/") {
    if (b === 0) {
      return null;
    }
    return a / b;
  }


  return null
}

console.log(interpretarOperacao(10, "+", 5));
// Esperado: 15

console.log(interpretarOperacao(10, "-", 15));
// Esperado: -5

console.log(interpretarOperacao(4, "*", 3));
// Esperado: 12

console.log(interpretarOperacao(20, "/", 4));
// Esperado: 5

console.log(interpretarOperacao(8, "/", 0));
// Esperado: null

console.log(interpretarOperacao(7, "%", 2));
// Esperado: null