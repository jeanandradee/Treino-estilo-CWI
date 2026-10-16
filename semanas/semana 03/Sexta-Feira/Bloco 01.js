/* B1 — QUESTÃO 1: Controle de Acesso
Um sistema precisa decidir se uma pessoa pode entrar em uma sala restrita.
Crie a função verificarAcesso(idade, autorizado).
Regras:
- A pessoa precisa ter pelo menos 18 anos.
- A autorização precisa ser true.
- Retorne true somente quando as duas condições forem atendidas.
- Nos demais casos, retorne false.
*/

function verificarAcesso(idade, autorizado) {
  return idade >= 18 && autorizado ? true : false;
}

console.log(verificarAcesso(20, true));   // Esperado: true
console.log(verificarAcesso(17, true));   // Esperado: false
console.log(verificarAcesso(20, false));  // Esperado: false
console.log(verificarAcesso(18, true));   // Esperado: true
console.log(verificarAcesso(18, false));  // Esperado: false
console.log(verificarAcesso(15, false));  // Esperado: false


/* B1 — QUESTÃO 2: Histórico de Navegação
Um navegador guarda as páginas visitadas em um array.
Crie a função obterPaginaAnterior(historico).
Regras:
- Retorne a penúltima página do histórico.
- Se houver menos de duas páginas, retorne null.
- Não altere o array original.
*/

function obterPaginaAnterior(historico) {
  return historico.length >= 2 ? historico[historico.length -2] : null;
}

console.log(obterPaginaAnterior(["inicio", "perfil", "ajuda"])); 
// Esperado: "perfil"

console.log(obterPaginaAnterior(["home", "contato"])); 
// Esperado: "home"

console.log(obterPaginaAnterior(["painel"])); 
// Esperado: null

console.log(obterPaginaAnterior([])); 
// Esperado: null

console.log(obterPaginaAnterior(["A", "B", "C", "D"])); 
// Esperado: "C"

console.log(obterPaginaAnterior(["login", "dashboard"])); 
// Esperado: "login"


/* B1 — QUESTÃO 3: Análise de Mensagens
Um sistema recebe mensagens e precisa descobrir quantas estão vazias.
Crie a função contarMensagensVazias(mensagens).
Regras:
- Uma mensagem é considerada vazia quando é exatamente "".
- Strings com espaços não são consideradas vazias.
- Retorne a quantidade de mensagens vazias.
*/

function contarMensagensVazias(mensagens) {
  let contador = 0;
  for (let mensagem of mensagens) {
    if (mensagem === "") {
      contador ++;
    }
  }

  return contador;
}

console.log(contarMensagensVazias(["oi", "", "tudo bem", ""])); 
// Esperado: 2

console.log(contarMensagensVazias(["A", "B", "C"])); 
// Esperado: 0

console.log(contarMensagensVazias(["", "", ""])); 
// Esperado: 3

console.log(contarMensagensVazias([])); 
// Esperado: 0

console.log(contarMensagensVazias([" ", "", "  "])); 
// Esperado: 1

console.log(contarMensagensVazias(["teste", "", "fim", "ok"])); 
// Esperado: 1

    