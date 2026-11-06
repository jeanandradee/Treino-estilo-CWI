/* B1 — Operação: Lógica em Movimento
   Q1 — Controle de Temperatura
Um sistema registra temperaturas de diferentes ambientes.
Retorne:
1. Quantidade de temperaturas abaixo de 18.
2. Quantidade entre 18 e 30, inclusive.
3. Quantidade acima de 30.
4. A maior temperatura registrada (ou null se vazio).
Não modificar o array original.
*/

function analisarTemperaturas(temperaturas) {
  const abaixo = temperaturas.filter(temp => temp < 18).length;

  const normais = temperaturas.filter(temp => temp <= 30 && temp >= 18).length;

  const acima = temperaturas.filter(temp => temp > 30).length;

  const maior = temperaturas.reduce((acc , t) => 
  acc === null || t > acc ? t : acc
  , null);


  return {
    abaixo,
    normais,
    acima,
    maior
  }
}

console.log(analisarTemperaturas([12, 18, 25, 31, 28, 35, 16]));
// Esperado: { abaixo: 2, normais: 3, acima: 2, maior: 35 }

/* Q2 — Separação de Valores
Um caixa recebe valores de pagamentos.
Retorne:
1. Um array com os valores inteiros.
2. Um array com os valores que possuem casas decimais.
3. A soma dos valores inteiros.
4. A quantidade de pagamentos iguais a zero.
Não modificar o array original.
*/

function separarPagamentos(valores) {
  const inteiros = valores.filter(valor => Number.isInteger(valor));

  const decimais = valores.filter(valor => !Number.isInteger(valor));

  const somaInteiros = inteiros.reduce((acc, valor) => acc + valor, 0);

  const zeros = valores.filter(valor => valor === 0).length;

  return {
    inteiros,
    decimais,
    somaInteiros,
    zeros
  };
}

console.log(separarPagamentos([10, 15.5, 0, 8, 22.75, 0, 4]));
// Esperado: { inteiros: [10, 0, 8, 0, 4], decimais: [15.5, 22.75], somaInteiros: 22, zeros: 2 }


/* Q3 — Análise de Palavras
Uma aplicação recebe uma frase.
Retorne:
1. Quantidade de palavras.
2. Quantidade de palavras com mais de 6 caracteres.
3. A primeira palavra da frase.
4. A última palavra da frase.
Considere espaços extras no início, no final
e entre as palavras.
Se a frase estiver vazia, retorne null para
primeira e última palavra.
*/

function analisarFrase(frase) {
  const palavras = frase.trim().split(/\s+/).filter(p => p !== "");

  const quantidade = palavras.length;

  const longas = palavras.filter(p => p.length > 6).length;

  const primeira = palavras.length > 0 ? palavras[0] : null;

  const ultima = palavras.length > 0 ? palavras[palavras.length - 1] : null;

  return {
    quantidade,
    longas,
    primeira,
    ultima
  };
}

console.log(analisarFrase("  JavaScript   exige bastante prática diária  "));
// Esperado: { quantidade: 5, longas: 3, primeira: "JavaScript", ultima: "diária" }

/* Q4 — Mapa de Pontuação
Um jogo registra a pontuação de cada jogador
em uma matriz. Cada linha representa um jogador.
Retorne:
1. A pontuação total de cada jogador.
2. O índice do jogador com maior pontuação.
3. Quantos jogadores fizeram pelo menos 20 pontos.
4. A soma de todas as pontuações.
Em caso de empate, manter o primeiro jogador.
*/

function analisarPontuacoes(matriz) {
  const totais = matriz.map(jogador => jogador.reduce((acc , p) => acc + p ,0));

  let melhorJogador = 0;

  for (let i = 1; i < totais.length; i++) {
    if (totais[i] > totais[melhorJogador]) {
      melhorJogador = i;
    }
  }
  
  const acimaDe20 = totais.filter(jogador => jogador >= 20).length;

  const totalGeral = matriz.flat().reduce((acc, p) => acc + p ,0);

  return {
    totais,
    melhorJogador,
    acimaDe20,
    totalGeral
  }
}

console.log(analisarPontuacoes([ [5, 8, 7], [10, 10, 5], [3, 4, 6],  [8, 8, 8] ]));
// Esperado: { totais: [20, 25, 13, 24], melhorJogador: 1, acimaDe20: 3, totalGeral: 82 }

/* Q5 — Histórico de Movimentação
Um robô recebe comandos:
D = direita
E = esquerda
C = cima
B = baixo
Começa na posição x = 0 e y = 0.
Retorne:
1. Posição final x.
2. Posição final y.
3. Quantidade de comandos inválidos.
4. Distância total percorrida.
Cada comando válido movimenta uma unidade.
A distância é a quantidade de movimentos realizados.
A busca pelos comandos deve ignorar maiúsculas
e minúsculas.
*/

function movimentarRobo(comandos) {
  let x = 0; 
  let y = 0;
  let invalidos = 0;
  let distancia = 0;

  for (let comando of comandos) {
    comando = comando.toUpperCase();
    if (comando === "D") {
      x ++ ;
      distancia ++ ;
    } else if (comando === "E") {
      x -- ;
      distancia ++ ;
    } else if (comando === "C") {
      y ++ ;
      distancia ++ ;
    } else if (comando === "B") {
      y -- ;
      distancia ++ ;
    } else {
      invalidos ++;
    }
  }
  return {
    x,
    y,
    invalidos,
    distancia
  }
}

console.log(movimentarRobo(["D", "D", "C", "E", "X", "b", "C"]));
// Esperado: { x: 1, y: 1, invalidos: 1, distancia: 6 }

/* Q6 — Análise de Produtos
Uma loja recebe produtos com nome, preço e quantidade.
Retorne:
1. Valor total de cada produto (preço * quantidade).
2. Valor total de todo o estoque.
3. Nome do produto com maior valor total.
4. Quantos produtos possuem quantidade igual a zero.
Em caso de empate no maior valor, manter o primeiro.
Se não houver produtos, o nome será null.
*/

function analisarProdutos(produtos) {
  const valores = produtos.map(produto => produto.preco * produto.quantidade );
  
  const totalEstoque = valores.reduce((acc, p) => acc + p ,0);
  
  let maiorProduto = null;
  let maiorValor = -1;

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > maiorValor) {
      maiorValor = valores[i];
      maiorProduto = produtos[i].nome;
    }
  }
  
  const semEstoque = produtos.filter(produto => produto.quantidade === 0).length;
  
  
  return {
    valores,
    totalEstoque,
    maiorProduto,
    semEstoque
  }
}

console.log(analisarProdutos([ { nome: "Mouse", preco: 80, quantidade: 3 }, { nome: "Teclado", preco: 150, quantidade: 2 },
 { nome: "Monitor", preco: 900, quantidade: 0 }, { nome: "Headset", preco: 100, quantidade: 4 } ]));

// Esperado: { valores: [240, 300, 0, 400], totalEstoque: 940, maiorProduto: "Headset", semEstoque: 1 }