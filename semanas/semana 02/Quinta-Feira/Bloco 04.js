/* ============================================================
🟪 B4 — MISTURA DE SKILLS
3 questões
Nível progressivo.
Cada questão mistura conhecimentos diferentes.
A dificuldade vem principalmente da interpretação do enunciado.
Faça sem solução/ajuda primeiro.
============================================================ */

/* ============================================================
1️⃣ ANALISADOR DE IDENTIFICADORES
Um sistema recebe códigos no formato:
"ABC-123"
Regras:
- os 3 primeiros caracteres formam o prefixo;
- depois do "-" vem o número;
- o código é válido somente se:
  - tiver exatamente 3 caracteres antes do "-";
  - o número tiver exatamente 3 dígitos;
  - o número for maior ou igual a 100.
Retorne:
{
  prefixo,
  numero,
  valido
}
Se o formato não for válido, "numero" deve ser null.
Não use split().
============================================================ */

function analisarCodigo(codigo) {
  let prefixo = "";

  for (let i = 0; i < codigo.length; i++) {
    if (codigo[i] === "-") {
      break;
    }

    prefixo += codigo[i];
  }

  let numeroTexto = "";
  let encontrouTraco = false;

  for (let i = 0; i < codigo.length; i++) {
    if (codigo[i] === "-") {
      encontrouTraco = true;
      continue;
    }

    if (encontrouTraco) {
      numeroTexto += codigo[i];
    }
  }

  let numero = null;

  if (
    encontrouTraco &&
    prefixo.length === 3 &&
    numeroTexto.length === 3 &&
    numeroTexto >= "000" &&
    numeroTexto <= "999"
  ) {
    numero = Number(numeroTexto);
  }

  let valido =
    prefixo.length === 3 &&
    numeroTexto.length === 3 &&
    numero !== null &&
    numero >= 100;

  return { prefixo, numero, valido };
}

console.log(analisarCodigo("ABC-123"));
// {prefixo: "ABC", numero: 123, valido: true}

console.log(analisarCodigo("XYZ-999"));
// {prefixo: "XYZ", numero: 999, valido: true}

console.log(analisarCodigo("AB-123"));
// {prefixo: "AB", numero: 123, valido: false}

console.log(analisarCodigo("ABC-99"));
// {prefixo: "ABC", numero: 99, valido: false}

console.log(analisarCodigo("ABC-1500"));
// {prefixo: "ABC", numero: null, valido: false}

console.log(analisarCodigo("ABC123"));
// {prefixo: "ABC", numero: null, valido: false}


/* ============================================================
2️⃣ RESUMO DA MATRIZ
Receba uma matriz de números.
Percorra todos os valores e retorne:
{
  somaPares,
  somaImpares,
  maior,
  menor
}
Regras:
- números pares entram somente em somaPares;
- números ímpares entram somente em somaImpares;
- maior e menor consideram todos os números;
- a matriz terá pelo menos um número.
Não altere a matriz.
============================================================ */

function resumirMatriz(matriz) {
  let somaPares = 0;
  let somaImpares = 0;
  let maior = null;
  let menor = null;

  for (let linha of matriz) {
    for (let num of linha) {
      if (num % 2 === 0) {
        somaPares += num;
      } else {
        somaImpares += num;
      }

      if (maior === null || num > maior) {
        maior = num;
      }

      if (menor === null || num < menor) {
        menor = num;
      }
    }
  }

  return {
    somaPares,
    somaImpares,
    maior,
    menor
  }
}

console.log(resumirMatriz([ [1, 2], [3, 4] ]));
// { somaPares: 6, somaImpares: 4,  maior: 4, menor: 1 }

console.log(resumirMatriz([ [10, 20], [30, 40] ]));
// { somaPares: 100, somaImpares: 0, maior: 40, menor: 10 }

console.log(resumirMatriz([ [1, 3], [5, 7] ]));
// { somaPares: 0, somaImpares: 16, maior: 7, menor: 1 }

console.log(resumirMatriz([ [-2, 4], [-6, 3] ]));
// { somaPares: -4, somaImpares: 3, maior: 4, menor: -6 }

console.log(resumirMatriz([ [0, 5], [2, -3] ]));
// { somaPares: 2, somaImpares: 2, maior: 5, menor: -3 }

console.log(resumirMatriz([ [8] ]));
// { somaPares: 8, somaImpares: 0, maior: 8, menor: 8 }


/* ============================================================
3️⃣ PROCESSADOR DE MOVIMENTAÇÕES
Um sistema recebe movimentações de produtos:
{
  produto,
  tipo,
  quantidade
}
O estoque começa em 0 para cada produto.
Regras:
ENTRADA:
→ adiciona a quantidade ao estoque.
SAIDA:
→ só realiza a saída se houver quantidade suficiente.
Depois de processar todas as movimentações, retorne:
{
  estoque,
  maiorEstoque
}
Onde:
- "estoque" é um objeto com o saldo final de cada produto;
- "maiorEstoque" é o nome do produto que terminou com
  a maior quantidade;
- em caso de empate, mantenha o primeiro produto que
  atingiu aquela maior quantidade;
- movimentações desconhecidas devem ser ignoradas.
Se não houver nenhuma movimentação, retorne:
{
  estoque: {},
  maiorEstoque: null
}
============================================================ */

function processarMovimentacoes(movimentos) {
  let estoque = {};
  let maiorEstoque = null;

  for (let movimento of movimentos) {
    let produto = movimento.produto;
    let tipo = movimento.tipo;
    let quantidade = movimento.quantidade;

    if (tipo !== "ENTRADA" && tipo !== "SAIDA") {
      continue;
    }

    if (estoque[produto] === undefined) {
      estoque[produto] = 0;
    }

    if (tipo === "ENTRADA") {
      estoque[produto] += quantidade;
    }

    if (tipo === "SAIDA") {
      if (estoque[produto] >= quantidade) {
        estoque[produto] -= quantidade;
      }
    }

    if (
      maiorEstoque === null ||
      estoque[produto] > estoque[maiorEstoque]
    ) {
      maiorEstoque = produto;
    }
  }

  return {
    estoque,
    maiorEstoque
  };
}

console.log(processarMovimentacoes([{produto: "A", tipo: "ENTRADA", quantidade: 10},
  {produto: "B", tipo: "ENTRADA", quantidade: 5}]));
// { estoque: {A: 10, B: 5}, maiorEstoque: "A" }

console.log(processarMovimentacoes([{produto: "A", tipo: "ENTRADA", quantidade: 10},
  {produto: "A", tipo: "SAIDA", quantidade: 4}]));
// { estoque: {A: 6}, maiorEstoque: "A" }

console.log(processarMovimentacoes([{produto: "A", tipo: "ENTRADA", quantidade: 10},
 {produto: "B", tipo: "ENTRADA", quantidade: 10}, {produto: "C", tipo: "ENTRADA", quantidade: 5}]));
// { estoque: {A: 10, B: 10, C: 5}, maiorEstoque: "A" }

console.log(processarMovimentacoes([{produto: "A", tipo: "SAIDA", quantidade: 5},
 {produto: "B", tipo: "ENTRADA", quantidade: 3}]));
// { estoque: {A: 0, B: 3}, maiorEstoque: "B" }

console.log(processarMovimentacoes([{produto: "A", tipo: "ENTRADA", quantidade: 5},
 {produto: "A", tipo: "X", quantidade: 100}, {produto: "B", tipo: "ENTRADA", quantidade: 8}]));
// { estoque: {A: 5, B: 8}, maiorEstoque: "B" }

console.log(processarMovimentacoes([]));
// { estoque: {}, maiorEstoque: null }