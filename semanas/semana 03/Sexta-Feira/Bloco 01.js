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


/* B1 — QUESTÃO 4: Organizador de Fila
Uma fila de atendimento precisa ser reorganizada sem perder a ordem das pessoas.
Crie a função inverterFila(fila).
Regras:
- Retorne um novo array com os elementos na ordem inversa.
- Não altere o array original.
- Não utilize reverse().
*/

function inverterFila(fila) {
  let resultado = [];

  for (let i = fila.length -1; i >= 0; i--) {
    resultado.push(fila[i]);
  }

  return resultado;
}

console.log(inverterFila(["Ana", "Bia", "Caio"])); 
// Esperado: ["Caio", "Bia", "Ana"]

console.log(inverterFila([1, 2, 3, 4])); 
// Esperado: [4, 3, 2, 1]

console.log(inverterFila(["A"])); 
// Esperado: ["A"]

console.log(inverterFila([])); 
// Esperado: []

console.log(inverterFila([10, 20])); 
// Esperado: [20, 10]

console.log(inverterFila(["x", "y", "z", "w"])); 
// Esperado: ["w", "z", "y", "x"]


/* B1 — QUESTÃO 5: Validação de Código
Um sistema recebe códigos numéricos e precisa validar seu tamanho.
Crie a função validarTamanhoCodigo(codigo, tamanho).
Regras:
- Retorne true se o comprimento da string for igual a tamanho.
- Caso contrário, retorne false.
- Considere codigo uma string.
*/

function validarTamanhoCodigo(codigo, tamanho) {
  return codigo.length === tamanho ? true : false;
}

console.log(validarTamanhoCodigo("AB123", 5)); 
// Esperado: true

console.log(validarTamanhoCodigo("1234", 5)); 
// Esperado: false

console.log(validarTamanhoCodigo("", 0)); 
// Esperado: true

console.log(validarTamanhoCodigo("ABC", 3)); 
// Esperado: true

console.log(validarTamanhoCodigo("123456", 4)); 
// Esperado: false

console.log(validarTamanhoCodigo("A1", 2)); 
// Esperado: true


/* B1 — QUESTÃO 6: Separação de Valores
Um sistema recebe uma lista de números e precisa separar os negativos dos não negativos.
Crie a função separarNumeros(numeros).
Regras:
- Retorne um objeto com duas propriedades:
  negativos: array com números menores que zero;
  naoNegativos: array com números maiores ou iguais a zero.
- Preserve a ordem original dos números em cada grupo.
- Não altere o array recebido.
*/

function separarNumeros(numeros) {
  let negativos = [];
  let naoNegativos = [];

  for (let numero of numeros) {
    if (numero < 0) {
      negativos.push(numero);
    } else {
       naoNegativos.push(numero);
    }
  }

  return {negativos, naoNegativos};
}

console.log(separarNumeros([-3, 0, 5, -1]));
// Esperado: { negativos: [-3, -1], naoNegativos: [0, 5] }

console.log(separarNumeros([1, 2, 3]));
// Esperado: { negativos: [], naoNegativos: [1, 2, 3] }

console.log(separarNumeros([-5, -2]));
// Esperado: { negativos: [-5, -2], naoNegativos: [] }

console.log(separarNumeros([]));
// Esperado: { negativos: [], naoNegativos: [] }

console.log(separarNumeros([0, -1, 0, -2]));
// Esperado: { negativos: [-1, -2], naoNegativos: [0, 0] }

console.log(separarNumeros([8, -4, 3, -7, 0]));
// Esperado: { negativos: [-4, -7], naoNegativos: [8, 3, 0] }