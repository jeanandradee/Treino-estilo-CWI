/*🟦 B4 — LÓGICA EM AÇÃO
Agora vamos mudar bastante a mecânica. Nada de simples “contar/somar/classificar” como foco principal. Aqui a dificuldade vem da sequência das informações, posição e interpretação das regras.
1️⃣ Sistema de Entregas 🚚
Uma transportadora recebe os registros das entregas na ordem em que aconteceram.
Cada entrega possui:
{
  cliente: "Ana",
  distancia: 12,
  status: "ENTREGUE"
}
O sistema deve gerar um novo relatório somente com entregas ENTREGUE.
Para cada uma:
distancia <= 10 → categoria "LOCAL"
distancia > 10 → categoria "LONGA"
O resultado deve manter a ordem original.*/

function gerarRelatorio(entregas) {
  let resultado = [];
  for (let { cliente, distancia, status } of entregas) {
    let categoria;

    if (status === "ENTREGUE") {
      if (distancia > 10) {
        categoria = "LONGA";
      } else {
        categoria = "LOCAL";
      }
    
    resultado.push({
      cliente,
      categoria
    });
    }
  }

  return resultado;
}


console.log(gerarRelatorio([{cliente: "Ana", distancia: 8, status: "ENTREGUE"},
 {cliente: "Bruno", distancia: 15, status: "PENDENTE"}, {cliente: "Carlos", distancia: 10, status: "ENTREGUE"}]));
// [ {cliente: "Ana", categoria: "LOCAL"}, {cliente: "Carlos", categoria: "LOCAL"} ]

console.log(gerarRelatorio([ {cliente: "Duda", distancia: 11, status: "ENTREGUE"},
 {cliente: "Eva", distancia: 20, status: "ENTREGUE"}]));
// [ {cliente: "Duda", categoria: "LONGA"}, {cliente: "Eva", categoria: "LONGA"} ]

console.log(gerarRelatorio([{cliente: "Filipe", distancia: 10, status: "PENDENTE"},
 {cliente: "Gabi", distancia: 9, status: "ENTREGUE"}]));
// [ {cliente: "Gabi", categoria: "LOCAL"} ]

console.log(gerarRelatorio([]));
// []

console.log(gerarRelatorio([{cliente: "Hugo", distancia: 10, status: "ENTREGUE"}]));
// [ {cliente: "Hugo", categoria: "LOCAL"} ]

console.log(gerarRelatorio([ {cliente: "Iara", distancia: 11, status: "ENTREGUE"},
 {cliente: "João", distancia: 10, status: "ENTREGUE"}, {cliente: "Kleber", distancia: 5, status: "PENDENTE"}]));
// [ {cliente: "Iara", categoria: "LONGA"}, {cliente: "João", categoria: "LOCAL"} ]

/*2️⃣ Detector de Repetição 🔎
Um sistema monitora uma sequência de códigos.
Ele precisa encontrar o primeiro ponto em que dois códigos consecutivos são iguais.
Retorne o código repetido.
Se não existir repetição consecutiva, retorne null.*/

function encontrarRepeticao(codigos) {
  for (let i = 1; i < codigos.length; i++) {
    if (codigos[i] === codigos[i - 1]) {
      return codigos[i];
    }
  }

  return null;
}

console.log(encontrarRepeticao(["A", "B", "B", "C"])); // "B"

console.log(encontrarRepeticao(["X", "X", "Y", "Y"])); // "X"

console.log(encontrarRepeticao(["A", "B", "C", "C", "D"])); // "C"

console.log(encontrarRepeticao(["A", "B", "C"])); // null

console.log(encontrarRepeticao(["Z", "Z"])); // "Z"

console.log(encontrarRepeticao([])); // null

 
/*3️⃣ Histórico de Preços 💰
Uma loja registra o preço de um produto ao longo dos dias:
[100, 120, 120, 90, 110]
O sistema deve analisar cada preço a partir do segundo e comparar com o preço imediatamente anterior.
Para cada comparação:
preço atual > anterior → "AUMENTO"
preço atual < anterior → "QUEDA"
preço atual === anterior → "ESTAVEL"
Quando houver aumento ou queda, também informe a diferença positiva entre os valores.
O primeiro preço não possui comparação e, portanto, não aparece no resultado.*/

function analisarPrecos(precos) {
  let resultado = [];
  let situacao = "";
  let diferenca;
  for (let i = 1; i < precos.length; i++ ) {
    if (precos[i] > precos[i - 1]) {
      situacao = "AUMENTO";
    } else if (precos[i] < precos[i - 1]) {
      situacao = "QUEDA";
    } else {
      situacao = "ESTAVEL";
    }

    diferenca = Math.abs(precos[i] - precos[i - 1]);
    resultado.push({ situacao, diferenca });
  }

  return resultado;
}

console.log(analisarPrecos([100, 120, 120, 90]));
// [ {situacao: "AUMENTO", diferenca: 20}, {situacao: "ESTAVEL", diferenca: 0}, {situacao: "QUEDA", diferenca: 30} ]

console.log(analisarPrecos([50, 40, 60]));
// [ {situacao: "QUEDA", diferenca: 10}, {situacao: "AUMENTO", diferenca: 20} ]

console.log(analisarPrecos([100, 100, 100]));
// [ {situacao: "ESTAVEL", diferenca: 0}, {situacao: "ESTAVEL", diferenca: 0} ]

console.log(analisarPrecos([10, 5]));
// [ {situacao: "QUEDA", diferenca: 5} ]

console.log(analisarPrecos([5, 10]));
// [ {situacao: "AUMENTO", diferenca: 5} ]

console.log(analisarPrecos([]));
// []