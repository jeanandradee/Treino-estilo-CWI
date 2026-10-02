/* 1️⃣ Sistema de Entregas 🚚
Uma empresa registra entregas:
{
  cliente: "Ana",
  distancia: 12,
  status: "ENTREGUE"
}
O sistema deve:
considerar somente entregas com status === "ENTREGUE";
distancia <= 10 → categoria "LOCAL";
distancia > 10 → categoria "LONGA";
retornar um novo array mantendo a ordem original.
Formato:
{
  cliente: "Ana",
  categoria: "LONGA"
}*/

function classificarEntregas(entregas) {
  let resultado = [];
  for (let { cliente, distancia, status } of entregas) {
    let categoria;

    if (status === "ENTREGUE") {
      if (distancia <= 10) {
        categoria = "LOCAL";
      } else {
        categoria = "LONGA";
      }

      resultado.push({
        cliente,
        categoria
      })
    }
  }

  return resultado;
}

console.log(classificarEntregas([{cliente: "Ana", distancia: 5, status: "ENTREGUE"},
 {cliente: "Bruno", distancia: 20, status: "PENDENTE"}, {cliente: "Carlos", distancia: 15, status: "ENTREGUE"}]));
// [ {cliente: "Ana", categoria: "LOCAL"}, {cliente: "Carlos", categoria: "LONGA"} ]

console.log(classificarEntregas([ {cliente: "Duda", distancia: 10, status: "ENTREGUE"},
 {cliente: "Eva", distancia: 11, status: "ENTREGUE"}]));
// [ {cliente: "Duda", categoria: "LOCAL"}, {cliente: "Eva", categoria: "LONGA"} ]

console.log(classificarEntregas([{cliente: "Filipe", distancia: 30, status: "PENDENTE"}]));
// []

console.log(classificarEntregas([{cliente: "Gabi", distancia: 1, status: "ENTREGUE"},
 {cliente: "Hugo", distancia: 10, status: "ENTREGUE"},  {cliente: "Iara", distancia: 50, status: "ENTREGUE"}]));
// [ {cliente: "Gabi", categoria: "LOCAL"}, {cliente: "Hugo", categoria: "LOCAL"}, {cliente: "Iara", categoria: "LONGA"} ]

console.log(classificarEntregas([]));
// []

console.log(classificarEntregas([{cliente: "Joao", distancia: 0, status: "ENTREGUE"}]));
// [ {cliente: "Joao", categoria: "LOCAL"} ]

/*2️⃣ Detector de Repetição 🔎
Um sistema precisa descobrir a primeira repetição consecutiva em uma sequência.
Uma repetição acontece quando:
valores[i] === valores[i - 1]
A função deve retornar um objeto contendo:
valor: valor que se repetiu;
posicao: índice da segunda ocorrência.
Se não houver repetição:
null*/

function primeiraRepeticao(valores) {
  for (let i = 1; i < valores.length; i++) {
    if (valores[i] === valores[i - 1]) {
      return {
        valor: valores[i],
        posicao: i
      }
    }
  }

  return null;
}

console.log(primeiraRepeticao([1, 2, 3, 3, 5])); // {valor: 3, posicao: 3}

console.log(primeiraRepeticao([7, 7, 8, 8])); // {valor: 7, posicao: 1}

console.log(primeiraRepeticao([1, 2, 3, 4])); // null

console.log(primeiraRepeticao([5, 4, 4, 4])); // {valor: 4, posicao: 2}

console.log(primeiraRepeticao([9, 9])); // {valor: 9, posicao: 1}

console.log(primeiraRepeticao([])); // null

/*3️⃣ Histórico de Preços 💰
Uma loja registra o preço de um produto ao longo dos dias:
[100, 120, 120, 90, 95]
Para cada preço a partir do segundo, compare com o preço anterior.
Ignore quando o preço for igual.
Quando houver mudança, registre:
{
  tipo: "AUMENTO" ou "QUEDA",
  diferenca: valor absoluto da mudança
}
Exemplo:
100 → 120 = AUMENTO de 20
120 → 120 = ignora
120 → 90  = QUEDA de 30
90  → 95  = AUMENTO de 5*/

function analisarPrecos(precos) {
  let resultado = [];

  for (let i = 1; i < precos.length; i++) {
    let tipo;
    let diferenca;

    if (precos[i] > precos[i - 1]) {
      resultado.push({
        tipo :"AUMENTO",
        diferenca : Math.abs(precos[i] - precos[i - 1])
      });
    } else if (precos[i] < precos[i - 1]) {
      resultado.push({
        tipo :"QUEDA",
        diferenca : Math.abs(precos[i] - precos[i - 1])
      });
    }
  }

  return resultado;
}

console.log(analisarPrecos([100, 120, 120, 90, 95]));
// [ {tipo: "AUMENTO", diferenca: 20}, {tipo: "QUEDA", diferenca: 30}, {tipo: "AUMENTO", diferenca: 5} ]

console.log(analisarPrecos([50, 40, 30]));
// [ {tipo: "QUEDA", diferenca: 10}, {tipo: "QUEDA", diferenca: 10} ]

console.log(analisarPrecos([10, 10, 10]));
// []

console.log(analisarPrecos([100, 150, 120, 120, 200]));
// [ {tipo: "AUMENTO", diferenca: 50}, {tipo: "QUEDA", diferenca: 30}, {tipo: "AUMENTO", diferenca: 80} ]

console.log(analisarPrecos([25]));
// []

console.log(analisarPrecos([]));
// []