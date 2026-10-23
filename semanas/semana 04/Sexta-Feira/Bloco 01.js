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
