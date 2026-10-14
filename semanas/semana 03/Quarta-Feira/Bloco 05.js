/* 📦 Cenário
Uma empresa precisa analisar as entregas realizadas durante o dia. Cada entrega é representada por um objeto com três propriedades:
destino: nome do local de entrega.
distancia: distância percorrida em quilômetros.
status: "ENTREGUE", "PENDENTE" ou "CANCELADA".
Crie a função analisarEntregas(entregas).
Regras
O resultado deve ser um objeto contendo:
entregues: quantidade de entregas com status "ENTREGUE".
pendentes: quantidade de entregas com status "PENDENTE".
canceladas: quantidade de entregas com status "CANCELADA".
kmEntregues: soma das distâncias das entregas concluídas.
destinoMaisDistante: destino da entrega concluída com a maior distância.
mediaKmEntregues: distância média das entregas concluídas.
Detalhes importantes:
Apenas entregas com status "ENTREGUE" entram nos cálculos de kmEntregues, destinoMaisDistante e mediaKmEntregues.
Se houver empate na maior distância, mantenha o primeiro destino encontrado.
Se não houver entregas concluídas, destinoMaisDistante deve ser null e mediaKmEntregues deve ser 0.
Se o array estiver vazio, todos os contadores e valores numéricos devem ser 0, e o destino deve ser null.
Não modifique o array original nem os objetos dentro dele.
🧩 Esqueleto da função */
function analisarEntregas(entregas) {
  let entregues = 0;
  let pendentes = 0;
  let canceladas = 0;
  let kmEntregues = 0;
  let destinoMaisDistante = null;
  let distanciaMaisDistante = 0;
  let mediaKmEntregues = 0;

  for (let { destino, distancia, status } of entregas) {
    if (status === "ENTREGUE") {
      entregues ++;
      kmEntregues += distancia;

      if (destinoMaisDistante === null || distancia > distanciaMaisDistante) {
        distanciaMaisDistante = distancia;
        destinoMaisDistante = destino;
      }
    } else if (status === "PENDENTE") {
      pendentes ++;
    } else if (status === "CANCELADA") {
      canceladas ++;
    } 
  }

  if (entregues > 0) {
    mediaKmEntregues = kmEntregues / entregues;   
  }


  return {entregues, pendentes, canceladas, kmEntregues, destinoMaisDistante, mediaKmEntregues};
}

console.log(analisarEntregas([{ destino: "Centro", distancia: 10, status: "ENTREGUE" },
 { destino: "Bairro A", distancia: 5, status: "PENDENTE" }, { destino: "Bairro B", distancia: 15, status: "ENTREGUE" },
 { destino: "Bairro C", distancia: 8, status: "CANCELADA" }]));
// { entregues: 2, pendentes: 1, canceladas: 1, kmEntregues: 25, destinoMaisDistante: "Bairro B", mediaKmEntregues: 12.5 }

console.log(analisarEntregas([ { destino: "Norte", distancia: 12, status: "ENTREGUE" },
 { destino: "Sul", distancia: 12, status: "ENTREGUE" }]));
// { entregues: 2, pendentes: 0, canceladas: 0, kmEntregues: 24, destinoMaisDistante: "Norte", mediaKmEntregues: 12 }

console.log(analisarEntregas([ { destino: "Leste", distancia: 7, status: "PENDENTE" },
 { destino: "Oeste", distancia: 9, status: "CANCELADA" }]));
// { entregues: 0, pendentes: 1, canceladas: 1, kmEntregues: 0, destinoMaisDistante: null, mediaKmEntregues: 0 }

console.log(analisarEntregas([]));
// { entregues: 0, pendentes: 0, canceladas: 0, kmEntregues: 0, destinoMaisDistante: null, mediaKmEntregues: 0 }

console.log(analisarEntregas([ { destino: "A", distancia: 4, status: "ENTREGUE" },
 { destino: "B", distancia: 20, status: "CANCELADA" }, { destino: "C", distancia: 6, status: "ENTREGUE" }]));
// { entregues: 2, pendentes: 0, canceladas: 1, kmEntregues: 10, destinoMaisDistante: "C", mediaKmEntregues: 5 }

console.log(analisarEntregas([ { destino: "Praia", distancia: 3, status: "ENTREGUE" },
 { destino: "Serra", distancia: 18, status: "ENTREGUE" }, { destino: "Vale", distancia: 11, status: "ENTREGUE" },
 { destino: "Centro", distancia: 2, status: "PENDENTE" }]));
// { entregues: 3, pendentes: 1, canceladas: 0, kmEntregues: 32, destinoMaisDistante: "Serra", mediaKmEntregues: 32 / 3 }