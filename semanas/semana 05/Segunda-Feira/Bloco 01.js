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
