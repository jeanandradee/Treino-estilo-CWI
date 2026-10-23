/* ==================================================
  QUESTÃO 1 — MONITORAMENTO DE TEMPERATURA
  ==================================================
Um sistema monitora a temperatura de um depósito.
Crie a função classificarTemperaturas(temperaturas),
que receba um array de números e retorne um objeto com:
- total: quantidade de temperaturas registradas;
- abaixoLimite: quantidade de temperaturas menores que 18;
- dentroLimite: quantidade de temperaturas entre 18 e 26,
  incluindo os dois limites;
- acimaLimite: quantidade de temperaturas maiores que 26.
Atenção:
- Considere cada registro individualmente.
- Se o array estiver vazio, todas as quantidades devem ser 0.
- Não altere o array original.
*/

function classificarTemperaturas(temperaturas) {
  let total = 0;
  let abaixoLimite = 0;
  let dentroLimite = 0;
  let acimaLimite = 0;

  for (let temperatura of temperaturas) {
    total ++ ;
    if (temperatura < 18) {
      abaixoLimite ++ ;
    } else if (temperatura <= 26) {
      dentroLimite ++ ;
    } else {
      acimaLimite ++ ;
    }
  }

  return { total, abaixoLimite, dentroLimite, acimaLimite };
}

console.log(classificarTemperaturas([15, 18, 22, 27, 26, 10, 30]));
// Resultado esperado: { total: 7, abaixoLimite: 2, dentroLimite: 3, acimaLimite: 2 }


/* ==================================================
  QUESTÃO 2 — CONFERÊNCIA DE PAGAMENTOS
  ==================================================
Uma loja registra pagamentos realizados pelos clientes.
Cada pagamento possui:
- codigo: identificação do pagamento;
- valor: valor pago;
- confirmado: boolean indicando se foi confirmado.
Crie a função conferirPagamentos(pagamentos), que retorne
um objeto com:
- codigosConfirmados: array com os códigos dos pagamentos
  confirmados, mantendo a ordem original;
- totalConfirmado: soma dos valores dos pagamentos confirmados;
- quantidadePendente: quantidade de pagamentos não confirmados.
Atenção:
- Some somente os valores dos pagamentos confirmados.
- Não altere os dados recebidos.
*/

function conferirPagamentos(pagamentos) {
  let codigosConfirmados = [];
  let totalConfirmado = 0;
  let quantidadePendente = 0;

  for (let { codigo, valor, confirmado } of pagamentos) {
    if (confirmado) {
      codigosConfirmados.push(codigo);
      totalConfirmado += valor ;
    } else {
      quantidadePendente ++ ;
    }
  }

  return { codigosConfirmados, totalConfirmado, quantidadePendente };
}

console.log(conferirPagamentos([ { codigo: "PG01", valor: 80, confirmado: true }, { codigo: "PG02", valor: 45, confirmado: false },
{ codigo: "PG03", valor: 120, confirmado: true }, { codigo: "PG04", valor: 30, confirmado: false },
{ codigo: "PG05", valor: 60, confirmado: true }]));
// Resultado esperado: { codigosConfirmados: ["PG01", "PG03", "PG05"], totalConfirmado: 260, quantidadePendente: 2 }


/*  ==================================================
  QUESTÃO 3 — IDENTIFICAÇÃO DE CÓDIGOS
  ==================================================
Uma plataforma recebe códigos de identificação de produtos.
Crie a função identificarCodigos(codigos), que retorne
um objeto com:
- validos: array com os códigos que possuem exatamente
  4 caracteres e começam com a letra "X";
- invalidos: quantidade de códigos que não atendem
  a essas duas condições.
Atenção:
- A letra "X" deve ser maiúscula.
- Preserve a ordem dos códigos válidos.
- Considere os códigos como strings.
*/

function identificarCodigos(codigos) {
  let validos = [];
  let invalidos = 0;

  for (let codigo of codigos) {
    if (codigo.length === 4 && codigo[0] === "X") {
      validos.push(codigo);
    } else {
      invalidos ++ ;
    }
  }

  return { validos, invalidos };
}

console.log(identificarCodigos([ "X123", "A456", "X12", "XABC", "x789", "X1234", "X9YZ" ]));
// Resultado esperado: { validos: ["X123", "XABC", "X9YZ"], invalidos: 4 }

/* ==================================================
   QUESTÃO 4 — ATUALIZAÇÃO DE PONTUAÇÃO
   ==================================================
Um aplicativo mantém o cadastro de participantes.
Cada participante possui:
- nome;
- pontos;
- ativo.
Crie a função atualizarPontuacoes(participantes, bonus),
que retorne um NOVO array de objetos.
Regras:
- Participantes ativos recebem o bônus informado.
- Participantes inativos mantêm sua pontuação.
- Nenhum participante pode terminar com menos de zero pontos.
- Preserve o nome e o estado ativo de cada participante.
- Não altere o array original nem seus objetos.
Dica: o bônus pode ser negativo.
*/

function atualizarPontuacoes(participantes, bonus) {
  let resultado = [];

  for (let { nome, pontos, ativo } of participantes) {
    if (ativo) {
      pontos += bonus;
    }

    if (pontos < 0) {
      pontos = 0;
    }

    resultado.push({ nome, pontos, ativo });
  }

  return resultado;
}

console.log(atualizarPontuacoes([ { nome: "Lia", pontos: 40, ativo: true }, { nome: "Rui", pontos: 15, ativo: false },
{ nome: "Bia", pontos: 10, ativo: true }, { nome: "Caio", pontos: 5, ativo: true } ], -20));
// Resultado esperado: [ { nome: "Lia", pontos: 20, ativo: true }, { nome: "Rui", pontos: 15, ativo: false },
// { nome: "Bia", pontos: 0, ativo: true }, { nome: "Caio", pontos: 0, ativo: true } ]


/* ==================================================
   QUESTÃO 5 — PRIMEIRA OSCILAÇÃO
   ==================================================
Um sensor registra valores ao longo do tempo.
Crie a função encontrarPrimeiraAlta(valores), que retorne
o índice da primeira posição em que um valor seja maior
que o valor imediatamente anterior.
Se não existir essa posição, retorne -1.
Atenção:
- Comece a comparação a partir do segundo elemento.
- Retorne o índice, não o valor.
- Se o array tiver menos de dois elementos, retorne -1.
*/

function encontrarPrimeiraAlta(valores) {
  for (let i = 1; i < valores.length; i++) {
    if (valores[i] > valores[i - 1]) {
      return i;
    }
  }

  return -1;
}

console.log(encontrarPrimeiraAlta([30, 25, 20, 22, 28, 15])); // Resultado esperado: 3
console.log(encontrarPrimeiraAlta([10, 8, 6, 4]));            // Resultado esperado: -1


/* ==================================================
   QUESTÃO 6 — RESUMO DE PALAVRAS
   ==================================================
Um sistema recebe palavras digitadas pelos usuários.
Crie a função resumirPalavras(palavras), que retorne um
objeto com:
- quantidade: número total de palavras;
- quantidadeLongas: quantidade de palavras com mais
  de 5 caracteres;
- primeiraMaiuscula: primeira palavra convertida para
  letras maiúsculas;
- menorPalavra: palavra com menos caracteres.
Atenção:
- Se houver empate no tamanho da menor palavra,
  mantenha a primeira.
- Se o array estiver vazio, retorne:
  quantidade: 0;
  quantidadeLongas: 0;
  primeiraMaiuscula: null;
  menorPalavra: null.
- Não altere o array original.
*/

function resumirPalavras(palavras) {
  let quantidade = 0;
  let quantidadeLongas = 0;
  let primeiraMaiuscula = null;
  let menorPalavra = null

  for (let palavra of palavras) {
    quantidade ++ ;

    if (palavra.length > 5) {
      quantidadeLongas ++ ;
    }

    if (primeiraMaiuscula === null) {
      primeiraMaiuscula = palavra.toUpperCase();
    }

    if (menorPalavra === null || palavra.length < menorPalavra.length) {
      menorPalavra = palavra;
    }
  }

  return { quantidade, quantidadeLongas, primeiraMaiuscula, menorPalavra };
}

console.log(resumirPalavras([ "computador", "sol", "janela", "mar", "programacao", "livro" ]));
// Resultado esperado: { quantidade: 6, quantidadeLongas: 3, primeiraMaiuscula: "COMPUTADOR", menorPalavra: "sol" }