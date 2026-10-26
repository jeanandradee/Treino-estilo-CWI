
/*
==================================================
BUG 1 — CONTROLE DE ACESSO
==================================================

ERRO: foi usado "=" em vez de uma comparação.
O operador "=" atribui um valor à variável/propriedade,
em vez de verificar se ela é true.

CORREÇÃO: usar "===" para comparar.
*/

function contarAutorizados(registros) {
  let total = 0;

  for (let registro of registros) {
    // CORRIGIDO: antes era registro.autorizado = true
    if (registro.autorizado === true) {
      total++;
    }
  }

  return total;
}

console.log(contarAutorizados([
  { usuario: "Ana", autorizado: true },
  { usuario: "Beto", autorizado: false },
  { usuario: "Caio", autorizado: true },
  { usuario: "Lia", autorizado: false }
]));

// Resultado esperado: 2


/*
==================================================
BUG 2 — CÁLCULO DE FRETE
==================================================

ERRO: a taxa de entrega estava sendo subtraída
do valor do produto.

CORREÇÃO: somar a taxa ao valor do produto.
*/

function calcularTotal(valorProduto) {
  const taxaEntrega = 15;

  // CORRIGIDO: antes era valorProduto - taxaEntrega
  return valorProduto + taxaEntrega;
}

console.log(calcularTotal(85));

// Resultado esperado: 100


/*
==================================================
BUG 3 — PRIMEIRO PRODUTO ESGOTADO
==================================================

ERRO: a função retornava o array inteiro de produtos,
mas o enunciado pede somente o nome do primeiro
produto com estoque igual a zero.

CORREÇÃO: retornar produto.nome.
*/

function encontrarEsgotado(produtos) {
  for (let produto of produtos) {
    if (produto.estoque === 0) {
      // CORRIGIDO: antes era return produtos
      return produto.nome;
    }
  }

  return null;
}

console.log(encontrarEsgotado([
  { nome: "Teclado", estoque: 5 },
  { nome: "Mouse", estoque: 0 },
  { nome: "Monitor", estoque: 0 }
]));

// Resultado esperado: "Mouse"


/*
==================================================
BUG 4 — SOMA DE QUANTIDADES
==================================================

ERRO: o total era substituído pela quantidade
de cada pedido, em vez de acumular os valores.

CORREÇÃO: usar += para somar cada quantidade
ao total anterior.
*/

function somarQuantidades(pedidos) {
  let total = 0;

  for (let pedido of pedidos) {
    // CORRIGIDO: antes era total = pedido.quantidade
    total += pedido.quantidade;
  }

  return total;
}

console.log(somarQuantidades([
  { quantidade: 3 },
  { quantidade: 7 },
  { quantidade: 2 }
]));

// Resultado esperado: 12


/*
==================================================
BUG 5 — VALIDAÇÃO DE IDADE
==================================================

ERRO: o operador ">" exclui quem tem exatamente
18 anos.

CORREÇÃO: usar ">=" para aceitar 18 anos ou mais.
*/

function contarPermitidos(idades) {
  let total = 0;

  for (let idade of idades) {
    // CORRIGIDO: antes era idade > 18
    if (idade >= 18) {
      total++;
    }
  }

  return total;
}

console.log(contarPermitidos([16, 18, 19, 25, 17, 18]));

// Resultado esperado: 4


/*
==================================================
BUG 6 — CADASTRO DE PARTICIPANTES
==================================================

ERRO: a função adicionava somente o nome ao array,
mas o enunciado pede objetos com nome e idade.

CORREÇÃO: adicionar o objeto participante completo.
*/

function listarMaiores(participantes) {
  let resultado = [];

  for (let participante of participantes) {
    if (participante.idade >= 18) {
      // CORRIGIDO: antes era resultado.push(participante.nome)
      resultado.push(participante);
    }
  }

  return resultado;
}

console.log(listarMaiores([
  { nome: "Ana", idade: 17 },
  { nome: "Beto", idade: 22 },
  { nome: "Caio", idade: 19 }
]));

/*
Resultado esperado:
[
  { nome: "Beto", idade: 22 },
  { nome: "Caio", idade: 19 }
]
*/
