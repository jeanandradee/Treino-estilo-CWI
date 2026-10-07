/* ============================================================
🟦 B4 — TREINO DE QUARTA
3 QUESTÕES
Estilo CWI: problema fechado, uma lógica central e casos de borda.
Não precisa usar map/filter/reduce.
============================================================ */

/* ============================================================
1️⃣ AGRUPADOR DE VALORES
Dado um array de números, crie dois novos arrays:
- "baixos": números menores que 10
- "altos": números maiores ou iguais a 10
Mantenha a ordem original dos elementos.
Retorne:
{
  baixos,
  altos
}
Não altere o array original.
============================================================ */

function agruparValores(nums) {
  let baixos = [];
  let altos = [];

  for (let num of nums) {
    if (num < 10) {
      baixos.push(num);
    } else {
      altos.push(num);
    }
  }

  return {baixos, altos};
}

console.log(agruparValores([3, 12, 7, 20, 9]));
// { baixos: [3, 7, 9], altos: [12, 20] }

console.log(agruparValores([10, 11, 5, 2]));
// { baixos: [5, 2], altos: [10, 11] }

console.log(agruparValores([1, 2, 3]));
// { baixos: [1, 2, 3], altos: [] }

console.log(agruparValores([10, 20, 30]));
// { baixos: [], altos: [10, 20, 30] }

console.log(agruparValores([9, 10, 9, 10]));
// { baixos: [9, 9], altos: [10, 10] }

console.log(agruparValores([]));
// { baixos: [], altos: [] }


/* ============================================================
2️⃣ SELEÇÃO DE PRODUTO
Cada produto possui:
{
  nome,
  preco,
  disponivel
}
Encontre o produto disponível com o MENOR preço.
Se houver empate, mantenha o primeiro produto encontrado.
Retorne um NOVO objeto com:
{
  nome,
  preco
}
Se nenhum produto estiver disponível, retorne null.
============================================================ */

function produtoMaisBarato(produtos) {
  let menor = null;

  for (let { nome, preco, disponivel } of produtos) {
    if (disponivel === true) {
      
      if (menor === null || preco < menor.preco) {
        menor = {nome, preco};
      }
    }
  }

  return menor;
}

console.log(produtoMaisBarato([ {nome: "A", preco: 50, disponivel: true},
 {nome: "B", preco: 30, disponivel: true}, {nome: "C", preco: 40, disponivel: true}]));
// {nome: "B", preco: 30}

console.log(produtoMaisBarato([ {nome: "A", preco: 20, disponivel: false}, {nome: "B", preco: 35, disponivel: true},
 {nome: "C", preco: 10, disponivel: false}]));
// {nome: "B", preco: 35}

console.log(produtoMaisBarato([ {nome: "A", preco: 25, disponivel: true}, {nome: "B", preco: 25, disponivel: true},
 {nome: "C", preco: 40, disponivel: true}]));
// {nome: "A", preco: 25}

console.log(produtoMaisBarato([ {nome: "A", preco: 10, disponivel: false}, {nome: "B", preco: 20, disponivel: false}]));
// null

console.log(produtoMaisBarato([ {nome: "A", preco: 100, disponivel: true}]));
// {nome: "A", preco: 100}

console.log(produtoMaisBarato([]));
// null


/* ============================================================
3️⃣ RESUMO DE CARACTERES
Receba uma string e conte:
- quantas letras "A" existem
- quantas letras "B" existem
- quantos outros caracteres existem
A comparação deve ser EXATAMENTE com "A" e "B".
Por exemplo, "a" é considerado outro caractere.
Retorne:
{
  A: quantidadeA,
  B: quantidadeB,
  outros: quantidadeOutros
}
============================================================ */

function resumirCaracteres(texto) {
  let quantidadeA = 0;
  let quantidadeB = 0;
  let outros = 0;

  for (let caractere of texto) {
    if (caractere === "A") {
      quantidadeA ++;
    } else if (caractere === "B") {
      quantidadeB ++;
    } else {
      outros ++;
    }
  }

  return {
    A: quantidadeA,
    B: quantidadeB,
    outros
  };
}

console.log(resumirCaracteres("ABBA"));
// { A: 2, B: 2, outros: 0 }

console.log(resumirCaracteres("ABC123"));
// { A: 1, B: 1, outros: 4 }

console.log(resumirCaracteres("AAAA"));
// { A: 4, B: 0, outros: 0 }

console.log(resumirCaracteres("bbbb"));
// { A: 0, B: 0, outros: 4 }

console.log(resumirCaracteres("A-B-C"));
// { A: 1, B: 1, outros: 3 }

console.log(resumirCaracteres(""));
// { A: 0, B: 0, outros: 0 }