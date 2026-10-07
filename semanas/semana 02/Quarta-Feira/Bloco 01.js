/* ============================================================
🟨 B1 — TREINO DE QUARTA
REGRAS GERAIS:
- Resolva usando JavaScript.
- Tente primeiro sem solução/ajuda.
- Preserve os arrays/objetos originais quando solicitado.
- Cada desafio possui 6 testes.
============================================================ */

/* ============================================================
1️⃣ PRIMEIRO VALOR VÁLIDO
Encontre o primeiro número que seja:
- positivo
- e par
Retorne:
{valor, posicao}
Se não existir:
{valor: null, posicao: -1}
============================================================ */

function primeiroPositivoPar(nums) {
  let valor = null;
  let posicao = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] % 2 === 0) {
      valor = nums[i];
      posicao = i;
      break;
    }
  }

  return{valor, posicao};
}

console.log(primeiroPositivoPar([-3, 5, -2, 7, 8, 10])); // {valor: 8, posicao: 4}

console.log(primeiroPositivoPar([-4, -2, 3, 5])); // {valor: null, posicao: -1}

console.log(primeiroPositivoPar([0, -6, 4, 8])); // {valor: 4, posicao: 2}

console.log(primeiroPositivoPar([2, 4, 6])); // {valor: 2, posicao: 0}

console.log(primeiroPositivoPar([-1, 3, 7, 9, 12])); // {valor: 12, posicao: 4}

console.log(primeiroPositivoPar([])); // {valor: null, posicao: -1}

/* ============================================================
2️⃣ MONTAGEM DE CÓDIGO
Receba um array de strings.
Para cada string:
- inverta os caracteres;
- depois coloque o resultado na sequência final.
Exemplo:
["AB", "CD", "EF"] → "BADCFE"
Regras:
- mantenha a ordem dos elementos;
- não use reverse();
- array vazio retorna "".
============================================================ */

function montarCodigo(partes) {
  let resultado = "";

  for (let parte of partes) {
    for (let i = parte.length -1; i >= 0; i--) {
       resultado += parte[i]; 
    }
  }

  return resultado;
}

console.log(montarCodigo(["AB", "CD", "EF"])); // "BADCFE"

console.log(montarCodigo(["JS"])); // "SJ"

console.log(montarCodigo(["ABC", "D"])); // "CBAD"

console.log(montarCodigo(["12", "34"])); // "2143"

console.log(montarCodigo(["A", "BC", "DEF"])); // "ACBFED"

console.log(montarCodigo([])); // ""

/* ============================================================
3️⃣ REGISTRO DE PONTUAÇÃO
Receba jogadores no formato:
{nome, pontos}
Retorne um NOVO array contendo somente os jogadores
que possuem a MAIOR pontuação.
Regras:
- descubra a maior pontuação;
- mantenha todos os empatados;
- preserve a ordem original;
- não altere os objetos originais;
- array vazio → [].
============================================================ */

function maioresPontuadores(jogadores) {
  let resultado = [];

  let maior = null;

  for (let {nome, pontos} of jogadores) {
    if (maior === null || pontos > maior.pontos) {
      maior = {nome, pontos};
    }
  }

  for (let {nome, pontos} of jogadores) {
    if (pontos === maior.pontos) {
      resultado.push({nome, pontos});
    }
  }

  return resultado;
}

console.log(maioresPontuadores([ {nome: "Ana", pontos: 80}, {nome: "Carlos", pontos: 95}, {nome: "Bia", pontos: 70}]));
// [ {nome: "Carlos", pontos: 95} ]

console.log(maioresPontuadores([ {nome: "Ana", pontos: 100}, {nome: "Carlos", pontos: 100}, {nome: "Bia", pontos: 80}]));
// [ {nome: "Ana", pontos: 100}, {nome: "Carlos", pontos: 100} ]

console.log(maioresPontuadores([ {nome: "Ana", pontos: 50}, {nome: "Bia", pontos: 90},
 {nome: "Carlos", pontos: 90}, {nome: "Davi", pontos: 90}]));
// [ {nome: "Bia", pontos: 90}, {nome: "Carlos", pontos: 90},  {nome: "Davi", pontos: 90} ]

console.log(maioresPontuadores([ {nome: "Ana", pontos: 0}, {nome: "Bia", pontos: -5}]));
// [ {nome: "Ana", pontos: 0} ]

console.log(maioresPontuadores([ {nome: "Ana", pontos: 10}]));
// [ {nome: "Ana", pontos: 10} ]

console.log(maioresPontuadores([]));
// []


/* ============================================================
4️⃣ ANALISADOR DE PALAVRAS
Receba um array de palavras.
Retorne:
{
  quantidade,
  maior,
  menor
}
Regras:
- quantidade = número de palavras;
- maior = palavra com mais caracteres;
- menor = palavra com menos caracteres;
- em caso de empate, mantenha a primeira;
- array vazio → {quantidade: 0, maior: null, menor: null}.
============================================================ */

function analisarPalavras(palavras) {
  let quantidade = palavras.length;
  let maior = null;
  let menor = null;

  for (let palavra of palavras) {
    if (maior === null || palavra.length > maior.length) {
      maior = palavra;
    }

    if (menor === null || palavra.length < menor.length) {
      menor = palavra;
    }
  }

  return {quantidade, maior, menor};
}

console.log(analisarPalavras(["casa", "computador", "sol"]));
// {quantidade: 3, maior: "computador", menor: "sol"}

console.log(analisarPalavras(["abc", "def", "ghi"]));
// {quantidade: 3, maior: "abc", menor: "abc"}

console.log(analisarPalavras(["javascript"]));
// {quantidade: 1, maior: "javascript", menor: "javascript"}

console.log(analisarPalavras(["a", "ab", "abc", "abcd"]));
// {quantidade: 4, maior: "abcd", menor: "a"}

console.log(analisarPalavras(["casa", "mesa", "livro"]));
// {quantidade: 3, maior: "livro", menor: "casa"}

console.log(analisarPalavras([]));
// {quantidade: 0, maior: null, menor: null}


/* ============================================================
5️⃣ PROCESSADOR DE MOVIMENTOS
Receba um array de movimentos:
{tipo, valor}
O saldo começa em 0.
Regras:
- "ENTRADA" → adiciona o valor;
- "SAIDA" → subtrai somente se houver saldo suficiente;
- caso contrário, ignore a saída;
- tipos desconhecidos são ignorados.
Retorne:
{
  saldo,
  entradas,
  saidas
}
Onde:
- entradas = soma dos valores realmente adicionados;
- saidas = soma dos valores realmente retirados.
============================================================ */

function processarMovimentos(movimentos) {
  let saldo = 0;
  let entradas = 0;
  let saidas = 0;

  for (let {tipo, valor} of movimentos) {
    if (tipo === "ENTRADA" ) {
      saldo += valor;
      entradas += valor;
    } else if (tipo === "SAIDA" && saldo >= valor) {
      saldo -= valor;
      saidas += valor;
    }
  }

  return {saldo, entradas, saidas};
}

console.log(processarMovimentos([ {tipo: "ENTRADA", valor: 100}, {tipo: "SAIDA", valor: 30}]));
// {saldo: 70, entradas: 100, saidas: 30}

console.log(processarMovimentos([ {tipo: "SAIDA", valor: 50}, {tipo: "ENTRADA", valor: 100}]));
// {saldo: 100, entradas: 100, saidas: 0}

console.log(processarMovimentos([ {tipo: "ENTRADA", valor: 200}, {tipo: "SAIDA", valor: 50},
 {tipo: "SAIDA", valor: 70}]));
// {saldo: 80, entradas: 200, saidas: 120}

console.log(processarMovimentos([ {tipo: "ENTRADA", valor: 100}, {tipo: "SAIDA", valor: 150},
 {tipo: "SAIDA", valor: 40}]));
// {saldo: 60, entradas: 100, saidas: 40}

console.log(processarMovimentos([ {tipo: "TESTE", valor: 500}, {tipo: "ENTRADA", valor: 20}]));
// {saldo: 20, entradas: 20, saidas: 0}

console.log(processarMovimentos([]));
// {saldo: 0, entradas: 0, saidas: 0}

/* ============================================================
6️⃣ TRANSFORMAÇÃO DE REGISTROS
Receba:
{nome, idade, ativo}
Retorne um NOVO array contendo:
{nome, categoria}
Regras:
- idade < 18 → "MENOR"
- idade >= 18 e ativo === true → "ADULTO_ATIVO"
- idade >= 18 e ativo === false → "ADULTO_INATIVO"
Preserve a ordem.
Não altere os objetos originais.
============================================================ */

function transformarRegistros(registros) {
  let resultado = [];

  for (let {nome, idade, ativo} of registros) {
    let categoria;

    if (idade < 18) {
      categoria = "MENOR";
    } else if (idade >= 18 && ativo === true) {
      categoria = "ADULTO_ATIVO";
    } else {
      categoria = "ADULTO_INATIVO";
    }

    resultado.push({nome, categoria});
  }

  return resultado;
}

console.log(transformarRegistros([ {nome: "Ana", idade: 17, ativo: true}, {nome: "Carlos", idade: 25, ativo: true}]));
// [ {nome: "Ana", categoria: "MENOR"}, {nome: "Carlos", categoria: "ADULTO_ATIVO"} ]

console.log(transformarRegistros([ {nome: "Bia", idade: 30, ativo: false}]));
// [ {nome: "Bia", categoria: "ADULTO_INATIVO"} ]

console.log(transformarRegistros([ {nome: "Davi", idade: 18, ativo: true}]));
// [ {nome: "Davi", categoria: "ADULTO_ATIVO"} ]

console.log(transformarRegistros([ {nome: "Eva", idade: 18, ativo: false}, {nome: "Fábio", idade: 12, ativo: true}]));
// [ {nome: "Eva", categoria: "ADULTO_INATIVO"}, {nome: "Fábio", categoria: "MENOR"} ]

console.log(transformarRegistros([ {nome: "Gabi", idade: 10, ativo: false}, {nome: "Hugo", idade: 40, ativo: true}]));
// [ {nome: "Gabi", categoria: "MENOR"}, {nome: "Hugo", categoria: "ADULTO_ATIVO"} ]

console.log(transformarRegistros([]));
// []