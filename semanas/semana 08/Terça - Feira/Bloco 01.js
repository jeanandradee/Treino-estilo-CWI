/* ========================================
   B1 — LÓGICA APLICADA
   ========================================
Q1 — Classificador de horário
Uma função recebe um horário no formato
de 24 horas, representado por um número
inteiro entre 0 e 23.
Retorne:
- "Madrugada" para horários entre 0 e 5.
- "Manhã" para horários entre 6 e 11.
- "Tarde" para horários entre 12 e 17.
- "Noite" para horários entre 18 e 23.
- "Horário inválido" para qualquer outro valor.
*/

function classificarHorario(horario) {
  return horario >= 0 && horario <= 5 ? "Madrugada" :
         horario <= 11 ? "Manhã" :
         horario <= 17 ? "Tarde" :
         horario <= 23 ? "Noite" :
         "Horário inválido"; 
}

console.log(classificarHorario(4));    // "Madrugada"
console.log(classificarHorario(11));   // "Manhã"
console.log(classificarHorario(15));   // "Tarde"
console.log(classificarHorario(22));   // "Noite"
console.log(classificarHorario(25));   // "Horário inválido"

/* ========================================
   Q2 — Inversor de palavras
Uma função recebe uma frase e deve inverter
a ordem dos caracteres de cada palavra,
mas preservar a ordem das palavras.
Exemplo:
"Java Script" deve retornar "avaJ tpircS".
Regras:
- Preserve os espaços entre as palavras.
- Não inverta a ordem das palavras.
- Considere que a frase contém palavras
  separadas por espaços simples.
*/

function inverterPalavras(frase) {
  let palavras = frase.split(" ");
  let resultado = "";

  for (let palavra of palavras) {
    resultado += palavra.split("").reverse().join("") + " ";
  }

  return resultado.trim();
}

console.log(inverterPalavras("Java Script"));    // "avaJ tpircS"
console.log(inverterPalavras("CWI JavaScript")); // "IWC tpircSavaJ"


/* ========================================
   Q3 — Analisador de conta
Uma função recebe um objeto com:
- saldo: saldo atual da conta.
- limite: limite disponível para utilização.
- valor: valor de uma compra.
A compra poderá ser realizada se o valor
for menor ou igual à soma do saldo e do limite.
Retorne um objeto contendo:
- compraAprovada: true ou false.
- saldoRestante: saldo após a compra,
  considerando o limite utilizado.
- valorDisponivel: saldo + limite antes
  da compra.
Se a compra não for aprovada, o saldoRestante
deve permanecer igual ao saldo original.
*/

function analisarCompra(conta) {
  let { saldo, limite, valor } = conta;

  const compraAprovada = valor <= saldo + limite;

  const saldoRestante = compraAprovada
    ? saldo + limite - valor
    : saldo;

  const valorDisponivel = saldo + limite;

  return {
    compraAprovada,
    saldoRestante,
    valorDisponivel
  }
}

console.log(analisarCompra({ saldo: 300, limite: 200, valor: 450 }));
// Resultado esperado: { compraAprovada: true, saldoRestante: 50, valorDisponivel: 500 }

console.log(analisarCompra({ saldo: 100, limite: 50, valor: 200 }));
// Resultado esperado: { compraAprovada: false, saldoRestante: 100, valorDisponivel: 150 }


/* ========================================
   Q4 — Detector de número especial
Uma função recebe um número inteiro positivo.
O número será considerado especial quando:
- for divisível por 3;
- NÃO for divisível por 5;
- for maior que 10.
Retorne true quando todas as condições
forem atendidas e false caso contrário.
Não utilize métodos prontos para resolver.
*/

function verificarNumeroEspecial(numero) {
  return numero % 3 === 0
       && numero % 5 !== 0 
       && numero > 10;
}

console.log(verificarNumeroEspecial(12));   // true
console.log(verificarNumeroEspecial(15));   // false
console.log(verificarNumeroEspecial(9));    // false
console.log(verificarNumeroEspecial(21));   // true