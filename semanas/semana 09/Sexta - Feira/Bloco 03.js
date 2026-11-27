/* ========================================
   Q1 — CLASSIFICADOR DE NOTAS
   ========================================
O código deveria classificar uma nota:
- Menor que 5: "Reprovado".
- De 5 até menor que 7: "Recuperação".
- De 7 até 10: "Aprovado".
- Fora do intervalo de 0 a 10: "Nota inválida".
Identifique e corrija o erro.
*/

function classificarNota(nota) {
  if (nota < 0 || nota > 10) {
    return "Nota inválida";
  }

  // ERRO CORRIGIDO:
  // Antes estava nota <= 5.
  // Isso classificava a nota 5 como "Reprovado".
  // O correto é nota < 5.
  if (nota < 5) {
    return "Reprovado";
  }

  if (nota >= 5 && nota < 7) {
    return "Recuperação";
  }

  return "Aprovado";
}

// Testes esperados
console.log(classificarNota(4));        // "Reprovado"
console.log(classificarNota(5));        // "Recuperação"
console.log(classificarNota(6));        // "Recuperação"
console.log(classificarNota(7));        // "Aprovado"
console.log(classificarNota(10));       // "Aprovado"
console.log(classificarNota(11));       // "Nota inválida"


/* ========================================
   Q2 — INVERSOR DE TEXTO
   ========================================
O código deveria inverter uma string, mantendo todos os caracteres.
Identifique e corrija o erro.
*/

function inverterTexto(texto) {
  let resultado = "";

  // ERRO CORRIGIDO:
  // Antes estava i > 0.
  // Isso fazia o loop parar antes de chegar ao índice 0.
  // O primeiro caractere da string não era incluído.
  // O correto é usar i >= 0.
  for (let i = texto.length - 1; i >= 0; i--) {
    resultado += texto[i];
  }

  return resultado;
}

// Testes esperados

console.log(inverterTexto("JavaScript"));   // "tpircSavaJ"
console.log(inverterTexto("CWI"));          // "IWC"
console.log(inverterTexto("AB"));           // "BA"
console.log(inverterTexto("A"));            // "A"
console.log(inverterTexto(""));             // ""

/* ========================================
   Q3 — LOCALIZADOR DE MAIOR VALOR
   ========================================
O código deveria retornar o índice do maior número encontrado no array.
Se houver empate, deve retornar o índice da primeira ocorrência.
Se o array estiver vazio, deve retornar -1.
Identifique e corrija o erro.
*/

function encontrarIndiceMaior(numeros) {
  if (numeros.length === 0) {
    return -1;
  }

  let maior = numeros[0];
  let indiceMaior = 0;

  // ERRO CORRIGIDO:
  // Antes estava i <= numeros.length.
  // Isso fazia o loop acessar uma posição inexistente.
  // O último índice válido é numeros.length - 1.
  // O correto é usar i < numeros.length.
  for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > maior) {
      maior = numeros[i];
      indiceMaior = i;
    }
  }

  return indiceMaior;
}

// Testes esperados
console.log(encontrarIndiceMaior([3, 8, 2, 5]));    // 1
console.log(encontrarIndiceMaior([10, 4, 10, 2]));  // 0
console.log(encontrarIndiceMaior([-5, -2, -9]));    // 1
console.log(encontrarIndiceMaior([7]));             // 0
console.log(encontrarIndiceMaior([]));              // -1


/* ========================================
   Q4 — CALCULADORA DE FRETE
   ========================================
O código deveria calcular o valor final de uma compra,
incluindo o frete.
REGRAS:
- Compras a partir de R$ 200 possuem frete grátis.
- Compras abaixo de R$ 200 possuem frete de R$ 20.
- O valor final deve ser a soma do valor da compra com o frete.
Identifique e corrija o erro.
*/

function calcularFrete(valorCompra) {
  let frete = 20;

  // ERRO CORRIGIDO:
  // Antes estava valorCompra > 200.
  // Isso fazia uma compra de exatamente R$ 200
  // receber frete de R$ 20.
  // O correto é usar >= 200,
  // pois compras a partir de R$ 200 têm frete grátis.
  if (valorCompra >= 200) {
    frete = 0;
  }

  return valorCompra + frete;
}

// Testes esperados

console.log(calcularFrete(100));      // 120
console.log(calcularFrete(199));      // 219
console.log(calcularFrete(200));      // 200
console.log(calcularFrete(250));      // 250
console.log(calcularFrete(0));        // 20