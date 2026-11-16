/* ========================================
   B3 — CAÇA-BUG
   ========================================
Q1 — Conversor de temperatura
Uma função deve converter temperaturas
de Celsius para Fahrenheit.
Fórmula:
F = (C * 9/5) + 32
O código abaixo deveria retornar 98.6
quando recebe 37, mas está retornando
um resultado incorreto.
Identifique e corrija o erro.
*/

function converterTemperatura(celsius) {
  // ERRO: os parênteses estavam envolvendo 9/5 + 32.
  // CORREÇÃO: primeiro multiplicamos Celsius por 9/5
  // e depois somamos 32.
  return (celsius * 9/5) + 32;
}
console.log(converterTemperatura(37)); // Resultado esperado: 98.6

/* ========================================
   Q2 — Verificador de permissões
Um sistema permite o acesso quando o usuário
é administrador OU possui uma autorização
especial.
O código deveria retornar:
true para ("admin", false)
true para ("usuario", true)
false para ("usuario", false)
Identifique e corrija o erro.
*/

function verificarAcesso(tipo, autorizacao) {
  // ERRO: foi utilizado && (E), exigindo que
  // as duas condições fossem verdadeiras.
  // CORREÇÃO: utilizar || (OU), pois basta
  // uma das condições ser verdadeira.
  return tipo === "admin" || autorizacao === true;
}

console.log(verificarAcesso("admin", false));   // true
console.log(verificarAcesso("usuario", true));  // true
console.log(verificarAcesso("usuario", false)); // false

/* ========================================
   Q3 — Contador de caracteres
Uma função recebe uma palavra e deve retornar
a quantidade de caracteres que não são espaços.
O código deveria retornar 10 para "Java Script",
mas está retornando um resultado incorreto.
Identifique e corrija o erro.
*/

function contarCaracteres(texto) {
  let contador = 0;

  // ERRO: o índice estava usando <=.
  // Isso fazia o loop acessar uma posição além
  // do último caractere da string.
  // CORREÇÃO: utilizar apenas < texto.length.
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      contador++;
    }
  }

  return contador;
}

console.log(contarCaracteres("Java Script")); // Resultado esperado: 10


/* ========================================
   Q4 — Atualização de perfil
Um sistema recebe um objeto de usuário
e deve atualizar seu nome.
A função deve retornar um novo objeto,
sem modificar o objeto original.
O código deveria manter a idade e o email,
alterando somente o nome.
Identifique e corrija o erro.
*/

function atualizarPerfil(usuario, novoNome) {
  // ERRO: estava alterando diretamente o objeto original.
  // CORREÇÃO: criar um novo objeto utilizando o spread (...).
  // Assim copiamos as propriedades existentes e alteramos
  // somente o nome no novo objeto.
  return {
    ...usuario,
    nome: novoNome
  };
}

const usuario = {
  nome: "Carlos",
  idade: 28,
  email: "carlos@email.com"
};

console.log(atualizarPerfil(usuario, "Carlos Silva"));
// Resultado esperado:
// {
//   nome: "Carlos Silva",
//   idade: 28,
//   email: "carlos@email.com"
// }

console.log(usuario.nome); // Resultado esperado: "Carlos"