/* QUESTÃO 1 — Caixa de Troco
Um caixa precisa devolver um valor utilizando notas de
20, 10, 5 e 1 real.
O sistema deve calcular a menor quantidade de notas
necessária para formar o valor informado.
Retorne um objeto contendo a quantidade de cada nota.
Considere que o valor sempre será um número inteiro positivo.
*/

function calcularTroco(valor) {
  let nota20 = Math.floor(valor / 20);
  valor = valor % 20;

  let nota10 = Math.floor(valor / 10);
  valor = valor % 10;

  let nota5 = Math.floor(valor / 5);
  valor = valor % 5;

  let nota1 = valor;

  return {
    nota20,
    nota10,
    nota5,
    nota1
  };
}

console.log(calcularTroco(87)); // Resultado esperado: { nota20: 4, nota10: 0, nota5: 1, nota1: 2 }

/* QUESTÃO 2 — Detector de Palíndromos
Um sistema precisa verificar se uma palavra ou frase
é um palíndromo.
Um palíndromo é um texto que pode ser lido da mesma
forma da esquerda para a direita e da direita para a esquerda.
A comparação deve ignorar:
- Maiúsculas e minúsculas.
- Espaços.
Retorne true quando for palíndromo e false quando não for.
*/

function verificarPalindromo(texto) {
  let textoLimpo = texto.toLowerCase().replace(/\s/g, "");
  let invertido = "";

  for (let i = textoLimpo.length -1; i >= 0; i--) {
    invertido += textoLimpo[i];
  }

  return invertido === textoLimpo;
}

console.log(verificarPalindromo("A sacada da casa"));   // Resultado esperado: true
console.log(verificarPalindromo("JavaScript"));         // Resultado esperado: false


/* QUESTÃO 3 — Recorde de Treinamento
Um aplicativo registra a quantidade de exercícios
concluídos por dia durante uma semana.
O sistema precisa descobrir:
1. Qual foi a maior sequência de dias consecutivos
   em que o usuário concluiu pelo menos um exercício.
2. Quantos dias durou essa sequência.
Considere que um dia com zero exercícios interrompe
a sequência.
Retorne a maior sequência encontrada.
*/

function maiorSequencia(dias) {
  let sequenciaAtual = 0;
  let maiorSequencia = 0;

  for (let dia of dias) {
    if (dia > 0) {
      sequenciaAtual ++;

      if (sequenciaAtual > maiorSequencia) {
        maiorSequencia = sequenciaAtual;
      }
    } else {
      sequenciaAtual = 0;
    }
  }

  return maiorSequencia;
}

console.log(maiorSequencia([2, 3, 1, 0, 4, 2, 5, 3, 0])); // Resultado esperado: 4
