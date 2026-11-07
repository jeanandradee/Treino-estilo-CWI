/* Uma central registra atendimentos realizados durante o dia.
Cada atendimento possui:
- id
- cliente
- inicio: horário no formato "HH:MM"
- fim: horário no formato "HH:MM"
- prioridade: "normal" ou "urgente"
Retorne:
1. ID e duração de cada atendimento.
2. Soma de todos os minutos.
3. Quantidade de atendimentos urgentes.
4. IDs com duração superior a 30 minutos.
5. Cliente com atendimento mais longo.
Em caso de empate, manter o primeiro cliente.
*/

function analisarAtendimentos(jsonAtendimentos) {
  const atendimentos = JSON.parse(jsonAtendimentos);

  let duracoes = [];
  let totalMinutos = 0;
  let urgentes = 0;
  let acimaDe30 = [];
  let clienteMaiorAtendimento = null;
  let maiorDuracao = -1;

  for (let { id, cliente, inicio, fim, prioridade } of atendimentos) {

    const [horaInicio, minutoInicio] = inicio.split(":").map(Number);
    const [horaFim, minutoFim] = fim.split(":").map(Number);

    const inicioMinutos = horaInicio * 60 + minutoInicio;
    const fimMinutos = horaFim * 60 + minutoFim;

    const minutos = fimMinutos - inicioMinutos;

    duracoes.push({ id, minutos });

    totalMinutos += minutos;

    if (prioridade === "urgente") {
      urgentes++;
    }

    if (minutos > 30) {
      acimaDe30.push(id);
    }

    if (minutos > maiorDuracao) {
      maiorDuracao = minutos;
      clienteMaiorAtendimento = cliente;
    }
  }

  return {
    duracoes,
    totalMinutos,
    urgentes,
    acimaDe30,
    clienteMaiorAtendimento
  };
}

console.log(analisarAtendimentos(`[
  {
    "id": "A10",
    "cliente": "Marina",
    "inicio": "08:10",
    "fim": "08:35",
    "prioridade": "normal"
  },
  {
    "id": "B20",
    "cliente": "Carlos",
    "inicio": "09:00",
    "fim": "09:50",
    "prioridade": "urgente"
  },
  {
    "id": "C30",
    "cliente": "Ana",
    "inicio": "10:15",
    "fim": "10:45",
    "prioridade": "urgente"
  },
  {
    "id": "D40",
    "cliente": "Pedro",
    "inicio": "11:00",
    "fim": "11:40",
    "prioridade": "normal"
  }
]`));

/* Esperado:
{
  duracoes: [
    { id: "A10", minutos: 25 },
    { id: "B20", minutos: 50 },
    { id: "C30", minutos: 30 },
    { id: "D40", minutos: 40 }
  ],
  totalMinutos: 145,
  urgentes: 2,
  acimaDe30: ["B20", "D40"],
  clienteMaiorAtendimento: "Carlos"
}
*/