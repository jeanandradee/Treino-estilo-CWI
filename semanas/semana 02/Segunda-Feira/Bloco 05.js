/* ============================================================
🟥 B5 — INTERPRETADOR DE COMANDOS
Um sistema recebe uma lista de comandos para alterar o
estado de um equipamento.
O estado inicial é:
{
  ligado: false,
  nivel: 0
}
Cada comando deve ser interpretado assim:
"LIGAR"
→ ligado passa para true.
"DESLIGAR"
→ ligado passa para false.
"AUMENTAR"
→ aumenta o nivel em 1, mas SOMENTE se o equipamento
  estiver ligado.
"DIMINUIR"
→ diminui o nivel em 1, mas SOMENTE se o equipamento
  estiver ligado.
O nivel nunca pode ficar abaixo de 0.
"MAX"
→ coloca o nivel em 10, mas SOMENTE se estiver ligado.
Comandos desconhecidos devem ser ignorados.
No final, retorne:
{
  ligado,
  nivel
}
IMPORTANTE:
- Os comandos são executados na ordem.
- Um comando pode alterar o resultado dos próximos.
- Não altere o array original.
============================================================ */

function interpretarComandos(comandos) {
  let ligado = false;
  let nivel = 0;


  for (let comando of comandos) {
    if (comando === "LIGAR") {
      ligado = true;
    } else if (comando === "DESLIGAR") {
      ligado = false;
    }

    if (ligado === true) {
      if (comando === "AUMENTAR") {
        nivel ++;
      } else if (comando === "DIMINUIR" && nivel > 0) {
        nivel --;
      } else if (comando === "MAX") {
        nivel = 10;
      }
    }
  }

  return {
    ligado,
    nivel
  }
}

console.log(interpretarComandos(["LIGAR", "AUMENTAR", "AUMENTAR", "DIMINUIR"]));
// {ligado: true, nivel: 1}

console.log(interpretarComandos(["AUMENTAR", "AUMENTAR", "LIGAR", "AUMENTAR"]));
// {ligado: true, nivel: 1}

console.log(interpretarComandos(["LIGAR", "AUMENTAR", "MAX", "DIMINUIR"]));
// {ligado: true, nivel: 9}

console.log(interpretarComandos(["LIGAR", "AUMENTAR", "DESLIGAR", "AUMENTAR", "MAX"]));
// {ligado: false, nivel: 1}

console.log(interpretarComandos(["LIGAR", "DIMINUIR", "DIMINUIR", "AUMENTAR"]));
// {ligado: true, nivel: 1}

console.log(interpretarComandos(["ABC", "MAX", "AUMENTAR", "LIGAR", "MAX", "DESLIGAR"]));
// {ligado: false, nivel: 10}