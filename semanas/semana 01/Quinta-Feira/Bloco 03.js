/*🟧 B3 — CAÇA-BUG 🐞
Agora é debug puro.
As funções já estão quase prontas; em cada uma existe 1 erro lógico principal.
Sua missão: alterar o mínimo possível para fazer os 6 testes passarem.
*/


/*1️⃣ Controle de Estoque 📦

Uma loja registra entradas e saídas.
Uma saída só pode acontecer se houver estoque suficiente.
*/

function atualizarEstoque(movimentos) {
  let estoque = 0;

  for (let movimento of movimentos) {
    if (movimento.tipo === "ENTRADA") {
      estoque += movimento.quantidade;

    } else if (movimento.tipo === "SAIDA") {

      /*
      ❌ ERRO ORIGINAL:

      estoque -= movimento.quantidade;

      O problema é que uma saída só pode acontecer
      se houver estoque suficiente.

      Exemplo:

      estoque = 5
      saída = 8

      Não podemos fazer:

      5 - 8 = -3

      A saída deve ser ignorada.

      Também vale para quando o estoque está 0.
      */

      // ✅ CORRETO: só tira do estoque se houver quantidade suficiente
      if (estoque >= movimento.quantidade) {
        estoque -= movimento.quantidade;
      }
    }
  }

  return estoque;
}

console.log(atualizarEstoque([
  {tipo: "ENTRADA", quantidade: 10},
  {tipo: "SAIDA", quantidade: 4}
]));
// 6

console.log(atualizarEstoque([
  {tipo: "ENTRADA", quantidade: 5},
  {tipo: "SAIDA", quantidade: 8}
]));
// 5

console.log(atualizarEstoque([
  {tipo: "SAIDA", quantidade: 3},
  {tipo: "ENTRADA", quantidade: 10}
]));
// 10

console.log(atualizarEstoque([
  {tipo: "ENTRADA", quantidade: 20},
  {tipo: "SAIDA", quantidade: 7},
  {tipo: "SAIDA", quantidade: 5}
]));
// 8

console.log(atualizarEstoque([
  {tipo: "ENTRADA", quantidade: 4},
  {tipo: "SAIDA", quantidade: 4}
]));
// 0

console.log(atualizarEstoque([]));
// 0


/*2️⃣ Primeiro Resultado Válido 🎯

Um sistema recebe vários resultados e deve retornar
o primeiro valor maior ou igual a 50.
*/

function primeiroResultado(resultados) {
  for (let resultado of resultados) {

    /*
    ❌ ERRO ORIGINAL:

    if (resultado > 50)

    O exercício pede:

    maior OU IGUAL a 50

    Então o número 50 também precisa ser aceito.

    > 50  → somente maior que 50
    >= 50 → maior ou igual a 50
    */

    // ✅ CORRETO
    if (resultado >= 50) {
      return resultado;
    }
  }

  return null;
}

console.log(primeiroResultado([20, 35, 49, 51, 80]));
// 51

console.log(primeiroResultado([10, 50, 70]));
// 50

console.log(primeiroResultado([50]));
// 50

console.log(primeiroResultado([12, 30, 49]));
// null

console.log(primeiroResultado([80, 40, 50]));
// 80

console.log(primeiroResultado([]));
// null


/*3️⃣ Atualização de Cadastro 👤

Um sistema precisa atualizar a idade de um usuário
sem modificar o cadastro original.
*/

function atualizarUsuario(usuario, novaIdade) {

  /*
  ❌ ERRO ORIGINAL:

  let resultado = usuario;

  Isso NÃO cria um novo objeto.

  "resultado" e "usuario" passam a apontar
  para o MESMO objeto na memória.

  Então quando fazemos:

  resultado.idade = novaIdade;

  também estamos modificando "usuario".

  Precisamos criar uma cópia do objeto.
  */

  // ❌ ORIGINAL:
  // let resultado = usuario;

  // ✅ CORRETO: cria um novo objeto copiando as propriedades
  let resultado = { ...usuario };

  resultado.idade = novaIdade;

  return resultado;
}


const usuario1 = {nome: "Ana", idade: 20};
const resultado1 = atualizarUsuario(usuario1, 21);

console.log(resultado1);
// {nome: "Ana", idade: 21}

console.log(usuario1);
// {nome: "Ana", idade: 20}


const usuario2 = {nome: "Bruno", idade: 30};
const resultado2 = atualizarUsuario(usuario2, 31);

console.log(resultado2);
// {nome: "Bruno", idade: 31}

console.log(usuario2);
// {nome: "Bruno", idade: 30}


const usuario3 = {nome: "Carlos", idade: 18};
const resultado3 = atualizarUsuario(usuario3, 19);

console.log(resultado3);
// {nome: "Carlos", idade: 19}

console.log(usuario3);
// {nome: "Carlos", idade: 18}


const usuario4 = {nome: "Duda", idade: 40};
const resultado4 = atualizarUsuario(usuario4, 25);

console.log(resultado4);
// {nome: "Duda", idade: 25}

console.log(usuario4);
// {nome: "Duda", idade: 40}


const usuario5 = {nome: "Eva", idade: 17};
const resultado5 = atualizarUsuario(usuario5, 18);

console.log(resultado5);
// {nome: "Eva", idade: 18}

console.log(usuario5);
// {nome: "Eva", idade: 17}


const usuario6 = {nome: "Filipe", idade: 50};
const resultado6 = atualizarUsuario(usuario6, 0);

console.log(resultado6);
// {nome: "Filipe", idade: 0}

console.log(usuario6);
// {nome: "Filipe", idade: 50}