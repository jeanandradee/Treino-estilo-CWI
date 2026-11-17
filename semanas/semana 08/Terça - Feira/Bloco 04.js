/* ========================================
   B4 — DESAFIOS INTEGRADOS
   ========================================
Q1 — Sistema de autenticação
Uma função recebe um objeto com:
- usuario: nome informado.
- senha: senha informada.
- bloqueado: indica se a conta está bloqueada.
Regras:
1. Se a conta estiver bloqueada, retorne
   "Conta bloqueada".
2. Se o usuário ou senha estiverem vazios,
   retorne "Dados incompletos".
3. O usuário correto é "admin".
4. A senha correta é "Cwi@2026".
5. A comparação do usuário deve ignorar
   maiúsculas e minúsculas.
6. A senha deve ser comparada exatamente,
   respeitando maiúsculas e minúsculas.
Retorne "Acesso permitido" quando os dados
estiverem corretos e a conta não estiver bloqueada.
Caso contrário, retorne "Credenciais inválidas".
Atenção à ordem de prioridade das regras.

*/

function autenticarUsuario(dados) {
  let { usuario, senha, bloqueado } = dados;

  if (bloqueado === true) {
    return "Conta bloqueada";
  }

  if (usuario === "" || senha === "") {
    return "Dados incompletos";
  }

  if (
    usuario.toLowerCase() === "admin" &&
    senha === "Cwi@2026"
  ) {
    return "Acesso permitido";
  }

  return "Credenciais inválidas";
}

console.log(autenticarUsuario({ usuario: "ADMIN", senha: "Cwi@2026", bloqueado: false }));  // "Acesso permitido"
console.log(autenticarUsuario({ usuario: "admin", senha: "errada", bloqueado: false }));    // "Credenciais inválidas"
console.log(autenticarUsuario({ usuario: "admin", senha: "Cwi@2026", bloqueado: true }));   // "Conta bloqueada"
console.log(autenticarUsuario({ usuario: "", senha: "Cwi@2026", bloqueado: false }));       // "Dados incompletos"

/* ========================================
   Q2 — Compactador de dados
Uma função recebe uma string contendo
caracteres repetidos consecutivamente.
Ela deve compactar a string, substituindo
cada sequência de caracteres repetidos
pelo caractere seguido da quantidade
de repetições.
Exemplo:
"aaabbc" deve retornar "a3b2c1".
Regras:
- A contagem considera apenas repetições
  consecutivas.
- Diferencie letras maiúsculas e minúsculas.
- Uma string vazia deve retornar "".
- Não utilize métodos prontos de compactação.
*/

function compactarTexto(texto) {
  if (texto === "") {
    return "";
  }

  let resultado = "";

  let contador = 1;

  for (let i = 1; i < texto.length; i++) {

    if (texto[i] === texto[i - 1]) {

      contador++;

    } else {

      resultado += texto[i - 1] + contador;
      contador = 1;
    }
  }

  resultado += texto[texto.length - 1] + contador;

  return resultado;
}

console.log(compactarTexto("aaabbc")); // "a3b2c1"
console.log(compactarTexto("AAAA"));   // "A4"
console.log(compactarTexto("aAa"));    // "a1A1a1"
console.log(compactarTexto(""));       // ""


/* ========================================
   Q3 — Gerenciador de pontos
Uma função recebe um objeto contendo:
- pontos: quantidade atual de pontos.
- operacao: tipo de operação.
- quantidade: quantidade de pontos
  que será adicionada ou removida.
Regras:
1. "adicionar": soma a quantidade aos pontos.
2. "remover": subtrai a quantidade dos pontos.
3. Não permita que o saldo fique negativo.
4. Se a operação for desconhecida,
   retorne "Operação inválida".
5. Se a quantidade for negativa ou não for
   um número válido, retorne "Quantidade inválida".
6. Retorne um novo objeto contendo:
   - pontosAnteriores
   - pontosAtuais
   - operacao
A comparação da operação deve ignorar
maiúsculas e minúsculas.
Se a remoção ultrapassar o saldo disponível,
retorne "Saldo insuficiente".
*/

function gerenciarPontos(dados) {
  let { pontos, operacao, quantidade } = dados;

  operacao = operacao.toLowerCase();

  if (
    typeof quantidade !== "number" ||
    !Number.isFinite(quantidade) ||
    quantidade < 0
  ) {
    return "Quantidade inválida";
  }

  if (operacao !== "adicionar" && operacao !== "remover") {
    return "Operação inválida";
  }

  const pontosAnteriores = pontos;

  if (operacao === "adicionar") {
    pontos += quantidade;
  } else {

    if (quantidade > pontos) {
      return "Saldo insuficiente";
    }

    pontos -= quantidade;
  }

  return {
    pontosAnteriores,
    pontosAtuais: pontos,
    operacao
  };
}

console.log(gerenciarPontos({ pontos: 100, operacao: "ADICIONAR", quantidade: 50 }));
// Resultado esperado: { pontosAnteriores: 100, pontosAtuais: 150, operacao: "adicionar" }

console.log(gerenciarPontos({ pontos: 100, operacao: "remover", quantidade: 30 }));
// Resultado esperado: { pontosAnteriores: 100, pontosAtuais: 70, operacao: "remover" }

console.log(gerenciarPontos({ pontos: 20, operacao: "remover", quantidade: 30 }));
// "Saldo insuficiente"

console.log(gerenciarPontos({ pontos: 100, operacao: "transferir", quantidade: 10 }));
// "Operação inválida"