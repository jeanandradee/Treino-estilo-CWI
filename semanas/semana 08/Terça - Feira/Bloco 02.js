/* ========================================
   B2 — SETE HABILIDADES CWI
   ========================================
Q1 — Configuração de usuário (JSON)
Uma função recebe uma string JSON contendo
as configurações de um usuário.
A função deve converter o JSON e retornar
um objeto com estas propriedades:
- nome: se não existir, utilizar "Visitante".
- ativo: se não existir, utilizar true.
- nivel: se não existir, utilizar 1.
Regras:
- Se uma propriedade existir com valor false,
  zero ou string vazia, preserve esse valor.
- Se o JSON for inválido, retorne os valores padrão.
- Não altere o objeto original.
*/

function configurarUsuario(json) {
  try {
    let usuario = JSON.parse(json);

    return {
      nome: usuario.nome ?? "Visitante",
      ativo: usuario.ativo ?? true,
      nivel: usuario.nivel ?? 1
    };

  } catch (erro) {
    return {
      nome: "Visitante",
      ativo: true,
      nivel: 1
    };
  }
}

console.log(configurarUsuario('{"nome":"Ana","ativo":false,"nivel":0}'));
// Resultado esperado: { nome: "Ana", ativo: false, nivel: 0 }

console.log(configurarUsuario('{"nome":"Carlos"}'));
// Resultado esperado: { nome: "Carlos", ativo: true, nivel: 1 }

console.log(configurarUsuario('{"nome":'));
// Resultado esperado: { nome: "Visitante", ativo: true, nivel: 1 }


/* ========================================
   Q2 — Validador de identificador (String)
Uma função recebe uma string e verifica
se ela pode ser utilizada como identificador.
Regras:
1. Deve possuir entre 5 e 12 caracteres.
2. Deve começar com uma letra.
3. Pode conter letras, números e underline.
4. Não pode conter espaços.
5. A comparação deve aceitar letras
   maiúsculas e minúsculas.
Retorne true se for válido e false caso contrário.
*/

function validarIdentificador(texto) {
  const regex = /^[a-zA-Z][a-zA-Z0-9_]{4,11}$/;

  return regex.test(texto);
}

console.log(validarIdentificador("Usuario_1"));   // true
console.log(validarIdentificador("1Usuario"));    // false
console.log(validarIdentificador("Ana 123"));     // false
console.log(validarIdentificador("Jo"));          // false
console.log(validarIdentificador("Nome@123"));    // false

/* ========================================
   Q3 — Calculadora com função de retorno
Crie uma função que recebe:
- a: primeiro número.
- b: segundo número.
- operacao: operação desejada.
Operações permitidas:
- "somar"
- "subtrair"
- "multiplicar"
- "dividir"
A função deve retornar o resultado da operação.
Regras:
- Se a operação for desconhecida, retorne
  "Operação inválida".
- Se tentar dividir por zero, retorne
  "Não é possível dividir por zero".
- A comparação da operação deve ignorar
  maiúsculas e minúsculas.
*/

function calculadora(a, b, operacao) {
  operacao = operacao.toLowerCase();

  switch (operacao) {
    case "somar":
      return a + b;

    case "subtrair":
      return a - b;

    case "multiplicar":
      return a * b;

    case "dividir":
      if (b === 0) {
        return "Não é possível dividir por zero";
      }

      return a / b;

    default:
      return "Operação inválida";
  }
}

console.log(calculadora(10, 5, "somar"));        // 15
console.log(calculadora(10, 5, "MULTIPLICAR"));  // 50
console.log(calculadora(10, 0, "dividir"));      // "Não é possível dividir por zero"
console.log(calculadora(10, 5, "potencia"));     // "Operação inválida"

/* ========================================
   Q4 — Interpretação de código
Analise o código abaixo.
Sem executar mentalmente apenas o resultado
final: acompanhe as alterações das variáveis
passo a passo.
Identifique qual será o resultado retornado
pela função e explique por quê.
*/

function analisarResultado() {
  let numero = 5;
  let resultado = 0;

  for (let i = 1; i <= 3; i++) {
    if (i % 2 === 0) {
      numero += i;
    } else {
      numero -= 1;
    }

    resultado += numero;
  }

  return {
    numero,
    resultado
  };
}

console.log(analisarResultado());
// Resultado esperado: { numero: 5, resultado: 15 }