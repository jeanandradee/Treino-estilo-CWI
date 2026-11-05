/* Questão 1 — Controle de Temperatura
Uma estação monitora a temperatura de um equipamento.
Recebe um array de temperaturas e deve retornar:
1. Quantas temperaturas ficaram abaixo de 20.
2. Quantas ficaram entre 20 e 35, inclusive.
3. Quantas ficaram acima de 35.
4. A maior temperatura registrada.
Se o array estiver vazio, a maior temperatura será null.
*/

function analisarTemperaturas(temperaturas) {
  let abaixo = 0;
  let normais = 0;
  let acima = 0;
  let maiorTemperatura = null;

  for (let temperatura of temperaturas) {
    if (temperatura < 20) {
      abaixo ++ ;
    } else if (temperatura <= 35) {
      normais ++ ;
    } else {
      acima ++;
    }

    if (maiorTemperatura === null || temperatura > maiorTemperatura) {
      maiorTemperatura = temperatura;
    }
  }

  return {
    abaixo,
    normais,
    acima,
    maiorTemperatura
  }
}

console.log(analisarTemperaturas([15, 22, 38, 20, 40, 18, 30]));
// Esperado: { abaixo: 2, normais: 3, acima: 2, maiorTemperatura: 40 }

/* Questão 2 — Histórico de Compras
Uma loja recebe um array com os valores das compras
realizadas por um cliente.
O sistema deve retornar:
1. O valor total das compras.
2. Quantas compras foram superiores a R$ 100.
3. O valor da menor compra.
4. A posição da primeira compra de exatamente R$ 50.
Se não existir compra de R$ 50, retornar -1.
Se o array estiver vazio, a menor compra será null.
*/

function analisarCompras(compras) {
  let total = 0;
  let comprasAcima100 = 0;
  let menorCompra = null;
  let primeiraCompra50 = -1;

  for (let i = 0; i < compras.length; i++) {
    total += compras[i];

    if (compras[i] > 100) {
      comprasAcima100 ++ ;
    }

    if (menorCompra === null || compras[i] < menorCompra) {
      menorCompra = compras[i];
    }

    if (primeiraCompra50 === -1 && compras[i] === 50) {
      primeiraCompra50 = i;
    }
  }

  return {
    total,
    comprasAcima100,
    menorCompra,
    primeiraCompra50
  }
}

console.log(analisarCompras([50, 120, 35, 200, 50, 80]));
// Esperado: { total: 535, comprasAcima100: 2, menorCompra: 35, primeiraCompra50: 0 }

/* Questão 3 — Organizador de Palavras
Um sistema recebe um array de palavras.
Ele deve retornar:
1. Um novo array contendo apenas palavras com
   pelo menos 5 caracteres.
2. Quantas palavras possuem a letra "a",
   ignorando maiúsculas e minúsculas.
3. A maior palavra encontrada.
   Em caso de empate, manter a primeira.
Não utilizar filter() ou modificar o array original.
Se não houver palavras, maiorPalavra será null.
*/

function analisarPalavras(palavras) {
  let palavrasLongas = [];
  let comLetraA = 0;
  let maiorPalavra = null;

  for (let palavra of palavras) {
    if (palavra.length >= 5) {
      palavrasLongas.push(palavra);
    }

    if (palavra.includes("A") || palavra.includes("a")) {
      comLetraA ++ ;
    }

    if (maiorPalavra === null || palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }

  return {
    palavrasLongas,
    comLetraA,
    maiorPalavra
  }
}

console.log(analisarPalavras([ "JavaScript", "Casa", "Computador", "Abacaxi", "Sol", "Programa" ]));
// Esperado: { palavrasLongas: [ "JavaScript", "Computador", "Abacaxi", "Programa" ],
// comLetraA: 5, maiorPalavra: "JavaScript" }
