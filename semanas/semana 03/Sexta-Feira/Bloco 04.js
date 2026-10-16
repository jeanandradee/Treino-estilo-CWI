/* 🧩 Questão 1 — Registro de presença
Uma plataforma de aulas registra a presença dos alunos usando
um array de valores booleanos.
Cada posição representa uma aula:
- true significa que o aluno compareceu;
- false significa que faltou.
Crie a função resumirPresenca(presencas), que deve retornar
um objeto com:
- totalAulas: quantidade de aulas registradas;
- presentes: quantidade de aulas com presença;
- faltas: quantidade de aulas com ausência;
- aprovado: true se o aluno compareceu a pelo menos 75%
  das aulas, e false caso contrário.

Se o array estiver vazio, aprovado deve ser false.

Não altere o array recebido.
*/

function resumirPresenca(presencas) {
  if (presencas.length === 0) {
    return { totalAulas:0, presentes:0, faltas:0, aprovado:false };
  }

  let totalAulas = presencas.length;
  let presentes = 0;
  let faltas = 0;
  let aprovado = false;

  for (let presenca of presencas) {
    if (presenca === true) {
      presentes ++;
    } else if (presenca === false) {
      faltas ++;
    }
  }
  let porcentagem = (presentes / totalAulas) * 100;


  if (porcentagem >= 75) {
    aprovado = true;
  }

  return { totalAulas, presentes, faltas, aprovado };
}

console.log(resumirPresenca([true, true, false, true])); 
// { totalAulas: 4, presentes: 3, faltas: 1, aprovado: true }

console.log(resumirPresenca([true, false, false, true]));
// { totalAulas: 4, presentes: 2, faltas: 2, aprovado: false }

console.log(resumirPresenca([]));
// { totalAulas: 0, presentes: 0, faltas: 0, aprovado: false }

console.log(resumirPresenca([true]));
// { totalAulas: 1, presentes: 1, faltas: 0, aprovado: true }

console.log(resumirPresenca([false, false, false, true]));
// { totalAulas: 4, presentes: 1, faltas: 3, aprovado: false }

console.log(resumirPresenca([true, true, true, false, true, true, true, false]));
// { totalAulas: 8, presentes: 6, faltas: 2, aprovado: true }

/* 🧩 Questão 2 — Filtro de mensagens por tamanho
Um sistema de comunicação precisa identificar mensagens
que podem ser exibidas em um painel.
Crie a função selecionarMensagens(mensagens, minimo), que
deve retornar um novo array contendo apenas as mensagens
cujo comprimento seja maior ou igual a minimo.
Regras:
- Preserve a ordem original.
- Não altere o array recebido.
- Se nenhuma mensagem atender ao critério, retorne [].
- Considere o comprimento usando .length.
*/

function selecionarMensagens(mensagens, minimo) {
  let resultado = [];

  for (let mensagem of mensagens) {
    if (mensagem.length >= minimo) {
      resultado.push(mensagem);
    }
  }

  return resultado;
}

console.log(selecionarMensagens(["oi", "bom dia", "javascript"], 7)); // ["bom dia", "javascript"]
console.log(selecionarMensagens(["sol", "lua", "mar"], 4));           // []
console.log(selecionarMensagens(["ab", "abcd", "abcdef"], 4));        // ["abcd", "abcdef"]
console.log(selecionarMensagens([], 3));                              // []
console.log(selecionarMensagens(["casa", "rua", "apartamento"], 4));  // ["casa", "apartamento"]
console.log(selecionarMensagens(["12345", "123", "1234", "12"], 3));  // ["12345", "123", "1234"]

/* 🧩 Questão 3 — Conferência de saldo
Uma carteira digital registra o saldo inicial e uma sequência
de movimentações.
Valores positivos representam depósitos.
Valores negativos representam retiradas.
Crie a função conferirSaldo(saldoInicial, movimentacoes),
que deve retornar um objeto com:
- saldoFinal: saldo após todas as movimentações;
- depositos: soma de todos os valores positivos;
- retiradas: soma dos valores negativos, mantendo o sinal negativo;
- saldoNegativo: true se o saldo final for menor que zero,
  e false caso contrário.
Não altere o array recebido.
*/

function conferirSaldo(saldoInicial, movimentacoes) {
  let saldoFinal = saldoInicial;
  let depositos = 0;
  let retiradas = 0;
  let saldoNegativo = false;

  for (let movimento of movimentacoes) {
    saldoFinal += movimento;

    if (movimento > 0) {
      depositos += movimento;
    } else if (movimento < 0) {
      retiradas += movimento;
    }
  }

  if (saldoFinal < 0) {
    saldoNegativo = true;
  }

  return { saldoFinal, depositos, retiradas, saldoNegativo };
}

console.log(conferirSaldo(100, [50, -20, -10]));
// { saldoFinal: 120, depositos: 50, retiradas: -30, saldoNegativo: false }

console.log(conferirSaldo(20, [-10, -15]));
// { saldoFinal: -5, depositos: 0, retiradas: -25, saldoNegativo: true }

console.log(conferirSaldo(0, []));
// { saldoFinal: 0, depositos: 0, retiradas: 0, saldoNegativo: false }

console.log(conferirSaldo(50, [10, 20]));
// { saldoFinal: 80, depositos: 30, retiradas: 0, saldoNegativo: false }

console.log(conferirSaldo(10, [-10]));
// { saldoFinal: 0, depositos: 0, retiradas: -10, saldoNegativo: false }

console.log(conferirSaldo(30, [-5, 15, -8, 3]));
// { saldoFinal: 35, depositos: 18, retiradas: -13, saldoNegativo: false }