/* ============================================================
🟨 B2 — TREINO DE QUARTA
6 desafios.
Tente resolver sem solução/ajuda antes de enviar.
Cada desafio possui 6 testes.
============================================================ */

/* ============================================================
1️⃣ SEPARADOR DE VALORES
Receba um array de números.
Crie um NOVO objeto:
{
  positivos: [],
  negativos: [],
  zeros: []
}
Regras:
- positivos: valores > 0
- negativos: valores < 0
- zeros: valores === 0
- preserve a ordem dentro de cada grupo
- não altere o array original
============================================================ */

function separarValores(nums) {
  let positivos = [];
  let negativos = [];
  let zeros = [];

  for (let num of nums) {
    if (num > 0) {
      positivos.push(num);
    } else if (num < 0) {
      negativos.push(num);
    } else {
      zeros.push(num);
    }
  }

  return {positivos, negativos, zeros};
}

console.log(separarValores([4, -2, 0, 7, -5]));
// { positivos: [4, 7], negativos: [-2, -5], zeros: [0] }

console.log(separarValores([-3, -8, -1]));
// { positivos: [], negativos: [-3, -8, -1], zeros: [] }

console.log(separarValores([0, 0, 2, 4]));
// { positivos: [2, 4], negativos: [], zeros: [0, 0] }

console.log(separarValores([5]));
// { positivos: [5], negativos: [], zeros: [] }

console.log(separarValores([-2, 0, 3, 0, -1]));
// { positivos: [3], negativos: [-2, -1], zeros: [0, 0] }

console.log(separarValores([]));
// { positivos: [], negativos: [], zeros: [] }


/* ============================================================
2️⃣ CONVERSOR DE STATUS
Receba um array de registros:
{
  nome,
  status
}
Os status possíveis são:
- "PENDENTE"
- "APROVADO"
- "CANCELADO"
Retorne um NOVO array contendo:
{
  nome,
  status
}
Regras:
- PENDENTE → "AGUARDANDO"
- APROVADO → "CONCLUIDO"
- CANCELADO → "ENCERRADO"
- qualquer outro status → "DESCONHECIDO"
- preserve a ordem
- não altere os objetos originais
============================================================ */

function converterStatus(registros) {
  let resultado = [];

  for (let {nome, status } of registros) {
    if (status === "PENDENTE") {
      status = "AGUARDANDO";
    } else if (status === "APROVADO") {
      status = "CONCLUIDO";
    } else if (status === "CANCELADO") {
      status = "ENCERRADO";
    } else {
      status = "DESCONHECIDO";
    }

    resultado.push({nome, status});
  }

  return resultado;
}

console.log(converterStatus([ {nome: "Ana", status: "PENDENTE"}, {nome: "Bia", status: "APROVADO"}]));
// [ {nome: "Ana", status: "AGUARDANDO"}, {nome: "Bia", status: "CONCLUIDO"} ]

console.log(converterStatus([ {nome: "Carlos", status: "CANCELADO"}]));
// [ {nome: "Carlos", status: "ENCERRADO"} ]

console.log(converterStatus([ {nome: "Davi", status: "OUTRO"}]));
// [ {nome: "Davi", status: "DESCONHECIDO"} ]

console.log(converterStatus([ {nome: "Eva", status: "APROVADO"}, {nome: "Fábio", status: "PENDENTE"},
 {nome: "Gabi", status: "CANCELADO"}]));
// [ {nome: "Eva", status: "CONCLUIDO"}, {nome: "Fábio", status: "AGUARDANDO"}, {nome: "Gabi", status: "ENCERRADO"} ]

console.log(converterStatus([ {nome: "Hugo", status: "PENDENTE"}, {nome: "Iara", status: "PENDENTE"}]));
// [ {nome: "Hugo", status: "AGUARDANDO"}, {nome: "Iara", status: "AGUARDANDO"} ]

console.log(converterStatus([]));
// []


/* ============================================================
3️⃣ LOCALIZADOR DE MAIOR VALOR
Receba um objeto contendo valores numéricos:
{
  produtoA: 120,
  produtoB: 80,
  produtoC: 200
}
Retorne:
{
  chave,
  valor
}
Regras:
- encontre o maior valor;
- em caso de empate, mantenha a primeira chave encontrada;
- objeto vazio → {chave: null, valor: null};
- não altere o objeto original.
============================================================ */

function maiorValor(obj) {
  let chave = null;
  let valor = null;

  for (let key in obj) {
    if (valor === null || obj[key] > valor) {
      valor = obj[key];
      chave = key;
    }
  }

  return {chave, valor};
}

console.log(maiorValor({ produtoA: 120, produtoB: 80, produtoC: 200}));
// {chave: "produtoC", valor: 200}

console.log(maiorValor({ produtoA: 100, produtoB: 100, produtoC: 50}));
// {chave: "produtoA", valor: 100}

console.log(maiorValor({ a: -10, b: -3, c: -8}));
// {chave: "b", valor: -3}

console.log(maiorValor({ item: 75}));
// {chave: "item", valor: 75}

console.log(maiorValor({ x: 20, y: 50, z: 50}));
// {chave: "y", valor: 50}

console.log(maiorValor({}));
// {chave: null, valor: null}


/* ============================================================
4️⃣ DECODIFICADOR DE TEXTO
Receba uma string.
Cada caractere "#" significa:
"ignore o próximo caractere".
O "#" também deve ser ignorado.
Regras:
- percorra a string da esquerda para a direita;
- quando encontrar "#", pule o caractere seguinte;
- se "#" estiver no final, apenas ignore o "#";
- mantenha todos os outros caracteres na ordem.
Exemplo:
"A#BC" → "AC"
============================================================ */

function decodificarTexto(texto) {
  let resultado = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === "#") {
      i ++;
      continue;
    }
    resultado += texto[i];
  }
  
  return resultado;
}

console.log(decodificarTexto("A#BC")); // "AC"

console.log(decodificarTexto("ABC")); // "ABC"

console.log(decodificarTexto("#ABC")); // "BC"

console.log(decodificarTexto("AB#CD#EF")); // "ABCF"

console.log(decodificarTexto("A##BC")); // "AC"

console.log(decodificarTexto("ABC#")); // "ABC"

/* ============================================================
5️⃣ RESUMO DE NOTAS
Receba:
{
  nome,
  notas: [nota1, nota2, nota3]
}
Retorne um NOVO array contendo:
{
  nome,
  media,
  situacao
}
Regras:
- média = soma das 3 notas / 3
- média >= 7 → "APROVADO"
- média < 7 → "REPROVADO"
- a média deve ser número
- preserve a ordem
- não altere os objetos originais
============================================================ */

function resumoNotas(alunos) {
  let resultado = [];

  for (let { nome, notas } of alunos) {
    let situacao;
    let soma = 0;
    for (let nota of notas) {
      soma += nota;
    }
    let media = soma / notas.length;

    if (media >= 7) {
      situacao = "APROVADO";
    } else {
      situacao = "REPROVADO";
    }

    resultado.push({nome, media, situacao});
  }

  return resultado;
}

console.log(resumoNotas([ {nome: "Ana", notas: [8, 7, 9]}]));
// [ {nome: "Ana", media: 8, situacao: "APROVADO"} ]

console.log(resumoNotas([ {nome: "Bia", notas: [5, 6, 4]}]));
// [ {nome: "Bia", media: 5, situacao: "REPROVADO"} ]

console.log(resumoNotas([ {nome: "Carlos", notas: [7, 7, 7]}]));
// [ {nome: "Carlos", media: 7, situacao: "APROVADO"} ]

console.log(resumoNotas([ {nome: "Davi", notas: [10, 8, 9]}, {nome: "Eva", notas: [6, 7, 5]}]));
// [ {nome: "Davi", media: 9, situacao: "APROVADO"}, {nome: "Eva", media: 6, situacao: "REPROVADO"} ]

console.log(resumoNotas([ {nome: "Fábio", notas: [0, 0, 0]}]));
// [ {nome: "Fábio", media: 0, situacao: "REPROVADO"} ]

console.log(resumoNotas([]));
// []


/* ============================================================
6️⃣ CONTROLE DE ESTOQUE
Receba movimentos:
{
  produto,
  tipo,
  quantidade
}
O estoque começa em 0 para cada produto.
Regras:
- "ENTRADA" → adiciona quantidade;
- "SAIDA" → remove somente se houver quantidade suficiente;
- saída sem estoque suficiente → ignore;
- tipos desconhecidos → ignore.
Retorne um NOVO objeto contendo o estoque final
de cada produto.
Exemplo:
[
  {produto: "A", tipo: "ENTRADA", quantidade: 10},
  {produto: "A", tipo: "SAIDA", quantidade: 3}
]
→
{
  A: 7
}

============================================================ */

function controlarEstoque(movimentos) {

  let estoque = {};

  for (let movimento of movimentos) {

    let produto = movimento.produto;
    let tipo = movimento.tipo;
    let quantidade = movimento.quantidade;

    if (estoque[produto] === undefined) {
      estoque[produto] = 0;
    }

    if (tipo === "ENTRADA") {
      estoque[produto] += quantidade;
    } else if (tipo === "SAIDA") {

      if (estoque[produto] >= quantidade) {
        estoque[produto] -= quantidade;
      }

    }
  }

  return estoque;
}

console.log(controlarEstoque([ {produto: "A", tipo: "ENTRADA", quantidade: 10}, {produto: "A", tipo: "SAIDA", quantidade: 3}]));
// {A: 7}

console.log(controlarEstoque([ {produto: "A", tipo: "SAIDA", quantidade: 5}, {produto: "A", tipo: "ENTRADA", quantidade: 8}]));
// {A: 8}

console.log(controlarEstoque([ {produto: "A", tipo: "ENTRADA", quantidade: 10}, {produto: "B", tipo: "ENTRADA", quantidade: 5},
 {produto: "A", tipo: "SAIDA", quantidade: 4}]));
// {A: 6, B: 5}

console.log(controlarEstoque([ {produto: "A", tipo: "ENTRADA", quantidade: 5}, {produto: "A", tipo: "SAIDA", quantidade: 8},
 {produto: "A", tipo: "SAIDA", quantidade: 2}]));
// {A: 3}

console.log(controlarEstoque([ {produto: "X", tipo: "ENTRADA", quantidade: 10}, {produto: "Y", tipo: "ENTRADA", quantidade: 20},
  {produto: "X", tipo: "SAIDA", quantidade: 10}]));
// {X: 0, Y: 20}

console.log(controlarEstoque([]));
// {}