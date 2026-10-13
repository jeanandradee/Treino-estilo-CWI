/*
B5 — O planeta e seus ciclos

Recebe:
- horasTotais: horas observadas.
- horasRotacao: horas que dura um dia no planeta.
- diasOrbita: dias do planeta necessários para completar uma órbita.

Retorne:
{
  diasCompletos,
  horasRestantes,
  rotacoesCompletas,
  orbitasCompletas
}

Regras:
- diasCompletos = quantidade de dias inteiros transcorridos.
- horasRestantes = horas que sobraram após retirar os dias inteiros.
- rotacoesCompletas = quantidade de rotações completas no período.
- orbitasCompletas = quantidade de órbitas completas no período.
- Uma rotação completa equivale a horasRotacao horas.
- Uma órbita completa equivale a diasOrbita * horasRotacao horas.
- Não conte ciclos incompletos.
- Todos os valores recebidos são números inteiros não negativos,
  e horasRotacao e diasOrbita são maiores que zero.
*/

function analisarPlaneta(horasTotais, horasRotacao, diasOrbita) {
  let diasCompletos = Math.floor(horasTotais / horasRotacao);
  let horasRestantes = horasTotais % horasRotacao;
  let rotacoesCompletas = Math.floor(horasTotais / horasRotacao);
  let horasOrbita = diasOrbita * horasRotacao;
  let orbitasCompletas = Math.floor(horasTotais / horasOrbita);

  return {
    diasCompletos,
    horasRestantes,
    rotacoesCompletas,
    orbitasCompletas
  };
}

console.log(analisarPlaneta(50, 10, 3));
// {diasCompletos: 5, horasRestantes: 0, rotacoesCompletas: 5, orbitasCompletas: 1}

console.log(analisarPlaneta(29, 8, 4));
// {diasCompletos: 3, horasRestantes: 5, rotacoesCompletas: 3, orbitasCompletas: 0}

console.log(analisarPlaneta(96, 12, 2));
// {diasCompletos: 8, horasRestantes: 0, rotacoesCompletas: 8, orbitasCompletas: 4}

console.log(analisarPlaneta(0, 6, 5));
// {diasCompletos: 0, horasRestantes: 0, rotacoesCompletas: 0, orbitasCompletas: 0}

console.log(analisarPlaneta(71, 24, 2));
// {diasCompletos: 2, horasRestantes: 23, rotacoesCompletas: 2, orbitasCompletas: 1}

console.log(analisarPlaneta(100, 7, 3));
// {diasCompletos: 14, horasRestantes: 2, rotacoesCompletas: 14, orbitasCompletas: 4}