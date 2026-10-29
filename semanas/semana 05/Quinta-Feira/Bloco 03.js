/*
==========================================================
1. 📦 Estoque inconsistente
==========================================================

Enunciado:
Uma loja registra as quantidades de produtos. A função
deve somar apenas as quantidades positivas.

Erro encontrado:
O for utiliza i <= quantidades.length, fazendo com que
tente acessar uma posição que não existe no array.

Correção:
Utilizar i < quantidades.length.
*/

function calcularEstoque(quantidades) {
  let total = 0;

  // CORRIGIDO: usamos < em vez de <= para não acessar
  // uma posição inexistente no array.
  for (let i = 0; i < quantidades.length; i++) {
    if (quantidades[i] > 0) {
      total += quantidades[i];
    }
  }

  return total;
}

console.log(calcularEstoque([10, 0, 5, -3])); // 15
console.log(calcularEstoque([0, -2, 0]));     // 0
console.log(calcularEstoque([4, 6, 8]));      // 18


/*
==========================================================
2. 🚦 Controle de velocidade
==========================================================

Enunciado:
Contar quantas velocidades ultrapassaram o limite de 80.

Erro encontrado:
A condição verifica velocidade < 80, contando velocidades
abaixo do limite, em vez das que ultrapassaram o limite.

Correção:
Utilizar velocidade > 80.
*/

function contarExcessos(velocidades) {
  let excessos = 0;

  for (let velocidade of velocidades) {

    // CORRIGIDO: contamos apenas velocidades maiores que 80.
    // Uma velocidade igual a 80 não ultrapassa o limite.
    if (velocidade > 80) {
      excessos++;
    }
  }

  return excessos;
}

console.log(contarExcessos([60, 80, 90, 100])); // 2
console.log(contarExcessos([80, 70, 75]));      // 0
console.log(contarExcessos([81, 82, 83]));      // 3


/*
==========================================================
3. 🔤 Contagem de letras
==========================================================

Enunciado:
Contar quantas letras "a" existem em um texto,
ignorando diferenças entre maiúsculas e minúsculas.

Erro encontrado:
A comparação verifica somente a letra minúscula "a".
Por isso, letras maiúsculas "A" não são contabilizadas.

Correção:
Converter o texto para minúsculas antes de percorrê-lo.
*/

function contarLetrasA(texto) {
  let quantidade = 0;

  // CORRIGIDO: convertemos o texto para minúsculas.
  // Assim, "A" e "a" passam a ser tratados igualmente.
  texto = texto.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "a") {
      quantidade++;
    }
  }

  return quantidade;
}

console.log(contarLetrasA("banana"));  // 3
console.log(contarLetrasA("Abacaxi")); // 3
console.log(contarLetrasA("JAVA"));    // 2


/*
==========================================================
4. 🧮 Soma das diagonais
==========================================================

Enunciado:
Somar os elementos da diagonal principal de uma matriz
quadrada.

Erro encontrado:
O código utiliza matriz[i][i + 1], acessando a coluna
seguinte à diagonal principal.

Correção:
Utilizar matriz[i][i], pois o índice da linha e da coluna
deve ser igual na diagonal principal.
*/

function somarDiagonal(matriz) {
  let soma = 0;

  for (let i = 0; i < matriz.length; i++) {

    // CORRIGIDO: i + 1 acessaria outra coluna.
    // matriz[i][i] acessa a diagonal principal.
    soma += matriz[i][i];
  }

  return soma;
}

console.log(
  somarDiagonal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
); // 15

console.log(
  somarDiagonal([
    [2, 0],
    [0, 4]
  ])
); // 6

console.log(somarDiagonal([[7]])); // 7


/*
==========================================================
5. 🔎 Busca de palavra
==========================================================

Enunciado:
Verificar se uma palavra aparece em um array,
ignorando diferenças entre maiúsculas e minúsculas.

Erro encontrado:
A comparação palavra === procurada diferencia letras
maiúsculas de minúsculas.

Correção:
Converter as duas strings para minúsculas antes
de compará-las.
*/

function procurarPalavra(palavras, procurada) {

  // CORRIGIDO: normalizamos a palavra procurada.
  procurada = procurada.toLowerCase();

  for (let palavra of palavras) {

    // CORRIGIDO: comparamos ambas em minúsculas.
    if (palavra.toLowerCase() === procurada) {
      return true;
    }
  }

  return false;
}

console.log(
  procurarPalavra(["Casa", "Rua", "Praça"], "casa")
); // true

console.log(
  procurarPalavra(["Sol", "Lua"], "MAR")
); // false

console.log(
  procurarPalavra(["JavaScript", "Python"], "PYTHON")
); // true


/*
==========================================================
6. 📊 Média dos valores válidos
==========================================================

Enunciado:
Calcular a média somente dos números positivos.
Se não houver números positivos, retornar 0.

Erro encontrado:
A variável quantidade é incrementada fora do if.
Assim, todos os valores são contados, inclusive zeros
e números negativos.

Correção:
Incrementar quantidade somente quando valor > 0.
*/

function calcularMediaPositivos(valores) {
  let soma = 0;
  let quantidade = 0;

  for (let valor of valores) {
    if (valor > 0) {
      soma += valor;

      // CORRIGIDO: contamos somente os valores positivos.
      quantidade++;
    }
  }

  // Se não houver positivos, evitamos divisão por zero.
  if (quantidade === 0) {
    return 0;
  }

  return soma / quantidade;
}

console.log(calcularMediaPositivos([10, 20, -5, 0])); // 15
console.log(calcularMediaPositivos([-2, 0, -8]));     // 0
console.log(calcularMediaPositivos([5, 15, 10]));     // 10