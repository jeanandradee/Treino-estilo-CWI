/* ========================================
   B2 — CONSTRUÇÃO E LÓGICA
   ========================================
   Q1 — Validador de senha
Uma função recebe uma senha (string).
Regras:
- Menos de 8 caracteres: "Senha fraca".
- 8 ou mais caracteres e sem número: "Senha média".
- 8 ou mais caracteres e contendo pelo menos um número: "Senha forte".
Retorne a mensagem correspondente.
*/

function validarSenha(senha) {
  let temNumero = false;

  for (let c of senha) {
    if (c >= "0" && c <= "9") {
      temNumero = true;
    }
  }

  return senha.length < 8 ? "Senha fraca"
    : temNumero === false ? "Senha média" 
    : "Senha forte";
}

console.log(validarSenha("abc"));          // "Senha fraca"
console.log(validarSenha("abcdefgh"));     // "Senha média"
console.log(validarSenha("abc12345"));     // "Senha forte"
console.log(validarSenha("1234567"));      // "Senha fraca"
console.log(validarSenha("javascript"));   // "Senha média"
console.log(validarSenha("JavaScript9"));  // "Senha forte"


/* ========================================
   Q2 — Conversor de temperatura
Uma função recebe:
- temperatura: valor numérico.
- escala: "C" ou "F".
Regras:
- "C": converter Celsius para Fahrenheit.
- "F": converter Fahrenheit para Celsius.
- Outra escala: retornar "Escala inválida".
Fórmulas:
F = (C * 9/5) + 32
C = (F - 32) * 5/9
Retorne o resultado numérico.
*/

function converterTemperatura(temperatura, escala) {
  return escala === "F" ? (temperatura - 32) * 5/9
    : escala === "C" ? (temperatura * 9/5) + 32 
    : "Escala inválida";
}

console.log(converterTemperatura(0, "C"));      // 32
console.log(converterTemperatura(100, "C"));    // 212
console.log(converterTemperatura(25, "C"));     // 77
console.log(converterTemperatura(32, "F"));     // 0
console.log(converterTemperatura(212, "F"));    // 100
console.log(converterTemperatura(77, "F"));     // 25
console.log(converterTemperatura(30, "K"));     // "Escala inválida"


/* ========================================
   Q3 — Controle de pontos
Uma função recebe um objeto contendo:
- pontos
- nivel
Regras:
- Se pontos forem iguais ou superiores a 100,
  aumente o nível em 1.
- Caso contrário, mantenha o nível.
- Retorne um novo objeto.
- Não modifique o objeto original.
*/

function atualizarNivel(usuario) {
  return {
    ...usuario,
    nivel: usuario.pontos >= 100
      ? usuario.nivel + 1
      : usuario.nivel
  };
}

console.log(atualizarNivel({ pontos: 100, nivel: 1 }));  // { pontos: 100, nivel: 2 }
console.log(atualizarNivel({ pontos: 150, nivel: 3 }));  // { pontos: 150, nivel: 4 }
console.log(atualizarNivel({ pontos: 99, nivel: 2 }));   // { pontos: 99, nivel: 2 }
console.log(atualizarNivel({ pontos: 50, nivel: 5 }));   // { pontos: 50, nivel: 5 }
console.log(atualizarNivel({ pontos: 200, nivel: 10 })); // { pontos: 200, nivel: 11 }


/* ========================================
   Q4 — Interpretação de execução
Responda:
1. Qual o resultado de executar(10)?
2. Quantas vezes acontece a soma?
3. Quantas vezes acontece a subtração?
4. Explique como o laço chega ao resultado.

Crie uma função interpretarExecucao()
que retorne um objeto com as respostas.
*/

function interpretarExecucao() {
  let resultado = 0;
  let quantidadeSomas = 0;
  let quantidadeSubtracoes = 0;
  let valor = 10;

  for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
      resultado += valor;
      quantidadeSomas++;
    } else {
      resultado -= i;
      quantidadeSubtracoes++;
    }
  }

  return {
    resultado,
    quantidadeSomas,
    quantidadeSubtracoes,
    explicacao: "O laço percorre de 1 até 5. Nos números pares (2 e 4), soma 10 ao resultado. Nos ímpares (1, 3 e 5), subtrai o próprio número."
  };
}


console.log(interpretarExecucao());
// Resultado esperado:
// {
//   resultado: 14,
//   quantidadeSomas: 2,
//   quantidadeSubtracoes: 3,
//   explicacao: "O laço percorre de 1 até 5. Nos números pares (2 e 4), soma 10 ao resultado. Nos ímpares (1, 3 e 5), subtrai o próprio número."
// }