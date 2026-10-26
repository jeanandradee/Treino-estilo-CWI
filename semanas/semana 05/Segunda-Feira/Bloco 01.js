/* ==================================================
   DESAFIO 1 — CONTROLE DE TEMPERATURA
   ==================================================
Um sistema registra temperaturas de diferentes setores.
Crie a função analisarTemperaturas(temperaturas).
Ela deve retornar um objeto contendo:
- total: quantidade de temperaturas recebidas;
- abaixoDoLimite: quantidade de temperaturas abaixo de 18;
- dentroDoLimite: quantidade entre 18 e 26, inclusive;
- acimaDoLimite: quantidade acima de 26.
*/

function analisarTemperaturas(temperaturas) {
  let total = 0;
  let abaixoDoLimite = 0;
  let dentroDoLimite = 0;
  let acimaDoLimite = 0;

  for (let temperatura of temperaturas) {
    total ++;

    if (temperatura < 18) {
      abaixoDoLimite ++;
    } else if (temperatura <= 26) {
      dentroDoLimite ++;
    } else {
      acimaDoLimite ++;
    }
  }

  return { total, abaixoDoLimite, dentroDoLimite, acimaDoLimite };
}

console.log(analisarTemperaturas([15, 18, 22, 27, 30, 26, 17]));
// Resultado esperado: { total: 7, abaixoDoLimite: 2, dentroDoLimite: 3, acimaDoLimite: 2 } 

/* ==================================================
   DESAFIO 2 — RESUMO DE PAGAMENTOS
   ==================================================
Uma empresa recebe registros de pagamentos.
Cada pagamento possui:
- codigo
- valor
- confirmado
Crie a função resumirPagamentos(pagamentos).
Ela deve retornar:
- totalPagamentos: quantidade total de registros;
- pagamentosConfirmados: quantidade confirmada;
- valorConfirmado: soma dos valores confirmados;
- codigosPendentes: códigos dos pagamentos não confirmados.
*/

function resumirPagamentos(pagamentos) {
  let totalPagamentos = 0;
  let pagamentosConfirmados = 0;
  let valorConfirmado = 0;
  let codigosPendentes = [];

  for (let { codigo, valor, confirmado } of pagamentos) {
    totalPagamentos ++;

    if (confirmado) {   
      pagamentosConfirmados ++ ;
      valorConfirmado += valor;
    } else {
      codigosPendentes.push(codigo);
    }
  }

  return { totalPagamentos, pagamentosConfirmados, valorConfirmado, codigosPendentes };
}

console.log(resumirPagamentos([{ codigo: "A1", valor: 100, confirmado: true },{ codigo: "A2", valor: 50, confirmado: false },
{ codigo: "A3", valor: 80, confirmado: true },{ codigo: "A4", valor: 40, confirmado: false }]));
// Resultado esperado: { totalPagamentos: 4, pagamentosConfirmados: 2, valorConfirmado: 180, codigosPendentes: ["A2", "A4"] }

/* ==================================================
   DESAFIO 3 — IDENTIFICADOR DE CÓDIGOS
   ==================================================
Uma plataforma recebe códigos de identificação.
Crie a função verificarCodigos(codigos).
Regras:
- Um código válido possui exatamente 5 caracteres.
- Todo código válido deve começar com "J".
- Conte os códigos válidos.
- Guarde os códigos válidos em um array.
- Conte os códigos inválidos.
Retorne:
- totalValidos;
- totalInvalidos;
- codigosValidos.
*/

function verificarCodigos(codigos) {
  let totalValidos = 0;
  let totalInvalidos = 0; 
  let codigosValidos = [];

  for (let codigo of codigos) {
    if (codigo.length === 5 &&
      codigo[0] === "J"
    ) {
      totalValidos ++;
      codigosValidos.push(codigo);
    } else {
      totalInvalidos ++;
    }
  }

  return { totalValidos, totalInvalidos, codigosValidos };
}

console.log(verificarCodigos([ "J1234", "A1234", "J123", "JABCD", "J123456", "K9876" ]));
// Resultado esperado: { totalValidos: 2, totalInvalidos: 4, codigosValidos: ["J1234", "JABCD"] }

/* ==================================================
   DESAFIO 4 — AJUSTE DE PONTUAÇÃO
   ==================================================
Uma plataforma precisa atualizar a pontuação dos jogadores.
Cada jogador possui:
- nome
- pontos
- ativo
Crie a função atualizarPontuacoes(jogadores, bonus).
Regras:
- Jogadores ativos recebem o bônus.
- Jogadores inativos mantêm a pontuação original.
- A pontuação final nunca pode ser negativa.
- Retorne um novo array de objetos.
- Não altere os objetos recebidos.
*/

function atualizarPontuacoes(jogadores, bonus) {
  let resultado = [];

  for (let { nome, pontos, ativo } of jogadores) {
    if (ativo) {
      pontos += bonus;
      
      if (pontos < 0) {
        pontos = 0;
      }  
    }

    resultado.push({ nome, pontos, ativo });
  }

  return resultado;
}

console.log(atualizarPontuacoes([{ nome: "Ana", pontos: 10, ativo: true },
{ nome: "Beto", pontos: 20, ativo: false }, { nome: "Caio", pontos: 3, ativo: true }], -5));
// Resultado esperado:[{ nome: "Ana", pontos: 5, ativo: true },
// { nome: "Beto", pontos: 20, ativo: false },{ nome: "Caio", pontos: 0, ativo: true }]

/* ==================================================
   DESAFIO 5 — PRIMEIRA SUBIDA
   ==================================================
Uma sequência registra valores ao longo do tempo.
Crie a função encontrarPrimeiraSubida(valores).
Ela deve retornar o índice da primeira posição cujo
valor seja maior que o valor imediatamente anterior.
Se não houver subida, retorne -1.
A comparação começa no segundo elemento.
*/

function encontrarPrimeiraSubida(valores) {
  for (let i = 1; i < valores.length; i++) {
    if (valores[i] > valores[i - 1]) {
      return i;
    }
  }

  return -1;
}

console.log(encontrarPrimeiraSubida([10, 8, 7, 9, 12])); // Resultados esperado: 3
console.log(encontrarPrimeiraSubida([10, 9, 8, 7]));     // Resultados esperado: -1
console.log(encontrarPrimeiraSubida([5, 5, 6]));         // Resultados esperado: 2

/* ==================================================
   DESAFIO 6 — RELATÓRIO DE PALAVRAS
   ==================================================
Crie a função analisarPalavras(palavras).
Ela deve retornar:
- total: quantidade de palavras;
- longas: quantidade de palavras com mais de 5 caracteres;
- primeiraMaiuscula: primeira palavra em letras maiúsculas,
  ou null se o array estiver vazio;
- menorPalavra: palavra de menor comprimento,
  preservando a primeira em caso de empate, ou null se vazio.
Não altere o array original.
*/

function analisarPalavras(palavras) {
  let total = 0;
  let longas = 0;
  let primeiraMaiuscula = null;
  let menorPalavra = null;

  for (let palavra of palavras) {
    total ++ ;

    if (palavra.length > 5) {
      longas ++ ;
    }

    if (primeiraMaiuscula === null) {
      primeiraMaiuscula = palavra.toUpperCase();
    }

    if (menorPalavra === null || palavra.length < menorPalavra.length) {
      menorPalavra = palavra;
    }
  }

  return { total, longas, primeiraMaiuscula, menorPalavra };
}

console.log(analisarPalavras([ "javascript", "código", "sol", "lógica", "teste" ]));
// resultado esperado: { total: 5, longas: 3, primeiraMaiuscula: "JAVASCRIPT", menorPalavra: "sol" }
console.log(analisarPalavras([]));
// resultado esperado: { total: 0, longas: 0, primeiraMaiuscula: null, menorPalavra: null }