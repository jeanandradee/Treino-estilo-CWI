/*==================================================
DESAFIO 1 — Contagem de Pedidos
==================================================
Uma loja precisa contar quantos pedidos possuem
o status "APROVADO".
A função deve retornar a quantidade de pedidos
aprovados.
Encontre e corrija o bug.
*/

function contarAprovados(pedidos) {
  let contador = 0;

  for (let pedido of pedidos) {
    // ERRO: foi usado = (atribuição) em vez de === (comparação).
    // Correção: usamos === para verificar se o status é "APROVADO".
    if (pedido.status === "APROVADO") {
      contador++;
    }
  }

  return contador;
}

console.log(contarAprovados([{ id: 1, status: "APROVADO" },
{ id: 2, status: "PENDENTE" },{ id: 3, status: "APROVADO" }]));
// Esperado: 2

console.log(contarAprovados([{ id: 4, status: "CANCELADO" }, { id: 5, status: "PENDENTE" }]));
// Esperado: 0


/*==================================================
DESAFIO 2 — Aplicação de Taxa
==================================================
Um sistema financeiro recebe uma lista de valores.
Cada valor deve receber uma taxa fixa de 5.
A função deve retornar um novo array com os valores
atualizados, sem alterar o array original.
Encontre e corrija o bug.
*/

function aplicarTaxa(valores) {
  let resultado = [];

  for (let valor of valores) {
    // ERRO: foi usada subtração (-) em vez de adição (+).
    // Correção: somamos 5 a cada valor.
    resultado.push(valor + 5);
  }

  return resultado;
}

console.log(aplicarTaxa([10, 20, 30]));
// Esperado: [15, 25, 35]

console.log(aplicarTaxa([5, 8]));
// Esperado: [10, 13]


/*==================================================
DESAFIO 3 — Primeiro Nome Encontrado
==================================================
Uma lista contém nomes de participantes.
A função deve retornar o primeiro nome que comece
com a letra "M".
Se nenhum nome atender à regra, deve retornar null.
Encontre e corrija o bug.
*/

function encontrarNome(nomes) {
  for (let nome of nomes) {
    if (nome[0] === "M") {
      // ERRO: estava retornando o array inteiro (nomes).
      // Correção: retornamos somente o nome encontrado.
      return nome;
    }
  }

  return null;
}

console.log(encontrarNome(["Ana", "Marcos", "Marta", "João"]));
// Esperado: "Marcos"

console.log(encontrarNome(["Ana", "João", "Pedro"]));
// Esperado: null


/*==================================================
DESAFIO 4 — Resumo de Estoque
==================================================
Cada produto possui nome e quantidade em estoque.
A função deve retornar a soma das quantidades
de todos os produtos.
Encontre e corrija o bug.
*/

function somarEstoque(produtos) {
  let total = 0;

  for (let produto of produtos) {
    // ERRO: total = produto.quantidade substituía o total
    // a cada repetição, mantendo apenas a última quantidade.
    // Correção: usamos += para acumular as quantidades.
    total += produto.quantidade;
  }

  return total;
}

console.log(somarEstoque([{ nome: "Caneta", quantidade: 10 },
{ nome: "Caderno", quantidade: 5 },{ nome: "Borracha", quantidade: 7 }]));
// Esperado: 22

console.log(somarEstoque([]));
// Esperado: 0


/*==================================================
DESAFIO 5 — Filtragem de Temperaturas
==================================================
Uma estação meteorológica precisa registrar somente
as temperaturas iguais ou superiores a 25 graus.
A função deve retornar um novo array contendo
apenas essas temperaturas, preservando a ordem.
Encontre e corrija o bug.
*/

function filtrarTemperaturas(temperaturas) {
  let resultado = [];

  for (let temperatura of temperaturas) {
    // ERRO: foi usado > 25, que exclui a temperatura 25.
    // Correção: usamos >= 25 para incluir valores iguais a 25.
    if (temperatura >= 25) {
      resultado.push(temperatura);
    }
  }

  return resultado;
}

console.log(filtrarTemperaturas([20, 25, 27, 30, 22]));
// Esperado: [25, 27, 30]

console.log(filtrarTemperaturas([25, 24, 23]));
// Esperado: [25]


/*==================================================
DESAFIO 6 — Atualização de Usuários
==================================================
Cada usuário possui nome e idade.
A função deve retornar um novo array contendo
somente os usuários com idade igual ou superior a 18.
Cada elemento do resultado deve ser um objeto com
as propriedades nome e idade.
Não altere o array original.
Encontre e corrija o bug.
*/

function listarAdultos(usuarios) {
  let resultado = [];

  for (let usuario of usuarios) {
    if (usuario.idade >= 18) {
      // ERRO: estava adicionando apenas usuario.nome,
      // retornando uma string em vez de um objeto.
      // Correção: adicionamos um novo objeto com nome e idade.
      // Assim, o resultado não depende da referência do objeto original.
      resultado.push({
        nome: usuario.nome,
        idade: usuario.idade
      });
    }
  }

  return resultado;
}

console.log(listarAdultos([{ nome: "Ana", idade: 17 },{ nome: "Carlos", idade: 25 },
 { nome: "Bia", idade: 18 }]));
// Esperado: [ { nome: "Carlos", idade: 25 }, { nome: "Bia", idade: 18 } ]

console.log(listarAdultos([{ nome: "João", idade: 16 }]));
// Esperado: []