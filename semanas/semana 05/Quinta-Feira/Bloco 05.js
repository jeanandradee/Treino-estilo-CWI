/* 🧠 B5 — Lógica em Cadeia
📦 Sistema de entregas
Um sistema registra o tempo de entrega de vários pedidos, em minutos. Você precisa gerar um relatório com base nesses registros.
Crie a função analisarEntregas(tempos), que retorna um objeto com:
entregasValidas: quantidade de tempos maiores que zero.
entregasAtrasadas: quantidade de entregas válidas com tempo maior que 60 minutos.
tempoTotal: soma apenas dos tempos válidos.
maiorTempo: maior tempo válido encontrado. Se não houver nenhum, retornar 0.
*/
function analisarEntregas(tempos) {
  let entregasValidas = 0;
  let entregasAtrasadas = 0;
  let tempoTotal = 0;
  let maiorTempo = 0;

  for (let tempo of tempos) {
    if (tempo > 0) {
      entregasValidas++;
      tempoTotal += tempo;

      if (tempo > 60) {
        entregasAtrasadas++;
      }

      if (tempo > maiorTempo) {
        maiorTempo = tempo;
      }
    }
  }

  return { entregasValidas, entregasAtrasadas, tempoTotal, maiorTempo };
}

console.log(analisarEntregas([30, 70, 0, -5, 90, 45]));
// { entregasValidas: 4, entregasAtrasadas: 2, tempoTotal: 235, maiorTempo: 90 }

console.log(analisarEntregas([-10, 0, -3]));
// { entregasValidas: 0, entregasAtrasadas: 0, tempoTotal: 0, maiorTempo: 0 }

console.log(analisarEntregas([60, 60, 61]));
// { entregasValidas: 3, entregasAtrasadas: 1, tempoTotal: 181, maiorTempo: 61 }