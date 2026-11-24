/* ========================================
   B1 — PRÁTICA CWI
   ======================================== 
   Q1 — Validador de identificador
Crie uma função validarIdentificador(texto).
Regras:
- Deve possuir pelo menos 5 caracteres.
- Não pode conter espaços.
- Deve começar com uma letra.
- Deve terminar com um número.
Retorne true ou false.
*/

function validarIdentificador(texto) {
  if (typeof texto !== "string" || texto.length < 5) {
    return false;
  }

  const primeiroCaracter = texto[0].toLowerCase();
  const ultimoCaracter = texto[texto.length - 1];

  return !texto.includes(" ") &&
         primeiroCaracter >= "a" &&
         primeiroCaracter <= "z" &&
         ultimoCaracter >= "0" &&
         ultimoCaracter <= "9";
} 
console.log(validarIdentificador("Usuario7")); // true
console.log(validarIdentificador("7Usuario")); // false
console.log(validarIdentificador("User 7"));   // false
console.log(validarIdentificador("Ana"));      // false

/* Q2 — Interpretando objetos
Crie uma função resumirUsuario(usuario).
O objeto possui:
- nome
- idade
- ativo
Retorne uma string neste formato:
"Nome: Ana | Idade: 25 | Status: Ativo"
Se ativo for false, o status deve ser "Inativo".
*/

function resumirUsuario(usuario) {
  const { nome, idade, ativo } = usuario;
  const status = ativo ? "Ativo" : "Inativo";

  return `Nome: ${nome} | Idade: ${idade} | Status: ${status}`;
}
console.log(resumirUsuario({ nome: "Ana", idade: 25, ativo: true }));
// "Nome: Ana | Idade: 25 | Status: Ativo"


/* Q3 — Análise de matriz
Crie uma função analisarMatriz(matriz).
A função deve retornar um objeto contendo:
- totalElementos: quantidade total de números.
- totalPares: quantidade de números pares.
- maiorNumero: maior número encontrado.
Considere que a matriz pode possuir linhas vazias.
Se não houver números, maiorNumero deve ser null.
*/


function analisarMatriz(matriz) {
  let totalElementos = 0;
  let totalPares = 0;
  let maiorNumero = null;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const numero = matriz[i][j];

      totalElementos++;

      if (numero % 2 === 0) {
        totalPares++;
      }

      if (maiorNumero === null || numero > maiorNumero) {
        maiorNumero = numero;
      }
    }
  } 

  return {
    totalElementos,
    totalPares,
    maiorNumero
  }
}

console.log(analisarMatriz([ [2, 5, 8], [], [3, 10] ]));
// { totalElementos: 5, totalPares: 3, maiorNumero: 10 }

console.log(analisarMatriz([[], []]));
// { totalElementos: 0, totalPares: 0, maiorNumero: null }

/* Q4 — Controle de tentativas
Observe o código e crie uma função
analisarTentativas(tentativas).
Cada tentativa possui:
- usuario
- sucesso
Retorne um objeto contendo:
- total: quantidade de tentativas.
- sucessos: quantidade de tentativas bem-sucedidas.
- falhas: quantidade de tentativas malsucedidas.
- taxaSucesso: percentual de sucesso.
Se o array estiver vazio, taxaSucesso deve ser 0.
*/

function analisarTentativas(tentativas) {
  const total = tentativas.length;
  
  const sucessos = tentativas.filter(tentativa => tentativa.sucesso)

  const falhas = total - sucessos.length;

  const taxaSucesso = total === 0 ? 0 : (sucessos.length / total) * 100;
  
  
  return {
    total,
    sucessos: sucessos.length,
    falhas,
    taxaSucesso
  } 
}
console.log(analisarTentativas([ { usuario: "Ana", sucesso: true }, { usuario: "João", sucesso: false },
 { usuario: "Bia", sucesso: true }, { usuario: "Leo", sucesso: true } ]));
// { total: 4, sucessos: 3, falhas: 1, taxaSucesso: 75 }

console.log(analisarTentativas([]));
// { total: 0, sucessos: 0, falhas: 0, taxaSucesso: 0 }