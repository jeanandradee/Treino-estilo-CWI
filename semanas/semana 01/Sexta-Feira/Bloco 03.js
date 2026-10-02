/* 1️⃣ Controle de Acessos 🔐
Um sistema recebe tentativas de acesso.
O acesso deve ser liberado somente quando:
o usuário está ativo;
e a idade é >= 18.
O sistema deve retornar os nomes dos usuários liberados, mantendo a ordem original.
Código com bug
*/

function liberarAcessos(usuarios) {
  let liberados = [];

  for (let usuario of usuarios) {

    // ❌ ERRO:
    // Foi usado "||", que significa "OU".
    // Isso faria o usuário ser liberado se apenas UMA
    // das condições fosse verdadeira.
    //
    // Exemplo:
    // ativo: false
    // idade: 25
    //
    // false || true = true
    // Então o usuário seria liberado, mas não deveria.

    // ✅ CORREÇÃO:
    // As duas condições precisam ser verdadeiras:
    // usuário ativo E idade >= 18.
    if (usuario.ativo && usuario.idade >= 18) {
      liberados.push(usuario.nome);
    }
  }

  return liberados;
}


/* Testes */

console.log(liberarAcessos([
  {nome: "Ana", idade: 20, ativo: true},
  {nome: "Bruno", idade: 25, ativo: false},
  {nome: "Carlos", idade: 16, ativo: true}
]));
// ["Ana"]

console.log(liberarAcessos([
  {nome: "Duda", idade: 18, ativo: true},
  {nome: "Eva", idade: 17, ativo: true}
]));
// ["Duda"]

console.log(liberarAcessos([
  {nome: "Filipe", idade: 30, ativo: false},
  {nome: "Gabi", idade: 30, ativo: true}
]));
// ["Gabi"]

console.log(liberarAcessos([
  {nome: "Hugo", idade: 18, ativo: true}
]));
// ["Hugo"]

console.log(liberarAcessos([
  {nome: "Iara", idade: 17, ativo: false}
]));
// []

console.log(liberarAcessos([]));
// []


/* ============================================================

2️⃣ Primeiro Pico da Sequência 📈
Um sistema precisa encontrar o primeiro pico local.
Um elemento é pico quando é:
maior que o elemento anterior
E
maior que o elemento seguinte
O primeiro e o último elemento nunca podem ser pico.
A função deve retornar o índice do primeiro pico. Se não houver, retorna null.
Código com bug

============================================================ */

function primeiroPico(valores) {

  // O índice 0 nunca pode ser pico.
  // Por isso começamos em 1.
  //
  // O último índice também nunca pode ser pico.
  // Por isso usamos valores.length - 1 na condição.

  for (let i = 1; i < valores.length - 1; i++) {

    // ❌ ERRO:
    // Foi usado "||", que significa "OU".
    //
    // Para ser um pico, o valor precisa ser:
    // maior que o anterior E maior que o seguinte.
    //
    // Com "||", bastaria ser maior que apenas UM dos lados.

    // ✅ CORREÇÃO:
    // Usamos "&&" porque as duas condições precisam
    // ser verdadeiras.
    if (
      valores[i] > valores[i - 1] &&
      valores[i] > valores[i + 1]
    ) {
      return i;
    }
  }

  return null;
}


/* Testes */

console.log(primeiroPico([1, 5, 3]));
// 1

console.log(primeiroPico([1, 5, 6, 3]));
// 2

console.log(primeiroPico([5, 4, 3]));
// null

console.log(primeiroPico([1, 2, 2, 1]));
// null

console.log(primeiroPico([1, 4, 2, 5, 3]));
// 1

console.log(primeiroPico([]));
// null


/* ============================================================

3️⃣ Atualização de Saldo 💰
Um sistema controla o saldo de uma conta.
Movimentações:
{
  tipo: "ENTRADA",
  valor: 100
}
Regras:
ENTRADA → adiciona o valor.
SAIDA → só pode acontecer se houver saldo suficiente.
saída sem saldo suficiente deve ser ignorada.
O sistema deve retornar o saldo final.
Código com bug

============================================================ */

function atualizarSaldo(movimentos) {
  let saldo = 0;

  for (let movimento of movimentos) {

    if (movimento.tipo === "ENTRADA") {

      saldo += movimento.valor;

    } else if (movimento.tipo === "SAIDA") {

      // ❌ ERRO:
      // O código original fazia primeiro:
      //
      // saldo -= movimento.valor;
      //
      // E depois verificava se ficou negativo.
      //
      // Isso está errado porque uma saída sem saldo
      // suficiente deve ser IGNORADA.
      //
      // Exemplo:
      //
      // saldo = 50
      // SAIDA = 80
      //
      // O código original faria:
      // 50 - 80 = -30
      //
      // E depois transformaria em 0.
      //
      // Mas o correto é manter 50.

      // ✅ CORREÇÃO:
      // Só fazemos a saída se houver saldo suficiente.
      if (saldo >= movimento.valor) {
        saldo -= movimento.valor;
      }
    }
  }

  return saldo;
}


/* Testes */

console.log(atualizarSaldo([
  {tipo: "ENTRADA", valor: 100},
  {tipo: "SAIDA", valor: 40}
]));
// 60

console.log(atualizarSaldo([
  {tipo: "ENTRADA", valor: 50},
  {tipo: "SAIDA", valor: 80}
]));
// 50

console.log(atualizarSaldo([
  {tipo: "SAIDA", valor: 30},
  {tipo: "ENTRADA", valor: 100}
]));
// 100

console.log(atualizarSaldo([
  {tipo: "ENTRADA", valor: 100},
  {tipo: "SAIDA", valor: 100}
]));
// 0

console.log(atualizarSaldo([
  {tipo: "ENTRADA", valor: 100},
  {tipo: "SAIDA", valor: 40},
  {tipo: "SAIDA", valor: 80}
]));
// 60

console.log(atualizarSaldo([]));
// 0
