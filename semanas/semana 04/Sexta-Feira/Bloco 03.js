/* ==================================================
BUG 1 — CONTROLE DE ACESSO
==================================================
Um sistema deve contar quantos usuários estão autorizados.
ERRO:
Foi utilizado = (atribuição) em vez de === (comparação).
Isso fazia com que autorizado recebesse true em todos
os registros, contando todos os usuários.
CORREÇÃO:
Trocar = por ===.
*/

function contarAutorizados(registros) {
  let total = 0;

  for (let registro of registros) {
    // CORRIGIDO: compara se autorizado é true.
    if (registro.autorizado === true) {
      total++;
    }
  }

  return total;
}

console.log(contarAutorizados([ { usuario: "Ana", autorizado: true }, { usuario: "Beto", autorizado: false },
  { usuario: "Caio", autorizado: true }, { usuario: "Lia", autorizado: false } ]));
// Resultado esperado: 2


/* ==================================================
   BUG 2 — CÁLCULO DE FRETE
   ==================================================
Uma loja cobra uma taxa fixa de R$ 12 por entrega.
ERRO:
Foi utilizada a subtração (-), diminuindo a taxa
do valor do produto.
CORREÇÃO:
Utilizar a adição (+) para somar o frete.
*/

function calcularTotal(valorProduto) {
  const taxaEntrega = 12;
  // CORRIGIDO: soma o valor do produto com a taxa.
  return valorProduto + taxaEntrega;
}

console.log(calcularTotal(80)); // Resultado esperado: 92

/* ==================================================
   BUG 3 — PRIMEIRO PRODUTO ESGOTADO
   ==================================================
Um depósito precisa encontrar o nome do primeiro produto
com estoque igual a zero.
ERRO:
A função retornava o array inteiro de produtos,
em vez do nome do produto encontrado.
CORREÇÃO:
Retornar produto.nome.
*/

function encontrarEsgotado(produtos) {
  for (let produto of produtos) {
    if (produto.estoque === 0) {
      // CORRIGIDO: retorna apenas o nome do produto.
      return produto.nome;
    }
  }

  return null;
}

console.log(encontrarEsgotado([{ nome: "Teclado", estoque: 5 },{ nome: "Mouse", estoque: 0 },{ nome: "Monitor", estoque: 0 }]));
// Resultado esperado: "Mouse"


/* ==================================================
   BUG 4 — SOMA DE QUANTIDADES
   ==================================================
Um relatório deve calcular a quantidade total de itens
em todos os pedidos.
ERRO:
A variável total recebia a quantidade de cada pedido,
substituindo o valor anterior em vez de somá-lo.
CORREÇÃO:
Utilizar += para acumular as quantidades.
*/

function somarQuantidades(pedidos) {
  let total = 0;

  for (let pedido of pedidos) {
    // CORRIGIDO: acumula cada quantidade no total.
    total += pedido.quantidade;
  }

  return total;
}

console.log(somarQuantidades([ { quantidade: 3 }, { quantidade: 7 }, { quantidade: 2 } ]));
// Resultado esperado: 12


/* ==================================================
   BUG 5 — VALIDAÇÃO DE IDADE
   ==================================================
Um evento permite a entrada de pessoas com 18 anos
ou mais.
ERRO:
O operador > considera apenas idades maiores que 18,
ignorando quem tem exatamente 18 anos.
CORREÇÃO:
Utilizar >= para incluir quem tem 18 anos ou mais.
*/

function contarPermitidos(idades) {
  let total = 0;

  for (let idade of idades) {
    // CORRIGIDO: inclui pessoas com exatamente 18 anos.
    if (idade >= 18) {
      total++;
    }
  }

  return total;
}

console.log(contarPermitidos([16, 18, 19, 25, 17, 18])); // Resultado esperado: 4


/* ==================================================
   BUG 6 — CADASTRO DE PARTICIPANTES
   ==================================================
Um sistema precisa gerar um novo array contendo objetos
com nome e idade dos participantes maiores de idade.
ERRO:
A função adicionava apenas o nome ao array,
mas o enunciado pede objetos com nome e idade.
CORREÇÃO:
Adicionar o próprio objeto participante ao resultado.
*/

function listarMaiores(participantes) {
  let resultado = [];

  for (let participante of participantes) {
    if (participante.idade >= 18) {
      // CORRIGIDO: adiciona o objeto com nome e idade.
      resultado.push(participante);
    }
  }

  return resultado;
}

console.log(listarMaiores([ { nome: "Ana", idade: 17 }, { nome: "Beto", idade: 22 }, { nome: "Caio", idade: 19 } ]));
// Resultado esperado: [ { nome: "Beto", idade: 22 }, { nome: "Caio", idade: 19 } ]