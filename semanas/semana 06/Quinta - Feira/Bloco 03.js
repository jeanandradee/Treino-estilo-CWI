/* Q1 — Controle de Estoque
Uma loja precisa contar quantos produtos possuem estoque disponível.
Considere disponível quando quantidade > 0.
A função deve retornar a quantidade de produtos disponíveis.
*/

function contarDisponiveis(produtos) {
  let total = 0;

  // ERRO 1: O correto é i < produtos.length.
  // Usar <= faz o loop acessar uma posição inexistente
  // depois do último elemento do array.
  for (let i = 0; i < produtos.length; i++) {

    // ERRO 2: O correto é quantidade > 0, e não >= 0.
    // O enunciado considera disponível somente quem
    // possui quantidade maior que zero.
    if (produtos[i].quantidade > 0) {
      total++;
    }
  }

  return total;
}

console.log(contarDisponiveis([
  { nome: "Mouse", quantidade: 10 },
  { nome: "Teclado", quantidade: 0 },
  { nome: "Monitor", quantidade: 5 },
  { nome: "Cabo", quantidade: 0 }
]));

// Esperado: 2

/* Q2 — Cálculo de Desconto
Uma loja aplica descontos conforme o valor da compra:
- Acima de R$ 300: desconto de 20%.
- Acima de R$ 150: desconto de 10%.
- Até R$ 150: sem desconto.
A função deve retornar o preço final.
*/

function calcularPrecoFinal(valor) {

  // ERRO 1: A condição valor > 300 precisa vir primeiro.
  // No código original, valor > 150 vinha antes.
  // Assim, uma compra de R$ 400 entrava na primeira condição
  // e recebia apenas 10% de desconto.
  if (valor > 300) {
    return valor * 0.80;

  } else if (valor > 150) {

    // Desconto de 10%.
    return valor * 0.90;

  } else {

    // Compras de até R$ 150 não recebem desconto.
    return valor;
  }
}

console.log(calcularPrecoFinal(400)); // Esperado: 320
console.log(calcularPrecoFinal(200)); // Esperado: 180
console.log(calcularPrecoFinal(100)); // Esperado: 100

/* Q3 — Validação de Participantes
Um evento recebe nomes de participantes.
A função deve contar quantos nomes possuem
pelo menos 5 caracteres, ignorando espaços
no início e no final e diferenças entre maiúsculas
e minúsculas não devem afetar a contagem.
*/

function contarParticipantes(nomes) {

  return nomes.filter(nome =>

    // ERRO 1: O correto é nome.trim().length.
    // No código original estava nome.trim.length.
    // trim() é um método e precisa dos parênteses
    // para ser executado.
    //
    // trim() remove os espaços do início e do final.
    //
    // ERRO 2: A contagem deve considerar nomes com
    // pelo menos 5 caracteres, por isso usamos >= 5.
    //
    // Maiúsculas e minúsculas não precisam de tratamento
    // adicional, pois estamos contando caracteres,
    // e não comparando nomes.
    nome.trim().length >= 5

  ).length;
}

console.log(contarParticipantes([ " Ana ", "Carlos", " MARIA ", "João", "Pedro" ]));
// Esperado: 3

/* Q4 — Soma da Diagonal
Uma aplicação recebe uma matriz quadrada.
A função deve somar os elementos da diagonal principal.
*/

function somarDiagonal(matriz) {
  let soma = 0;

  for (let i = 0; i < matriz.length; i++) {

    // ERRO 1: O código original utilizava matriz[i][i + 1].
    //
    // Isso acessava os elementos da diagonal secundária
    // deslocada uma posição para a direita.
    //
    // Para acessar a diagonal principal, precisamos usar:
    // matriz[i][i]
    //
    // Exemplo:
    // [5, 2, 1]
    // [4, 8, 3]
    // [7, 6, 9]
    //
    // Diagonal principal: 5, 8, 9.
    // Soma: 22.
    soma += matriz[i][i];
  }

  return soma;
}

console.log(somarDiagonal([ [5, 2, 1], [4, 8, 3], [7, 6, 9] ]));
// Esperado: 22

/* Q5 — Busca de Produto
Uma loja recebe uma lista de produtos e um nome.
A função deve retornar o objeto do produto encontrado.
A busca deve ignorar diferenças entre maiúsculas
e minúsculas e espaços nas extremidades.
Se não encontrar, deve retornar null.
*/

function procurarProduto(produtos, nome) {

  // ERRO 1: No código original, a comparação era:
  // produto.nome === nome
  //
  // Isso não funciona quando existem diferenças
  // entre maiúsculas, minúsculas ou espaços.
  //
  // Exemplo:
  // "Mouse" !== " mouse "
  //
  // trim() remove os espaços das extremidades.
  // toLowerCase() transforma as letras em minúsculas.
  //
  // Assim, os dois textos podem ser comparados corretamente.
  const encontrado = produtos.find(produto =>
    produto.nome.trim().toLowerCase() === nome.trim().toLowerCase()
  );

  // Se encontrar, retorna o objeto.
  // Se não encontrar, retorna null.
  //
  // O código original já estava correto nesta parte.
  return encontrado || null;
}

console.log(procurarProduto([ { nome: "Notebook", preco: 2500 },
  { nome: "Mouse", preco: 80 }, { nome: "Teclado", preco: 150 } ], " mouse "));
// Esperado: { nome: "Mouse", preco: 80 }

/* Q6 — Média de Valores Positivos
Uma aplicação recebe números e precisa calcular
a média somente dos valores positivos.
Se não houver valores positivos, deve retornar 0.
*/

function calcularMediaPositivos(numeros) {

  // Primeiro, filtramos somente os números maiores que zero.
  const positivos = numeros.filter(numero => numero > 0);

  // Depois, somamos todos os números positivos.
  const soma = positivos.reduce((acc, numero) =>
    acc + numero, 0
  );

  // ERRO 1: No código original, a divisão era:
  //
  // return soma / numeros.length;
  //
  // Isso estava errado porque numeros.length representa
  // a quantidade de TODOS os números do array,
  // incluindo negativos e zeros.
  //
  // Para calcular a média somente dos positivos,
  // precisamos dividir pela quantidade de positivos.
  //
  // ERRO 2: Também precisamos verificar se existem
  // números positivos antes de fazer a divisão.
  //
  // Se não houver positivos, retornamos 0 para evitar
  // uma divisão por zero (resultado NaN).

  if (positivos.length === 0) {
    return 0;
  }

  return soma / positivos.length;
}

console.log(calcularMediaPositivos([10, -5, 20, 0, 30])); // Esperado: 20
console.log(calcularMediaPositivos([-2, 0, -8]));         // Esperado: 0