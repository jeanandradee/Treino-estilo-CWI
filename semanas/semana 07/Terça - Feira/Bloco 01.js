/* B1 — Lógica Aplicada
Q1 — Controle de Entregas
Uma transportadora registra suas entregas.
Cada entrega possui:
- codigo
- destino
- valor
- status ("entregue" ou "pendente")
Retorne:
1. Quantidade de entregas concluídas.
2. Quantidade de entregas pendentes.
3. Valor total das entregas concluídas.
*/

function analisarEntregas(entregas) {
  const entregues = entregas.filter(entrega => entrega.status.toLowerCase() === "entregue");
  const pendentes = entregas.filter(entrega => entrega.status.toLowerCase() === "pendente").length;
  const valorTotal = entregues.reduce((acc, e) => acc + e.valor ,0);

  return {
    entregues: entregues.length,
    pendentes,
    valorTotal
  }
}

console.log(analisarEntregas([
  { codigo: 1, destino: "Recife", valor: 120, status: "entregue" },
  { codigo: 2, destino: "João Pessoa", valor: 80, status: "pendente" },
  { codigo: 3, destino: "Natal", valor: 200, status: "entregue" },
  { codigo: 4, destino: "Campina Grande", valor: 90, status: "pendente" }
])); // Esperado: { entregues: 2, pendentes: 2, valorTotal: 320 }

/* Q2 — Monitoramento de Temperatura
Uma empresa monitora a temperatura de seus equipamentos.
Receba um array de temperaturas.
Retorne:
1. Maior temperatura.
2. Menor temperatura.
3. Quantidade de temperaturas acima de 30.
4. Quantidade de temperaturas abaixo de 10.
*/

function analisarTemperaturas(temperaturas) {
  const maior = temperaturas.reduce((acc , n) =>
  acc > n ? acc : n 
  ,-Infinity );

  const menor = temperaturas.reduce((acc , n) =>
  acc < n ? acc : n 
  ,Infinity );

  const acimaDe30 = temperaturas.filter(temp => temp > 30).length;

  const abaixoDe10 = temperaturas.filter(temp => temp < 10).length;

  return {
    maior,
    menor,
    acimaDe30,
    abaixoDe10
  };
}

console.log(analisarTemperaturas([12, 35, 8, 42, 25, 5, 31]));
// Esperado: { maior: 42, menor: 5, acimaDe30: 3, abaixoDe10: 2 }

/* Q3 — Cadastro de Participantes
Um evento possui participantes cadastrados.
Cada participante possui:
- nome
- idade
- categoria
Retorne:
1. Total de participantes.
2. Quantidade de maiores de idade.
3. Lista com os nomes dos participantes da categoria "VIP".
*/

function analisarParticipantes(participantes) {
  const total = participantes.length;

  const maioresDeIdade = participantes.filter(p => p.idade >= 18 ).length;

  const participantesVIP = participantes.filter(p => p.categoria.toUpperCase() === "VIP").map(p => p.nome);

  return {
    total,
    maioresDeIdade,
    participantesVIP
  }
}

console.log(analisarParticipantes([
  { nome: "Ana", idade: 22, categoria: "VIP" },
  { nome: "Carlos", idade: 16, categoria: "Comum" },
  { nome: "Julia", idade: 30, categoria: "VIP" },
  { nome: "Pedro", idade: 17, categoria: "Comum" }
]));
// Esperado: { total: 4, maioresDeIdade: 2, participantesVIP: ["Ana", "Julia"] }