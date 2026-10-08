/* ============================================================
B5 — VIAGEM DE CARRO
Um carro fará uma viagem entre duas cidades.
Você receberá:
- a distância total da viagem, em quilômetros;
- o consumo médio do carro, em km/L;
- a capacidade total do tanque, em litros;
- a quantidade de combustível que já existe no tanque;
- a velocidade média prevista, em km/h.
Crie a função calcularViagem() para calcular:
1. litrosNecessarios:
   Quantos litros serão necessários para concluir a viagem.
2. autonomiaInicial:
   Quantos quilômetros o carro consegue percorrer com
   o combustível que já existe no tanque.
3. paradas:
   Quantas paradas para abastecimento serão necessárias,
   considerando que o carro sai com o combustível informado
   e cada parada completa o tanque.
4. tempoHoras:
   Quantas horas a viagem levará, considerando a velocidade
   média constante.
5. combustivelFinal:
   Quantos litros restarão no tanque ao chegar ao destino.
REGRAS:
- O carro começa a viagem com o combustível informado.
- O tanque nunca pode ultrapassar sua capacidade.
- O consumo é constante.
- O abastecimento acontece quando o combustível acaba,
  exceto se o carro já tiver combustível suficiente para
  chegar ao destino.
- Considere que cada parada abastece o tanque até a capacidade.
- Arredonde litros e tempo para duas casas decimais.
- O número de paradas deve ser inteiro.
- Considere entradas válidas e positivas, com combustível
  inicial entre zero e a capacidade do tanque.

Retorne um objeto com os cinco resultados.

============================================================ */

function calcularViagem(distancia, consumo, capacidade, combustivelInicial, velocidadeMedia) {
  let litrosNecessarios = distancia / consumo;
  let autonomiaInicial = combustivelInicial * consumo;
  let tempoHoras = distancia / velocidadeMedia;

  let paradas = 0;
  let combustivelDisponivel = combustivelInicial;
  let distanciaRestante = distancia;

  while (distanciaRestante > 0) {
    let autonomiaAtual = combustivelDisponivel * consumo;

    if (autonomiaAtual >= distanciaRestante) {
      combustivelDisponivel -= distanciaRestante / consumo;
      distanciaRestante = 0;
    } else {
      distanciaRestante -= autonomiaAtual;

      combustivelDisponivel = capacidade;
      paradas++;
    }
  }

  let combustivelFinal = combustivelDisponivel;

  return {
    litrosNecessarios: Number(litrosNecessarios.toFixed(2)),
    autonomiaInicial: Number(autonomiaInicial.toFixed(2)),
    paradas,
    tempoHoras: Number(tempoHoras.toFixed(2)),
    combustivelFinal: Number(combustivelFinal.toFixed(2))
  };
}

console.log(calcularViagem(300, 15, 40, 20, 100));
// { litrosNecessarios: 20, autonomiaInicial: 300, paradas: 0, tempoHoras: 3, combustivelFinal: 0 }

console.log(calcularViagem(600, 10, 50, 20, 100));
// { litrosNecessarios: 60, autonomiaInicial: 200, paradas: 1, tempoHoras: 6, combustivelFinal: 10 }

console.log(calcularViagem(1000, 10, 40, 10, 80));
// { litrosNecessarios: 100, autonomiaInicial: 100, paradas: 2, tempoHoras: 12.5, combustivelFinal: 10 }

console.log(calcularViagem(450, 15, 30, 30, 90));
// { litrosNecessarios: 30, autonomiaInicial: 450, paradas: 0, tempoHoras: 5, combustivelFinal: 0 }

console.log(calcularViagem(750, 12, 40, 15, 75));
// { litrosNecessarios: 62.5, autonomiaInicial: 180, paradas: 1, tempoHoras: 10, combustivelFinal: 2.5 }

console.log(calcularViagem(100, 10, 60, 5, 50));
// { litrosNecessarios: 10, autonomiaInicial: 50, paradas: 0, tempoHoras: 2, combustivelFinal: 0 }