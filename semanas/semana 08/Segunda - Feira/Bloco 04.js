/* ========================================
   B4 — DESAFIOS INTEGRADOS
   ========================================
Q1 — Sistema de descontos
Uma loja recebe um objeto contendo:
- preco: valor original do produto.
- categoria: categoria do produto.
- cupom: código de desconto informado.
Regras:
- Categoria "eletronicos": desconto de 10%.
- Categoria "roupas": desconto de 15%.
- Categoria "livros": desconto de 5%.
- Cupom "EXTRA10": acrescenta 10% de desconto.
- O cupom deve ser ignorado se for diferente de "EXTRA10".
- A comparação de categoria e cupom deve ignorar
  letras maiúsculas e minúsculas.
Os descontos são somados. Exemplo:
10% + 10% = 20%.
Retorne um objeto contendo:
- precoOriginal
- descontoAplicado (em porcentagem)
- precoFinal
Arredonde o preço final para duas casas decimais.
*/

function calcularDesconto(produto) {
  let { preco, categoria, cupom } = produto;

  categoria = categoria.toLowerCase();
  cupom = cupom.toUpperCase();

  let descontoAplicado = 0;

  if (categoria === "eletronicos") {
    descontoAplicado += 10;
  } else if (categoria === "roupas") {
    descontoAplicado += 15;
  } else if (categoria === "livros") {
    descontoAplicado += 5;
  }

  if (cupom === "EXTRA10") {
    descontoAplicado += 10;
  }

  const precoFinal = Number((preco * (1 - descontoAplicado / 100)).toFixed(2));

  return {
    precoOriginal: preco,
    descontoAplicado,
    precoFinal
  };
}

console.log(calcularDesconto({
  preco: 200,
  categoria: "Eletronicos",
  cupom: "extra10"
}));

// Resultado esperado:
// {
//   precoOriginal: 200,
//   descontoAplicado: 20,
//   precoFinal: 160
// }


/* ========================================
   Q2 — Analisador de sequência
Uma função recebe uma string contendo
uma sequência de caracteres numéricos.
A função deve verificar se a sequência:
1. Possui exatamente 6 caracteres.
2. Contém somente números.
3. Não possui todos os caracteres iguais.
Retorne um objeto contendo:
- tamanhoValido
- somenteNumeros
- caracteresIguais
- sequenciaValida
A sequência será válida somente se:
- tiver exatamente 6 caracteres;
- possuir apenas números;
- não tiver todos os caracteres iguais.
Atenção: não transforme a string em número,
pois zeros à esquerda devem ser preservados.
*/

function analisarSequencia(sequencia) {
  const tamanhoValido = sequencia.length === 6;

  const somenteNumeros = /^[0-9]+$/.test(sequencia);

  const caracteresIguais = new Set(sequencia).size === 1;

  const sequenciaValida =
    tamanhoValido &&
    somenteNumeros &&
    !caracteresIguais;

  return {
    tamanhoValido,
    somenteNumeros,
    caracteresIguais,
    sequenciaValida
  };
}

console.log(analisarSequencia("123456"));
// Resultado esperado:
// {
//   tamanhoValido: true,
//   somenteNumeros: true,
//   caracteresIguais: false,
//   sequenciaValida: true
// }

console.log(analisarSequencia("000000"));
// Resultado esperado:
// {
//   tamanhoValido: true,
//   somenteNumeros: true,
//   caracteresIguais: true,
//   sequenciaValida: false
// }


/* ========================================
   Q3 — Processador de pedidos
Uma função recebe um objeto representando
um pedido de uma loja.
Propriedades:
- valor: valor total do pedido.
- status: situação do pedido.
- prioridade: nível de prioridade.
- frete: valor do frete.
Regras:
1. Se o status for "cancelado", o pedido
   não deve ser processado.
2. Se o status for "aprovado", o pedido
   poderá ser processado.
3. Se a prioridade for "alta", o pedido
   recebe uma taxa adicional de 5% sobre
   o valor do produto.
4. O frete deve ser somado ao total.
5. Se o status não for aprovado nem cancelado,
   retorne "Pedido pendente".
Retorne:
- Para pedido aprovado: um objeto contendo
  valorProduto, taxaPrioridade, frete e total.
- Para pedido cancelado: "Pedido cancelado".
- Para pedido pendente: "Pedido pendente".
A comparação dos textos deve ignorar
maiúsculas e minúsculas.
*/

function processarPedido(pedido) {
  const { valor, status, prioridade, frete } = pedido;

  const statusNormalizado = status.toLowerCase();
  const prioridadeNormalizada = prioridade.toLowerCase();

  if (statusNormalizado === "cancelado") {
    return "Pedido cancelado";
  }

  if (statusNormalizado === "aprovado") {

    const taxaPrioridade = prioridadeNormalizada === "alta"
      ? valor * 0.05
      : 0;

    const total = valor + taxaPrioridade + frete;

    return {
      valorProduto: valor,
      taxaPrioridade,
      frete,
      total
    };
  }

  return "Pedido pendente";
}

console.log(processarPedido({
  valor: 200,
  status: "APROVADO",
  prioridade: "Alta",
  frete: 15
}));
// Resultado esperado:
// {
//   valorProduto: 200,
//   taxaPrioridade: 10,
//   frete: 15,
//   total: 225
// }

console.log(processarPedido({
  valor: 100,
  status: "cancelado",
  prioridade: "baixa",
  frete: 10
})); // Resultado esperado: "Pedido cancelado"

console.log(processarPedido({
  valor: 100,
  status: "aguardando",
  prioridade: "alta",
  frete: 10
})); // Resultado esperado: "Pedido pendente"