/* Q1 — Classificador de acesso
Uma função recebe:
- idade
- possuiConvite (boolean)
Regras:
- Menor de 18 anos: "Acesso negado".
- 18 anos ou mais e com convite:
  "Acesso liberado".
- 18 anos ou mais e sem convite:
  "Convite necessário".
Retorne a mensagem correspondente.

*/

function verificarAcesso(idade, possuiConvite) {
  return idade < 18 ? "Acesso negado"
    : possuiConvite ? "Acesso liberado" 
    : "Convite necessário";
}

console.log(verificarAcesso(16, true));   // "Acesso negado"
console.log(verificarAcesso(25, true));   // "Acesso liberado"
console.log(verificarAcesso(25, false));  // "Convite necessário"


/* ========================================
   Q2 — Análise de palavra
Uma função recebe uma palavra.
Retorne um objeto contendo:
- palavra: a palavra original.
- tamanho: quantidade de caracteres.
- primeiraLetra: primeiro caractere.
- ultimaLetra: último caractere.
Considere que a entrada sempre possui
pelo menos um caractere.
*/

function analisarPalavra(palavra) {
  let tamanho = palavra.length;
  let primeiraLetra = tamanho > 0 ? palavra[0] : null;
  let ultimaLetra = tamanho > 0 ? palavra[palavra.length - 1] : null;

  return {
    palavra,
    tamanho,
    primeiraLetra,
    ultimaLetra
  }
}

console.log(analisarPalavra("JavaScript"));
// { palavra: "JavaScript", tamanho: 10, primeiraLetra: "J", ultimaLetra: "t" }


/* ========================================
   Q3 — Atualização de perfil
Uma função recebe um objeto de usuário
e um novo nome.
Retorne um novo objeto com todas as
propriedades originais, mas com o nome
atualizado.
Não modifique o objeto original.
*/

function atualizarPerfil(usuario, novoNome) {
  return {
    ...usuario,
    nome: novoNome
  };
}

console.log(atualizarPerfil({ nome: "Carlos", idade: 22, ativo: true}, "Lucas"));
// { nome: "Lucas", idade: 22, ativo: true }


/* ========================================
   Q4 — Interpretação de código
Retorne um objeto com os valores finais
de pontos e bonus.
Não altere as regras do código.
*/

function interpretarCodigo(pontos, bonus) {

  for (let i = 1; i <= 4; i++) {
    if (i % 2 === 0) {
      pontos += 3;
    } else {
      pontos -= 2;
      bonus++;
    }
  }

  return {
    pontos,
    bonus
  };
}

console.log(interpretarCodigo(10, 0));
// { pontos: 12, bonus: 2 }