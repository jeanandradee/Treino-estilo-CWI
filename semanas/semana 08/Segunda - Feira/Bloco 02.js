/* ========================================
   B2 — AS SETE HABILIDADES CWI
   ========================================
Q1 — Validador de senhas
Uma plataforma precisa validar as senhas
cadastradas pelos usuários.
Crie uma função validarSenha(senha).
A função deve verificar:
1. Se possui pelo menos 8 caracteres.
2. Se possui pelo menos uma letra maiúscula.
3. Se possui pelo menos uma letra minúscula.
4. Se possui pelo menos um número.
5. Se possui pelo menos um caractere especial.
Retorne um objeto contendo:
- tamanhoValido
- possuiMaiuscula
- possuiMinuscula
- possuiNumero
- possuiEspecial
- senhaValida
senhaValida será true somente se todas
as condições forem verdadeiras.
Considere como caractere especial qualquer
caractere que não seja letra nem número.
*/

function validarSenha(senha) {
  const tamanhoValido = senha.length >= 8;
  const possuiMaiuscula = /[A-Z]/.test(senha);
  const possuiMinuscula = /[a-z]/.test(senha);
  const possuiNumero = /[0-9]/.test(senha);
  const possuiEspecial = /[^a-zA-Z0-9]/.test(senha);

  const senhaValida =
    tamanhoValido &&
    possuiMaiuscula &&
    possuiMinuscula &&
    possuiNumero &&
    possuiEspecial;

  return {
    tamanhoValido,
    possuiMaiuscula,
    possuiMinuscula,
    possuiNumero,
    possuiEspecial,
    senhaValida
  }
}

console.log(validarSenha("JavaScript@2026"));
// Resultado esperado:
//
// {
//   tamanhoValido: true,
//   possuiMaiuscula: true,
//   possuiMinuscula: true,
//   possuiNumero: true,
//   possuiEspecial: true,
//   senhaValida: true
// }


/* ========================================
   Q2 — Configurações em JSON
Um aplicativo armazena as preferências
dos usuários em formato JSON.
Crie uma função carregarConfiguracoes(json).
O JSON pode possuir as propriedades:
- tema
- idioma
- notificacoes
Regras:
1. Converter o JSON para um objeto.
2. Se tema não existir, utilizar "claro".
3. Se idioma não existir, utilizar "pt-BR".
4. Se notificacoes não existir, utilizar true.
5. Se o JSON for inválido, retornar as
   configurações padrão.
Retorne sempre um objeto com as três
propriedades.
Importante:
Uma propriedade existente com valor false
deve continuar false.
Não confunda ausência de propriedade
com valor false.
*/


function carregarConfiguracoes(json) {
  const padrao = {
    tema: "claro",
    idioma: "pt-BR",
    notificacoes: true
  };

  try {
    const config = JSON.parse(json);

    return {
      tema: config.tema ?? padrao.tema,
      idioma: config.idioma ?? padrao.idioma,
      notificacoes: config.notificacoes ?? padrao.notificacoes
    };

  } catch (erro) {
    return padrao;
  }
}

console.log(carregarConfiguracoes(
  '{"tema":"escuro","idioma":"en-US","notificacoes":false}'
));


console.log(carregarConfiguracoes( '{"tema":"escuro","idioma":"en-US","notificacoes":false}' ));
// Resultado esperado:
//
// {
//   tema: "escuro",
//   idioma: "en-US",
//   notificacoes: false
// }

console.log(carregarConfiguracoes('{"tema":"escuro"}'));
// Resultado esperado:
//
// {
//   tema: "escuro",
//   idioma: "pt-BR",
//   notificacoes: true
// }


/* ========================================
   Q3 — Análise de matriz
Um sistema recebe uma matriz quadrada,
ou seja, uma matriz com a mesma quantidade
de linhas e colunas.
Crie uma função analisarMatriz(matriz).
Regras:
1. Calcular a soma da diagonal principal.
2. Calcular a soma da diagonal secundária.
3. Calcular a diferença absoluta entre
   as duas somas.
A diagonal principal vai do canto superior
esquerdo ao inferior direito.
A diagonal secundária vai do canto superior
direito ao inferior esquerdo.
Retorne um objeto contendo:
- somaPrincipal
- somaSecundaria
- diferenca
Considere que a matriz sempre será quadrada
e terá pelo menos uma linha.
*/

function analisarMatriz(matriz) {
  let somaPrincipal = 0;
  let somaSecundaria = 0;
  let diferenca = 0;

  for (let i = 0; i < matriz.length; i++) {
    somaPrincipal += matriz[i][i];
    somaSecundaria += matriz[i][matriz.length -1 -i];
  }
  diferenca = Math.abs(somaPrincipal - somaSecundaria);

  return {
    somaPrincipal,
    somaSecundaria,
    diferenca
  }
}

console.log(analisarMatriz([ [5, 2, 3], [4, 8, 6], [7, 1, 9] ]));
// Resultado esperado: { somaPrincipal: 22, somaSecundaria: 18, diferenca: 4 }


/* ========================================
   Q4 — Interpretador de operações
Um sistema recebe uma operação matemática
e dois números.
Crie uma função executarOperacao(operacao, a, b).
A função deve reconhecer:
- "somar": retorna a soma.
- "subtrair": retorna a diferença.
- "multiplicar": retorna o produto.
- "dividir": retorna a divisão.
Regras:
1. Utilizar uma estrutura de controle adequada
   para identificar a operação.
2. Se a operação não existir, retornar
   "Operação inválida".
3. Se tentar dividir por zero, retornar
   "Não é possível dividir por zero".
*/

function executarOperacao(operacao, a, b) {
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

console.log(executarOperacao("somar", 10, 5));      // 15
console.log(executarOperacao("multiplicar", 4, 3)); // 12
console.log(executarOperacao("dividir", 10, 0));    // "Não é possível dividir por zero"
console.log(executarOperacao("potencia", 2, 3));    // "Operação inválida"