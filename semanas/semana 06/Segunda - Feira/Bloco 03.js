/* B3 — CAÇA-BUG
QUESTÃO 1 — Controle de estoque
Uma loja precisa calcular a quantidade total de produtos que possuem estoque disponível.
Encontre e corrija os erros. */

function contarEstoque(produtos) { let total = 0;
  // ERRO 1 CORRIGIDO: usamos < em vez de <=.
  // O índice do último elemento é produtos.length - 1.
  // Com <=, o código tentaria acessar uma posição inexistente.
  for (let i = 0; i < produtos.length; i++) {
    // ERRO 2 CORRIGIDO: usamos > 0 em vez de >= 0.
    // Estoque igual a zero significa que não há produtos disponíveis.
    if (produtos[i].estoque > 0) {
        total++;
    }
  }

  return total;
}

console.log(contarEstoque([ { nome: "Mouse", estoque: 5 }, { nome: "Teclado", estoque: 0 },
 { nome: "Monitor", estoque: 3 }, { nome: "Cabo", estoque: -2 } ])); // Resultado esperado: 2

/* QUESTÃO 2 — Aplicação de desconto
Uma loja aplica descontos conforme o valor da compra:
Acima de 200: desconto de 20%.
Acima de 100: desconto de 10%.
Até 100: sem desconto.
Encontre e corrija o erro. */

function calcularDesconto(valor) { let desconto = 0;
  // ERRO CORRIGIDO: a condição valor > 200 precisa vir primeiro.
  // Caso contrário, compras acima de 200 também entram no primeiro if
  // e recebem apenas 10% de desconto.
  if (valor > 200) {
    desconto = valor * 0.20;
  } else if (valor > 100) {
    desconto = valor * 0.10;
  }

  return valor - desconto;
}

console.log(calcularDesconto(300)); // Resultado esperado: 240

/* QUESTÃO 3 — Contagem de vogais
Uma função deve contar todas as vogais de um texto, independentemente de serem maiúsculas ou minúsculas.
Encontre e corrija o erro. */

function contarVogais(texto) { let contador = 0;
  // ERRO CORRIGIDO: faltavam os parênteses em toLowerCase().
  // É um método, portanto precisamos chamá-lo com ().
  texto = texto.toLowerCase();

  for (let letra of texto) {
    if ("aeiou".includes(letra)) {
        contador++;
    }
  }

  return contador;
}

console.log(contarVogais("JavaScript")); // Resultado esperado: 3

/* QUESTÃO 4 — Soma da diagonal principal
Uma função deve somar os elementos da diagonal principal de uma matriz quadrada.
Encontre e corrija o erro. */

function somarDiagonal(matriz) { let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    // ERRO CORRIGIDO: usamos matriz[i][i] em vez de
    // matriz[i][matriz.length - i].
    // Na diagonal principal, a linha e a coluna possuem
    // sempre o mesmo índice.
    soma += matriz[i][i];
  }

  return soma;
}

console.log(somarDiagonal([ [2, 4, 6], [1, 3, 5], [7, 8, 9] ])); // Resultado esperado: 14

/* QUESTÃO 5 — Busca de produto
Uma loja precisa localizar um produto pelo nome. A busca deve ignorar diferenças entre letras maiúsculas e minúsculas.
Encontre e corrija o erro. */

function procurarProduto(produtos, nomeBusca) {
  // CORREÇÃO: transformamos o nome da busca em minúsculas
  // para permitir a comparação sem diferenciar maiúsculas e minúsculas.
  nomeBusca = nomeBusca.toLowerCase();

  for (let produto of produtos) {

    // ERRO CORRIGIDO: a comparação original era direta.
    // Agora também transformamos o nome do produto em minúsculas.
    if (produto.nome.toLowerCase() === nomeBusca) {
        return produto;
    }
  }

  return null;
}

console.log(procurarProduto([ { nome: "Mouse" }, { nome: "Teclado" }, { nome: "Monitor" } ], "mouse"));

// Resultado esperado: { nome: "Mouse" }

/* QUESTÃO 6 — Média dos números positivos
Uma função deve calcular a média somente dos números maiores que zero.
Se não houver números positivos, deve retornar 0.
Encontre e corrija os erros. */

function calcularMediaPositivos(numeros) { let soma = 0; let quantidade = 0;


for (let num of numeros) {
  if (num > 0) {
      soma += num;
      // ERRO CORRIGIDO: quantidade++ precisa ficar
      // dentro do if, pois só devemos contar números positivos.
      quantidade++;
  }
}

  // ERRO CORRIGIDO: verificamos se existem números positivos.
  // Se quantidade for zero, evitamos a divisão por zero.
  if (quantidade === 0) {
    return 0;
  }

  return soma / quantidade;
}

console.log(calcularMediaPositivos([5, -2, 10, 0, 15])); // Resultado esperado: 10
console.log(calcularMediaPositivos([-5, -2, 0])); // Resultado esperado: 0