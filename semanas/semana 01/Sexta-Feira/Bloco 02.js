/* 1️⃣ Processador de Movimentações 📦
Um estoque começa com 0 unidades.
Cada movimentação possui:
{
  tipo: "ENTRADA",
  quantidade: 10
}
Regras:
ENTRADA → adiciona ao estoque.
SAIDA → só remove se houver estoque suficiente.
Uma saída inválida é simplesmente ignorada.
Ao final, retorne:
estoqueFinal
entradas: quantidade total de unidades que realmente entraram.
saidas: quantidade total de unidades que realmente saíram.
saidasInvalidas: quantidade de operações de saída que foram recusadas.*/

function processarMovimentacoes(movimentos) {
  let estadoFinal = 0;
  let entradas = 0;
  let saidas = 0;
  let saidasInvalidas = 0;

  for (let { tipo, quantidade } of movimentos) {
    if (tipo === "ENTRADA") {
      entradas += quantidade;
      estadoFinal += quantidade;

    } else if (tipo === "SAIDA") {
      if (estadoFinal >= quantidade) {
        saidas += quantidade;
        estadoFinal -= quantidade;
      } else {
        saidasInvalidas++;
      }
    }
  }

  return {
    estoqueFinal: estadoFinal,
    entradas,
    saidas,
    saidasInvalidas
  };
}

console.log(processarMovimentacoes([{tipo: "ENTRADA", quantidade: 10}, {tipo: "SAIDA", quantidade: 4},
 {tipo: "ENTRADA", quantidade: 5}]));
// { estoqueFinal: 11, entradas: 15, saidas: 4, saidasInvalidas: 0 }

console.log(processarMovimentacoes([{tipo: "SAIDA", quantidade: 5}, {tipo: "ENTRADA", quantidade: 3},
 {tipo: "SAIDA", quantidade: 5}]));
// { estoqueFinal: 3, entradas: 3, saidas: 0, saidasInvalidas: 2 }

console.log(processarMovimentacoes([{tipo: "ENTRADA", quantidade: 20}, {tipo: "SAIDA", quantidade: 8},
 {tipo: "SAIDA", quantidade: 12}]));
// { estoqueFinal: 0, entradas: 20, saidas: 20, saidasInvalidas: 0 }

console.log(processarMovimentacoes([{tipo: "ENTRADA", quantidade: 5}, {tipo: "SAIDA", quantidade: 8},
 {tipo: "SAIDA", quantidade: 5}]));
// { estoqueFinal: 0, entradas: 5, saidas: 5, saidasInvalidas: 1 }

console.log(processarMovimentacoes([]));
// { estoqueFinal: 0, entradas: 0, saidas: 0, saidasInvalidas: 0 }

console.log(processarMovimentacoes([{tipo: "ENTRADA", quantidade: 7}, {tipo: "SAIDA", quantidade: 7}]));
// { estoqueFinal: 0, entradas: 7, saidas: 7, saidasInvalidas: 0 }

/*2️⃣ Analisador de Sessão 👤
Um sistema registra eventos de usuários.
Cada evento possui:
{
  usuario: "Ana",
  tipo: "LOGIN"
}
Os tipos possíveis são:
"LOGIN"
"LOGOUT"
O sistema deve analisar os eventos na ordem recebida.
Para cada usuário:
LOGIN → usuário passa a estar online.
LOGOUT → usuário passa a estar offline.
No final, retorne:
{
  online: [...],
  quantidadeLogins: 0,
  quantidadeLogouts: 0
}
Regras importantes
online deve conter os nomes que terminaram online.
Preserve a ordem em que os usuários apareceram pela primeira vez.
Um LOGIN conta em quantidadeLogins mesmo que o usuário já esteja online.
Um LOGOUT conta em quantidadeLogouts mesmo que o usuário já esteja offline.
Mas o estado final deve respeitar o último evento de cada usuário.
Exemplo:
Ana LOGIN
Bruno LOGIN
Ana LOGOUT
Resultado:
{
  online: ["Bruno"],
  quantidadeLogins: 2,
  quantidadeLogouts: 1
}*/

function analisarSessao(eventos) {
  let online = [];
  let quantidadeLogins = 0;
  let quantidadeLogouts = 0;

  for (let { usuario, tipo } of eventos) {
    if (tipo === "LOGIN") {
      quantidadeLogins++;

      if (!online.includes(usuario)) {
        online.push(usuario);
      }

    } else if (tipo === "LOGOUT") {
      quantidadeLogouts++;

      let indice = online.indexOf(usuario);

      if (indice !== -1) {
        online.splice(indice, 1);
      }
    }
  }

  return {
    online,
    quantidadeLogins,
    quantidadeLogouts
  }
}

console.log(analisarSessao([{usuario: "Ana", tipo: "LOGIN"}, {usuario: "Bruno", tipo: "LOGIN"},
 {usuario: "Ana", tipo: "LOGOUT"}]));
// { online: ["Bruno"], quantidadeLogins: 2, quantidadeLogouts: 1 }

console.log(analisarSessao([{usuario: "Ana", tipo: "LOGIN"}, {usuario: "Ana", tipo: "LOGOUT"},
 {usuario: "Ana", tipo: "LOGIN"}]));
// { online: ["Ana"], quantidadeLogins: 2, quantidadeLogouts: 1 }

console.log(analisarSessao([{usuario: "Ana", tipo: "LOGIN"},
 {usuario: "Bruno", tipo: "LOGIN"},{usuario: "Carlos", tipo: "LOGIN"}]));
// { online: ["Ana", "Bruno", "Carlos"], quantidadeLogins: 3, quantidadeLogouts: 0 }

console.log(analisarSessao([{usuario: "Ana", tipo: "LOGOUT"},
 {usuario: "Bruno", tipo: "LOGIN"}, {usuario: "Ana", tipo: "LOGIN"}]));
// { online: ["Ana", "Bruno"], quantidadeLogins: 2, quantidadeLogouts: 1 }

console.log(analisarSessao([{usuario: "Ana", tipo: "LOGIN"}, {usuario: "Ana", tipo: "LOGIN"},
 {usuario: "Ana", tipo: "LOGOUT"}, {usuario: "Ana", tipo: "LOGOUT"}]));
// { online: [], quantidadeLogins: 2, quantidadeLogouts: 2 }

console.log(analisarSessao([]));
// { online: [], quantidadeLogins: 0, quantidadeLogouts: 0 }

/*3️⃣ Processador de Pedidos por Prioridade 🎫
Um sistema recebe pedidos na ordem em que foram feitos.
Cada pedido:
{
  cliente: "Ana",
  valor: 500,
  urgente: true
}
A prioridade é determinada assim:
valor >= 500 e urgente === true → "ALTA"
valor >= 500 e não urgente → "MEDIA"
valor < 500 → "NORMAL"
O sistema deve retornar somente os pedidos de prioridade ALTA, mas com uma informação adicional:
{
  cliente,
  posicao
}
posicao é a posição original do pedido no array.
Além disso, retorne:
{
  pedidos: [...],
  primeiro: ...
}
Onde primeiro é o cliente do primeiro pedido de prioridade ALTA.
Se não existir nenhum:
primeiro: null*/
function processarPedidos(pedidos) {
  let resultado = [];
  let primeiro = null;

  for (let i = 0; i < pedidos.length; i++) {
    let { cliente, valor, urgente } = pedidos[i];

    if (valor >= 500 && urgente === true) {
      resultado.push({
        cliente,
        posicao: i
      });

      if (primeiro === null) {
        primeiro = cliente;
      }
    }
  }

  return {
    pedidos: resultado,
    primeiro
  };
}


console.log(processarPedidos([{cliente: "Ana", valor: 500, urgente: true},
 {cliente: "Bruno", valor: 700, urgente: false}, {cliente: "Carlos", valor: 300, urgente: true}]));
// { pedidos: [{cliente: "Ana", posicao: 0}], primeiro: "Ana" }

console.log(processarPedidos([ {cliente: "Ana", valor: 400, urgente: true},
 {cliente: "Bruno", valor: 600, urgente: true}, {cliente: "Carlos", valor: 800, urgente: true}]));
// { pedidos: [ {cliente: "Bruno", posicao: 1}, {cliente: "Carlos", posicao: 2} ], primeiro: "Bruno" }

console.log(processarPedidos([ {cliente: "Ana", valor: 500, urgente: false},
 {cliente: "Bruno", valor: 499, urgente: true}]));
// { pedidos: [], primeiro: null }

console.log(processarPedidos([{cliente: "Ana", valor: 501, urgente: true}]));
// { pedidos: [{cliente: "Ana", posicao: 0}], primeiro: "Ana" }

console.log(processarPedidos([{cliente: "Ana", valor: 499, urgente: true}, {cliente: "Bruno", valor: 500, urgente: true},
  {cliente: "Carlos", valor: 500, urgente: false}, {cliente: "Duda", valor: 1000, urgente: true}]));
// { pedidos: [ {cliente: "Bruno", posicao: 1}, {cliente: "Duda", posicao: 3} ], primeiro: "Bruno" }

console.log(processarPedidos([]));
// { pedidos: [], primeiro: null }