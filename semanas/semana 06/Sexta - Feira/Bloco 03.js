/* Q1 — Controle de Estoque
Uma loja precisa contar quantos produtos possuem estoque disponível.
Considere disponível quando quantidade > 0.
A função deve retornar a quantidade de produtos disponíveis.
*/

function contarDisponiveis(produtos) {
  let total = 0;

  // Correção: usamos < em vez de <= para não acessar
  // uma posição inexistente do array.
  for (let i = 0; i < produtos.length; i++) {

    // Correção: estoque precisa ser maior que zero.
    if (produtos[i].quantidade > 0) {
      total++;
    }
  }

  return total;
}

console.log("Q1:", contarDisponiveis([ { nome: "Teclado", quantidade: 5 }, { nome: "Mouse", quantidade: 0 },
 { nome: "Monitor", quantidade: 3 }, { nome: "Cabo", quantidade: -2 } ])); // Esperado: 2


/* =====================================================
   Q2 — Cálculo de Desconto
   Uma loja aplica descontos conforme o valor da compra:
   - Acima de R$ 300: desconto de 20%.
   - Acima de R$ 150: desconto de 10%.
   - Até R$ 150: sem desconto.
   Retorne o preço final.
*/

function calcularPrecoFinal(valor) {
  // Correção: verificamos primeiro o maior desconto.
  if (valor > 300) {
    return valor * 0.80;

  } else if (valor > 150) {
    return valor * 0.90;
  }

  return valor;
}

console.log("Q2:", calcularPrecoFinal(400)); // Esperado: 320


/* =====================================================
   Q3 — Cadastro de Participantes
   Conte quantos participantes possuem nomes válidos.
   Um nome é válido quando:
   - Não está vazio após trim().
   - Possui pelo menos 5 caracteres após trim().
*/

function contarParticipantes(nomes) {
  let total = 0;

  for (let nome of nomes) {

    // Correção: trim() precisa de parênteses
    // para executar a remoção dos espaços.
    if (nome.trim().length >= 5) {
      total++;
    }
  }

  return total;
}

console.log("Q3:", contarParticipantes([ " Ana ", "Carlos", "  Beatriz  ", "João", "Mariana" ])); // Esperado: 3


/* =====================================================
   Q4 — Soma da Diagonal
   Uma matriz quadrada representa valores de um sistema.
   Some os elementos da diagonal principal,
   ou seja, aqueles em que o índice da linha
   é igual ao índice da coluna.
*/

function somarDiagonal(matriz) {
  let soma = 0;

  for (let i = 0; i < matriz.length; i++) {

    // Correção: [i][i] representa a diagonal principal.
    // Antes estava [i][i + 1], que acessava outra diagonal.
    soma += matriz[i][i];
  }

  return soma;
}

console.log("Q4:", somarDiagonal([ [5, 2, 1], [4, 8, 3], [7, 6, 9] ])); // Esperado: 22


/* =====================================================
   Q5 — Busca de Produto
   Encontre um produto pelo nome.
   A busca deve ignorar:
   - Espaços extras no início e no final.
   - Diferenças entre letras maiúsculas e minúsculas.
   Retorne o objeto encontrado ou null.
*/

function procurarProduto(produtos, nomeBusca) {

  for (let produto of produtos) {
    // Correção: usamos trim() nos dois nomes
    // antes de comparar, além de toLowerCase().
    if (
      produto.nome.trim().toLowerCase() ===
      nomeBusca.trim().toLowerCase()
    ) {
      return produto;
    }
  }

  return null;
}

console.log("Q5:", procurarProduto([ { id: 1, nome: "Teclado" },
  { id: 2, nome: "Mouse Gamer" }, { id: 3, nome: "Monitor" } ], "  MOUSE GAMER  "));
// Esperado: { id: 2, nome: "Mouse Gamer" }

/* =====================================================
   Q6 — Média de Notas Positivas
   Um sistema recebe notas de alunos.
   Calcule a média considerando somente notas maiores que zero.
   Se não houver notas positivas, retorne 0.
*/

function calcularMediaPositivos(notas) {
  let soma = 0;
  let quantidade = 0;

  for (let nota of notas) {

    if (nota > 0) {
      soma += nota;
      quantidade++;
    }
  }

  // Correção: evita divisão por zero.
  if (quantidade === 0) {
    return 0;
  }

  // Correção: dividimos pela quantidade de notas positivas,
  // e não pelo tamanho total do array.
  return soma / quantidade;
}

console.log("Q6:", calcularMediaPositivos([8, 0, -3, 6, 10])); // Esperado: 8
console.log("Q6:", calcularMediaPositivos([0, -2, -5]));       // Esperado: 0