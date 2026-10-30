/* ==========================================================
   1. CONTROLE DE ESTOQUE
   Uma loja precisa calcular quantos produtos ainda estão
   disponíveis.
   A função deveria somar apenas as quantidades positivas.
   ========================================================== */

function calcularEstoque(quantidades) {
  let total = 0;

  // 🐛 ERRO 1: i <= quantidades.length acessava uma posição
  // inexistente no array.
  // CORREÇÃO: usar i < quantidades.length.

  for (let i = 0; i < quantidades.length; i++) {

    // 🐛 ERRO 2: >= 0 também somava valores iguais a zero.
    // CORREÇÃO: usar > 0, pois o enunciado pede positivos.

    if (quantidades[i] > 0) {
      total += quantidades[i];
    }
  }

  return total;
}

console.log(calcularEstoque([10, 5, -3, 8])); // Esperado: 23
console.log(calcularEstoque([0, 4, -2, 6]));  // Esperado: 10

/* ==========================================================
   2. CALCULADORA DE DESCONTOS
   Uma loja oferece:
   - 20% de desconto para compras acima de R$ 200.
   - 10% de desconto para compras acima de R$ 100.
   - Nenhum desconto nos demais casos.
   ========================================================== */

function calcularDesconto(valor) {
  let desconto = 0;

  // 🐛 ERRO 1: as condições estavam invertidas.
  // O desconto de 20% precisa ser verificado primeiro.
  // Caso contrário, valores acima de 200 entrariam
  // na primeira condição e receberiam apenas 20%? 
  // CORREÇÃO: organizar as condições corretamente.

  if (valor > 200) {
    desconto = valor * 0.20;

  } else if (valor > 100) {
    desconto = valor * 0.10;
  }

  return valor - desconto;
}

console.log(calcularDesconto(250)); // Esperado: 200
console.log(calcularDesconto(150)); // Esperado: 135
console.log(calcularDesconto(80));  // Esperado: 80



/* ==========================================================
   3. CONTADOR DE VOGAIS
   Uma ferramenta precisa contar quantas vogais existem
   em uma palavra, independentemente de serem maiúsculas
   ou minúsculas.
   ========================================================== */

function contarVogais(texto) {
  let quantidade = 0;

  for (let i = 0; i < texto.length; i++) {

    // 🐛 ERRO: faltaram os parênteses de toLowerCase.
    // toLowerCase é um método e precisa ser executado.
    // CORREÇÃO: toLowerCase().

    let letra = texto[i].toLowerCase();

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      quantidade++;
    }
  }

  return quantidade;
}

console.log(contarVogais("JavaScript"));  // Esperado: 3
console.log(contarVogais("PROGRAMACAO")); // Esperado: 5



/* ==========================================================
   4. SOMA DA DIAGONAL PRINCIPAL
   Um sistema recebe uma matriz quadrada e precisa somar
   os valores da diagonal principal.
   ========================================================== */

function somarDiagonal(matriz) {
  let soma = 0;

  for (let i = 0; i < matriz.length; i++) {

    // 🐛 ERRO: matriz.length - i acessava a diagonal
    // secundária e ainda começava em um índice inválido.
    // CORREÇÃO: na diagonal principal, linha e coluna
    // possuem o mesmo índice.

    soma += matriz[i][i];
  }

  return soma;
}

console.log(somarDiagonal([ [2, 4, 6], [1, 5, 8], [3, 7, 9] ])); // Esperado: 16
console.log(somarDiagonal([ [10, 2], [4, 20] ]));                // Esperado: 30

/* ==========================================================
   5. BUSCA DE PRODUTO
   Um sistema precisa localizar um produto pelo nome,
   ignorando diferenças entre letras maiúsculas
   e minúsculas.
   ========================================================== */

function procurarProduto(produtos, nome) {

  for (let i = 0; i < produtos.length; i++) {

    // 🐛 ERRO: a comparação diferenciava letras maiúsculas
    // de minúsculas.
    // CORREÇÃO: transformar os dois textos em minúsculos
    // antes de comparar.

    if (produtos[i].toLowerCase() === nome.toLowerCase()) {
      return i;
    }
  }

  return -1;
}

console.log(procurarProduto( ["Teclado", "Mouse", "Monitor"], "MOUSE" ));   // Esperado: 1
console.log(procurarProduto( ["Teclado", "Mouse", "Monitor"], "Notebook")); // Esperado: -1

/* ==========================================================
   6. CÁLCULO DE MÉDIA
   Uma plataforma calcula a média apenas dos números
   positivos.
   Se não houver números positivos, deve retornar 0.
   ========================================================== */

function calcularMediaPositivos(numeros) {
  let soma = 0;
  let quantidade = 0;

  for (let numero of numeros) {

    if (numero > 0) {
      soma += numero;

      // 🐛 ERRO 1: quantidade++ estava fora do if.
      // Assim, números negativos e zeros também eram
      // contabilizados na quantidade.
      // CORREÇÃO: contar somente dentro do if.

      quantidade++;
    }
  }

  // 🐛 ERRO 2: se não existissem números positivos,
  // a divisão poderia resultar em NaN.
  // CORREÇÃO: verificar se quantidade é zero.

  if (quantidade === 0) {
    return 0;
  }

  return soma / quantidade;
}

console.log(calcularMediaPositivos([10, -5, 20, 0])); // Esperado: 15
console.log(calcularMediaPositivos([-2, 0, -8]));     // Esperado: 0
console.log(calcularMediaPositivos([5, 10, 15]));     // Esperado: 10