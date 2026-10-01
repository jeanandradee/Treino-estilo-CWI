/*🟨 B2 — LÓGICA EM AÇÃO
Agora subimos um degrau, mas sem jogar um caminhão de lógica nova. 😎
As 3 questões continuam com a ideia de extrair várias informações, só que usando estruturas diferentes.
1️⃣ Relatório de Vendas 🛒
Uma loja registra as vendas do dia:
{
  produto: "Teclado",
  quantidade: 3,
  preco: 80
}
A função deve gerar um relatório com:
totalItens → quantidade total de produtos vendidos
faturamento → soma de quantidade * preco
maiorVenda → maior valor de uma venda individual
produtoMaiorVenda → produto correspondente à maior venda
vendasAcimaDe100 → quantidade de vendas cujo valor individual foi maior que 100
Se não houver vendas:
{
  totalItens: 0,
  faturamento: 0,
  maiorVenda: null,
  produtoMaiorVenda: null,
  vendasAcimaDe100: 0
}*/

function analisarVendas(vendas) {
  let totalItens = 0;
  let faturamento = 0;
  let maiorVenda = null;
  let produtoMaiorVenda = null;
  let vendasAcimaDe100 = 0;

  for (let { produto, quantidade, preco } of vendas) {
    totalItens += quantidade;

    let venda = quantidade * preco;
    faturamento += venda;

    // Compara o valor TOTAL da venda
    if (maiorVenda === null || venda > maiorVenda) {
      maiorVenda = venda;
      produtoMaiorVenda = produto;
    }

    if (venda > 100) {
      vendasAcimaDe100++;
    }
  }

  return {
    totalItens,
    faturamento,
    maiorVenda,
    produtoMaiorVenda,
    vendasAcimaDe100
  };
}

console.log(analisarVendas([{produto: "Teclado", quantidade: 2, preco: 80},
 {produto: "Mouse", quantidade: 3, preco: 40}, {produto: "Monitor", quantidade: 1, preco: 500}]));
// { totalItens: 6, faturamento: 780, maiorVenda: 500, produtoMaiorVenda: "Monitor", vendasAcimaDe100: 3 }

console.log(analisarVendas([{produto: "Cabo", quantidade: 2, preco: 20},
 {produto: "Fonte", quantidade: 1, preco: 90}]));
// { totalItens: 3, faturamento: 130, maiorVenda: 90, produtoMaiorVenda: "Fonte", vendasAcimaDe100: 0 }

console.log(analisarVendas([{produto: "Livro", quantidade: 1, preco: 100},
 {produto: "Caneta", quantidade: 2, preco: 10}]));
// { totalItens: 3, faturamento: 120, maiorVenda: 100, produtoMaiorVenda: "Livro", vendasAcimaDe100: 0 }

console.log(analisarVendas([]));
// { totalItens: 0, faturamento: 0, maiorVenda: null, produtoMaiorVenda: null, vendasAcimaDe100: 0 }

console.log(analisarVendas([{produto: "A", quantidade: 1, preco: 150},
 {produto: "B", quantidade: 3, preco: 50}, {produto: "C", quantidade: 2, preco: 75}]));
// { totalItens: 6, faturamento: 450, maiorVenda: 150, produtoMaiorVenda: "A", vendasAcimaDe100: 3 }

console.log(analisarVendas([{produto: "A", quantidade: 2, preco: 60},{produto: "B", quantidade: 1, preco: 120}]));
// { totalItens: 3, faturamento: 240, maiorVenda: 120, produtoMaiorVenda: "B", vendasAcimaDe100: 2 }

/*2️⃣ Analisador de Frases 📝
Uma aplicação recebe uma frase e precisa gerar algumas estatísticas.
Retorne:
quantidadeCaracteres → quantidade total de caracteres
quantidadeEspacos → quantidade de espaços
quantidadeVogais → quantidade de a, e, i, o, u
quantidadeConsoantes → quantidade de letras que não são vogais
quantidadeNumeros → quantidade de caracteres numéricos
Considere apenas letras, números e espaços nos testes.*/

function analisarFrase(frase) {
  let quantidadeCaracteres = frase.length;
  let quantidadeEspacos = 0;
  let quantidadeVogais = 0;
  let quantidadeConsoantes = 0;
  let quantidadeNumeros = 0;

  for (let caracter of frase) {
    caracter = caracter.toLowerCase();

    if (caracter === " ") {
      quantidadeEspacos++;

    } else if (caracter >= "0" && caracter <= "9") {
      quantidadeNumeros++;

    } else if (
      caracter === "a" ||
      caracter === "e" ||
      caracter === "i" ||
      caracter === "o" ||
      caracter === "u"
    ) {
      quantidadeVogais++;

    } else {
      quantidadeConsoantes++;
    }
  }

  return {
    quantidadeCaracteres,
    quantidadeEspacos,
    quantidadeVogais,
    quantidadeConsoantes,
    quantidadeNumeros
  };
}

console.log(analisarFrase("ola mundo"));
// { quantidadeCaracteres: 9, quantidadeEspacos: 1, quantidadeVogais: 4, quantidadeConsoantes: 4, quantidadeNumeros: 0 }

console.log(analisarFrase("JavaScript 2026"));
// { quantidadeCaracteres: 15, quantidadeEspacos: 1, quantidadeVogais: 3, quantidadeConsoantes: 7, quantidadeNumeros: 4 }

console.log(analisarFrase("abc123"));
// { quantidadeCaracteres: 6, quantidadeEspacos: 0, quantidadeVogais: 1, quantidadeConsoantes: 2, quantidadeNumeros: 3 }

console.log(analisarFrase("a a a"));
// { quantidadeCaracteres: 5, quantidadeEspacos: 2, quantidadeVogais: 3, quantidadeConsoantes: 0, quantidadeNumeros: 0 }

console.log(analisarFrase("12345"));
// { quantidadeCaracteres: 5, quantidadeEspacos: 0, quantidadeVogais: 0, quantidadeConsoantes: 0, quantidadeNumeros: 5 }

console.log(analisarFrase(""));
// { quantidadeCaracteres: 0, quantidadeEspacos: 0, quantidadeVogais: 0, quantidadeConsoantes: 0, quantidadeNumeros: 0 }

/*3️⃣ Controle de Pontuação 🎮
Um jogo registra alterações de pontuação:
[
  {jogador: "Ana", pontos: 10},
  {jogador: "Bruno", pontos: -5},
  {jogador: "Ana", pontos: 8}
]
A função deve produzir um relatório:
saldo → soma de todos os pontos
maiorGanho → maior valor positivo registrado
maiorPerda → maior perda em valor absoluto
jogadorMaiorGanho → jogador que fez o maior ganho
quantidadePositivos → quantidade de registros com pontos positivos
quantidadeNegativos → quantidade de registros com pontos negativos
Valores 0 não entram nem em positivos nem em negativos.
Se não houver ganho, maiorGanho e jogadorMaiorGanho ficam null.
Se não houver perda, maiorPerda fica null.*/

function analisarPontuacoes(registros) {
  let saldo = 0;
  let maiorGanho = null;
  let maiorPerda = null;
  let jogadorMaiorGanho = null;
  let quantidadePositivos = 0;
  let quantidadeNegativos = 0;

  for (let { jogador, pontos } of registros) {
    saldo += pontos;

    if (pontos > 0) {
      quantidadePositivos++;

      if (maiorGanho === null || pontos > maiorGanho) {
        maiorGanho = pontos;
        jogadorMaiorGanho = jogador;
      }
    }

    if (pontos < 0) {
      quantidadeNegativos++;

      let perda = Math.abs(pontos);

      if (maiorPerda === null || perda > maiorPerda) {
        maiorPerda = perda;
      }
    }
  }

  return {
    saldo,
    maiorGanho,
    maiorPerda,
    jogadorMaiorGanho,
    quantidadePositivos,
    quantidadeNegativos
  };
}

console.log(analisarPontuacoes([{jogador: "Ana", pontos: 10}, {jogador: "Bruno", pontos: -5},{jogador: "Ana", pontos: 8}]));
// { saldo: 13, maiorGanho: 10, maiorPerda: 5, jogadorMaiorGanho: "Ana", quantidadePositivos: 2, quantidadeNegativos: 1 }

console.log(analisarPontuacoes([{jogador: "Carlos", pontos: -20},{jogador: "Duda", pontos: -8}]));
// { saldo: -28, maiorGanho: null, maiorPerda: 20, jogadorMaiorGanho: null, quantidadePositivos: 0, quantidadeNegativos: 2 }

console.log(analisarPontuacoes([{jogador: "Eva", pontos: 0}, {jogador: "Filipe", pontos: 0}]));
// { saldo: 0, maiorGanho: null, maiorPerda: null, jogadorMaiorGanho: null, quantidadePositivos: 0, quantidadeNegativos: 0 }

console.log(analisarPontuacoes([{jogador: "Gabi", pontos: 25},{jogador: "Hugo", pontos: 25},{jogador: "Iara", pontos: -10}]));
// { saldo: 40, maiorGanho: 25, maiorPerda: 10, jogadorMaiorGanho: "Gabi", quantidadePositivos: 2, quantidadeNegativos: 1 }

console.log(analisarPontuacoes([{jogador: "Joao", pontos: -3},{jogador: "Kaique", pontos: 12},
 {jogador: "Lucas", pontos: -15},{jogador: "Maria", pontos: 4}]));
// { saldo: -2, maiorGanho: 12, maiorPerda: 15, jogadorMaiorGanho: "Kaique", quantidadePositivos: 2, quantidadeNegativos: 2 }

console.log(analisarPontuacoes([]));
// { saldo: 0, maiorGanho: null, maiorPerda: null, jogadorMaiorGanho: null, quantidadePositivos: 0, quantidadeNegativos: 0 }