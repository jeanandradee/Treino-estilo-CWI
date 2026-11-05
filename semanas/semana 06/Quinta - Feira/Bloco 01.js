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

/* Questão 4 — Distribuição de Estoque
Um depósito possui produtos armazenados em setores.
Os dados estão organizados em uma matriz.
O sistema deve retornar:
1. A quantidade total de produtos armazenados.
2. Quantos setores possuem mais de 100 produtos.
3. Qual setor possui a maior quantidade total.
   O índice começa em zero.
4. A quantidade armazenada no total de todos os setores.
Cada linha representa um setor.
Em caso de empate, manter o primeiro setor.
Se a matriz estiver vazia, o setor de maior estoque será null.
*/

function analisarDeposito(estoque) {
  let totalProdutos = 0;
  let setoresAcima100 = 0;
  let setorMaiorEstoque = null;
  let somaMaiorEstoque = 0;
  let quantidadeTotal = 0;

  for (let i = 0; i < estoque.length; i++) {
    let somaEstoqueAtual = 0;

    for (let j = 0; j < estoque[i].length; j++) {
      totalProdutos ++;
      quantidadeTotal += estoque[i][j];
      somaEstoqueAtual += estoque[i][j];
    }

    if (somaEstoqueAtual > 100) {
      setoresAcima100++;
    }

    if (somaEstoqueAtual > somaMaiorEstoque) {
      somaMaiorEstoque = somaEstoqueAtual;
      setorMaiorEstoque = i;
    }
  }

  return {
    totalProdutos,
    setoresAcima100,
    setorMaiorEstoque,
    quantidadeTotal
  };
}

console.log(analisarDeposito([ [30, 40, 50], [80, 60, 20], [10, 15, 25], [50, 50, 50] ]));
// Esperado: { totalProdutos: 12, setoresAcima100: 3, setorMaiorEstoque: 0, quantidadeTotal: 575 }

/* Questão 5 — Registro de Participantes
Um evento recebe registros de participantes.
Cada participante possui:
- nome
- idade
- inscrito (booleano)
O sistema deve retornar:
1. Quantos participantes estão inscritos.
2. Quantos inscritos são maiores de idade.
3. Um array com os nomes dos inscritos.
4. A idade do participante inscrito mais velho.
Em caso de empate na maior idade, manter a primeira pessoa.
Se não houver inscritos, idadeMaisAlta será null.
*/

function analisarParticipantes(participantes) {
  let totalInscritos = 0;
  let maioresDeIdade = 0;
  let nomesInscritos = [];
  let idadeMaisAlta = null;

  for (let { nome, idade, inscrito } of participantes) {
    if (!inscrito) {
      continue;
    }
 
    totalInscritos ++ ;
    nomesInscritos.push(nome);

    if (idade >= 18) {
      maioresDeIdade ++ ;
    }

    if (idadeMaisAlta === null || idade > idadeMaisAlta) {
      idadeMaisAlta = idade;
    }
  }

  return {
    totalInscritos,
    maioresDeIdade,
    nomesInscritos,
    idadeMaisAlta
  }
}

console.log(analisarParticipantes([ { nome: "Ana", idade: 22, inscrito: true },
 { nome: "Pedro", idade: 17, inscrito: true }, { nome: "Lucas", idade: 30, inscrito: false },
 { nome: "Marina", idade: 25, inscrito: true }, { nome: "João", idade: 19, inscrito: true } ]));
// Esperado: { totalInscritos: 4, maioresDeIdade: 3, nomesInscritos: ["Ana", "Pedro", "Marina", "João"], idadeMaisAlta: 25 }

/* Questão 6 — Analisador de Movimento
Um robô recebe uma sequência de comandos:
- D: movimenta uma posição para a direita.
- E: movimenta uma posição para a esquerda.
- C: movimenta uma posição para cima.
- B: movimenta uma posição para baixo.
O robô começa na posição (0, 0).
O sistema deve retornar:
1. A posição final X.
2. A posição final Y.
3. Quantos movimentos válidos foram realizados.
4. Quantos movimentos inválidos foram ignorados.
5. A distância total percorrida.
Cada movimento válido vale uma unidade de distância.
As letras minúsculas também devem ser aceitas.
Não modificar a sequência original.
*/

function analisarMovimento(comandos) {
  let x = 0 ;
  let y = 0;
  let movimentosValidos = 0;
  let movimentosInvalidos = 0;
  let distanciaTotal = 0;

  for (let comando of comandos) {
    comando = comando.toUpperCase();

    switch (comando) {
      case "D":
        x++;
        movimentosValidos++;
        distanciaTotal++;
        break;

      case "E":
        x--;
        movimentosValidos++;
        distanciaTotal++;
        break;

      case "C":
        y++;
        movimentosValidos++;
        distanciaTotal++;
        break;

      case "B":
        y--;
        movimentosValidos++;
        distanciaTotal++;
        break;

      default:
        movimentosInvalidos++;
    }
  }

  return {
    x,
    y,
    movimentosValidos,
    movimentosInvalidos,
    distanciaTotal
  };
}

console.log(analisarMovimento("DDcEXbZ"));

/*
Esperado:

{
    x: 1,
    y: 1,
    movimentosValidos: 5,
    movimentosInvalidos: 1,
    distanciaTotal: 5
}
*/