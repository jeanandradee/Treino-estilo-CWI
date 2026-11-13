/* B1 — Lógica Aplicada
Questão 1 — Nome dos meses
Crie uma função que recebe um número inteiro de 1 a 12
e retorna o nome correspondente ao mês do ano.
O nome deve ser retornado em português, com a primeira
letra maiúscula.
Exemplos:
3  -> "Março"
12 -> "Dezembro"
6  -> "Junho"
*/

function mesNome(numero) {
  const nomesMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  return (nomesMeses[numero - 1]);
}

console.log(mesNome(3));  // "Março"
console.log(mesNome(12)); // "Dezembro"
console.log(mesNome(6));  // "Junho"
console.log(mesNome(1));  // "Janeiro"

/* Questão 2 — Controle de Estoque
Uma loja possui uma lista de produtos.
Cada produto contém:
- nome
- quantidade
- minimo
Crie uma função que recebe essa lista e retorna
um array contendo os nomes dos produtos que precisam
ser reabastecidos.
Um produto precisa ser reabastecido quando sua
quantidade for menor ou igual ao mínimo.
A ordem dos nomes deve ser a mesma da lista original.
*/

function verificarEstoque(produtos) {
  return produtos.filter(p => p.quantidade <= p.minimo).map(p => p.nome);
}

console.log(verificarEstoque([
  { nome: "Mouse", quantidade: 5, minimo: 5 },
  { nome: "Teclado", quantidade: 10, minimo: 4 },
  { nome: "Monitor", quantidade: 2, minimo: 3 },
  { nome: "Headset", quantidade: 0, minimo: 2 }
]));
// ["Mouse", "Monitor", "Headset"]

/* Questão 3 — Análise de Notas
Uma escola precisa analisar as notas de uma turma.
Crie uma função que recebe um array de notas
e retorna um objeto contendo:
- aprovados: quantidade de notas maiores ou iguais a 7.
- reprovados: quantidade de notas menores que 7.
- media: média de todas as notas.
Se o array estiver vazio, a média deverá ser 0.
*/

function analisarNotas(notas) {
  const aprovados = notas.filter(n => n >= 7).length;

  const reprovados = notas.filter(n => n <= 6).length;

  const media = notas.length > 0 ? 
    notas.reduce((acc, n) => acc + n ,0) / notas.length 
    : 0;

  return {
    aprovados,
    reprovados,
    media
  }
}

console.log(analisarNotas([8, 5, 10, 6, 7])); // { aprovados: 3, reprovados: 2, media: 7.2 }
console.log(analisarNotas([4, 6, 5]));        // { aprovados: 0, reprovados: 3, media: 5 }
console.log(analisarNotas([]));               // { aprovados: 0, reprovados: 0, media: 0 }
