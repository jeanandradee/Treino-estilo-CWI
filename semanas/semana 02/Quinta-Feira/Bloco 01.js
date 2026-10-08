/* ============================================================
🟦 B1 — TREINO DE QUINTA
3 QUESTÕES
Estilo CWI: problema fechado, lógica central e casos de borda.
Faça primeiro sem solução/ajuda.
============================================================ */

/* ============================================================
1️⃣ SEPARADOR DE REGISTROS
Receba um array de objetos:
{
  nome,
  ativo
}
Crie dois arrays:
- ativos → registros com ativo === true
- inativos → registros com ativo === false
Mantenha a ordem original.
Retorne:
{
  ativos,
  inativos
}
Os objetos podem ser colocados diretamente nos novos arrays.
Não altere os objetos originais.
============================================================ */

function separarRegistros(registros) {
  let ativos = [];
  let inativos = [];

  for (let { nome, ativo } of registros) {
    if (ativo === true) {
      ativos.push({ nome, ativo});
    } else {
      inativos.push({ nome, ativo});
    }
  }

  return {ativos, inativos};
}

console.log(separarRegistros([ {nome: "Ana", ativo: true}, {nome: "Bruno", ativo: false}, {nome: "Carlos", ativo: true}]));
// { ativos: [ {nome: "Ana", ativo: true}, {nome: "Carlos", ativo: true} ], inativos: [ {nome: "Bruno", ativo: false} ] }

console.log(separarRegistros([ {nome: "Ana", ativo: false}, {nome: "Bia", ativo: false}]));
// { ativos: [], inativos: [ {nome: "Ana", ativo: false}, {nome: "Bia", ativo: false} ] }

console.log(separarRegistros([{nome: "Carlos", ativo: true}, {nome: "Davi", ativo: true}]));
// { ativos: [ {nome: "Carlos", ativo: true}, {nome: "Davi", ativo: true} ], inativos: [] }

console.log(separarRegistros([]));
// { ativos: [], inativos: [] }

console.log(separarRegistros([ {nome: "Eva", ativo: true}, {nome: "Fabi", ativo: false},
 {nome: "Gabi", ativo: true}, {nome: "Hugo", ativo: false}]));
// { ativos: [ {nome: "Eva", ativo: true}, {nome: "Gabi", ativo: true} ],
//   inativos: [ {nome: "Fabi", ativo: false}, {nome: "Hugo", ativo: false} ] }

console.log(separarRegistros([ {nome: "Iara", ativo: false}, {nome: "João", ativo: true}, {nome: "Katia", ativo: false}]));
// { ativos: [ {nome: "João", ativo: true} ],
//  inativos: [ {nome: "Iara", ativo: false}, {nome: "Katia", ativo: false} ] }


/* ============================================================
2️⃣ MAIOR NOTA VÁLIDA
Receba um array de objetos:
{
  nome,
  nota
}
Encontre o participante com a MAIOR nota.
Porém:
- notas menores que 0 são inválidas e devem ser ignoradas;
- se houver empate, mantenha o primeiro participante;
- se todas as notas forem inválidas, retorne null.
Retorne um NOVO objeto contendo:
{
  nome,
  nota
}
Não altere os objetos originais.
============================================================ */

function maiorNota(participantes) {
  let maior = null;

  for (let { nome, nota } of participantes) {
    if (nota < 0) {
      continue;
    }

    if (maior === null || nota > maior.nota) {
      maior = { nome, nota };
    }
  }

  return maior;
}

console.log(maiorNota([ {nome: "Ana", nota: 7}, {nome: "Bruno", nota: 9}, {nome: "Carlos", nota: 8}]));
// {nome: "Bruno", nota: 9}

console.log(maiorNota([ {nome: "Ana", nota: -1}, {nome: "Bruno", nota: 6}, {nome: "Carlos", nota: 4}]));
// {nome: "Bruno", nota: 6}

console.log(maiorNota([ {nome: "Ana", nota: 10}, {nome: "Bruno", nota: 10}, {nome: "Carlos", nota: 8}]));
// {nome: "Ana", nota: 10}

console.log(maiorNota([ {nome: "Ana", nota: -5}, {nome: "Bruno", nota: -1}]));
// null

console.log(maiorNota([ {nome: "Ana", nota: 0}, {nome: "Bruno", nota: -3}, {nome: "Carlos", nota: 2}]));
// {nome: "Carlos", nota: 2}

console.log(maiorNota([]));
// null


/* ============================================================
3️⃣ CONVERSOR DE TEXTO
Receba uma string contendo palavras separadas por espaços.
Retorne um novo objeto:
{
  quantidadePalavras,
  primeira,
  ultima
}
Regras:
- quantidadePalavras = quantidade de palavras;
- primeira = primeira palavra;
- ultima = última palavra;
- se a string estiver vazia, retorne:
{
  quantidadePalavras: 0,
  primeira: null,
  ultima: null
}
Considere que os testes possuem apenas um espaço entre as palavras.
Não use split().
============================================================ */

function analisarTexto(texto) {
  let quantidadePalavras = 0;
  let primeira = null;
  let ultima = null;

  if (texto.length === 0) {
    return {quantidadePalavras, primeira, ultima};
  } 

    let palavra = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] !== " ") {
      palavra += texto[i];
    } else {
      quantidadePalavras++;

      if (primeira === null) {
        primeira = palavra;
      }

      ultima = palavra;
      palavra = "";
    }
  }

  quantidadePalavras++;
  
  if (primeira === null) {
    primeira = palavra;
  }

  ultima = palavra;

  return { quantidadePalavras, primeira, ultima };

}

console.log(analisarTexto("JavaScript"));
// { quantidadePalavras: 1, primeira: "JavaScript", ultima: "JavaScript" }

console.log(analisarTexto("JavaScript CWI"));
// { quantidadePalavras: 2, primeira: "JavaScript", ultima: "CWI" }

console.log(analisarTexto("eu estudo javascript"));
// { quantidadePalavras: 3, primeira: "eu", ultima: "javascript" }

console.log(analisarTexto("A B C D"));
// { quantidadePalavras: 4, primeira: "A", ultima: "D" }

console.log(analisarTexto(""));
// { quantidadePalavras: 0, primeira: null, ultima: null }

console.log(analisarTexto("treino quinta"));
// { quantidadePalavras: 2, primeira: "treino", ultima: "quinta" }

/* ============================================================
4️⃣ CONTADOR DE CATEGORIAS
Receba um array de objetos:
{
  nome,
  categoria
}
As categorias possíveis são:
- "A"
- "B"
- "C"
Conte quantos registros existem de cada categoria.
Retorne:
{
  A,
  B,
  C
}
Se aparecer uma categoria diferente, ela deve ser ignorada.
============================================================ */

function contarCategorias(registros) {
  let a = 0;
  let b = 0;
  let c = 0;

  for (let { categoria } of registros) {
    if (categoria === "A") {
      a ++;
    } else if (categoria === "B") {
      b ++;
    } else if (categoria === "C") {
      c ++;
    }
  }

  return {
    A:a,
    B:b,
    C:c
  }
}

console.log(contarCategorias([ {nome: "Ana", categoria: "A"}, {nome: "Bruno", categoria: "B"}, {nome: "Carlos", categoria: "A"}]));
// {A: 2, B: 1, C: 0}

console.log(contarCategorias([ {nome: "Ana", categoria: "C"}, {nome: "Bia", categoria: "C"}]));
// {A: 0, B: 0, C: 2}

console.log(contarCategorias([ {nome: "Ana", categoria: "X"}, {nome: "Bia", categoria: "A"}, {nome: "Caio", categoria: "Y"}]));
// {A: 1, B: 0, C: 0}

console.log(contarCategorias([]));
// {A: 0, B: 0, C: 0}

console.log(contarCategorias([ {nome: "A", categoria: "A"}, {nome: "B", categoria: "B"}, {nome: "C", categoria: "C"},
 {nome: "D", categoria: "A"}, {nome: "E", categoria: "C"}]));
// {A: 2, B: 1, C: 2}

console.log(contarCategorias([ {nome: "Ana", categoria: "B"}, {nome: "Bia", categoria: "B"}, {nome: "Caio", categoria: "B"}]));
// {A: 0, B: 3, C: 0}


/* ============================================================
5️⃣ TRANSFORMAÇÃO DE PEDIDOS
Cada pedido possui:
{
  produto,
  quantidade,
  preco
}
Calcule o total de cada pedido:
total = quantidade * preco
Retorne um NOVO array contendo:
{
  produto,
  total
}
Mantenha a ordem original.
Não altere os objetos recebidos.
============================================================ */

function calcularPedidos(pedidos) {
  let resultado = [];

  for (let {produto, quantidade, preco } of pedidos) {
    let total = quantidade * preco;
    resultado.push({ produto, total});
  }

  return resultado;
}

console.log(calcularPedidos([ {produto: "A", quantidade: 2, preco: 10}, {produto: "B", quantidade: 3, preco: 5}]));
// [ {produto: "A", total: 20}, {produto: "B", total: 15} ]

console.log(calcularPedidos([ {produto: "C", quantidade: 1, preco: 50}]));
// [ {produto: "C", total: 50} ]

console.log(calcularPedidos([ {produto: "A", quantidade: 0, preco: 100}, {produto: "B", quantidade: 2, preco: 20}]));
// [ {produto: "A", total: 0}, {produto: "B", total: 40} ]

console.log(calcularPedidos([]));
// []

console.log(calcularPedidos([ {produto: "X", quantidade: 5, preco: 2}, {produto: "Y", quantidade: 4, preco: 3},
 {produto: "Z", quantidade: 10, preco: 1}]));
// [ {produto: "X", total: 10}, {produto: "Y", total: 12}, {produto: "Z", total: 10} ]

console.log(calcularPedidos([ {produto: "Notebook", quantidade: 2, preco: 1250.5}]));
// [ {produto: "Notebook", total: 2501} ]


/* ============================================================
6️⃣ LOCALIZADOR DE PRIMEIRO RESULTADO
Receba um array de objetos:
{
  nome,
  pontos
}
Retorne o primeiro participante que tenha:
pontos >= 100
O resultado deve ser um NOVO objeto contendo:
{
  nome,
  pontos
}
Se nenhum participante atingir 100 pontos, retorne null.
Não altere os objetos originais.
============================================================ */

function primeiroResultado(participantes) {
 
  for (let { nome, pontos } of participantes) {
    if (pontos >= 100) {
      return {nome, pontos};
    }
  }

  return null;
}

console.log(primeiroResultado([ {nome: "Ana", pontos: 80}, {nome: "Bruno", pontos: 120}, {nome: "Carlos", pontos: 150}]));
// {nome: "Bruno", pontos: 120}

console.log(primeiroResultado([ {nome: "Ana", pontos: 100}, {nome: "Bruno", pontos: 200}]));
// {nome: "Ana", pontos: 100}

console.log(primeiroResultado([ {nome: "Ana", pontos: 99}, {nome: "Bruno", pontos: 100}]));
// {nome: "Bruno", pontos: 100}

console.log(primeiroResultado([ {nome: "Ana", pontos: 50}, {nome: "Bruno", pontos: 80}]));
// null

console.log(primeiroResultado([]));
// null

console.log(primeiroResultado([ {nome: "Ana", pontos: 150}, {nome: "Bruno", pontos: 150}, {nome: "Carlos", pontos: 200}]));
// {nome: "Ana", pontos: 150}