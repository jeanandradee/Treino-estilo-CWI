/* ========================================
   B5 — SISTEMA DE RESERVA DE ASSENTOS
   ========================================
Uma função recebe dois parâmetros:
1. assentos: uma matriz que representa
   os assentos de um espaço.
2. reservas: um array com as tentativas
   de reserva.
Na matriz:
- false representa um assento disponível.
- true representa um assento ocupado.
Cada reserva possui:
- linha: índice da linha desejada.
- coluna: índice da coluna desejada.
REGRAS:
1. Os índices começam em zero.
2. Uma reserva deve ser confirmada somente
   quando:
   - linha e coluna forem números inteiros;
   - os índices estiverem dentro dos limites
     da matriz;
   - o assento ainda estiver disponível.
3. Quando uma reserva for confirmada,
   o assento correspondente deve passar
   a ser ocupado.
4. Reservas inválidas ou de assentos já
   ocupados devem ser rejeitadas.
5. As reservas devem ser processadas na
   ordem em que aparecem no array.
   Portanto, uma reserva anterior pode
   impedir uma reserva posterior.
6. NÃO MODIFIQUE a matriz original.
   O resultado deve utilizar uma cópia
   da matriz recebida.
RETORNE um objeto contendo:
- assentos: matriz atualizada.
- reservasConfirmadas: quantidade de
  reservas aprovadas.
- reservasRejeitadas: quantidade de
  reservas recusadas.
========================================
*/

function processarReservas(assentos, reservas) {
  const novaMatriz = assentos.map((linha) => [...linha]);

  let reservasConfirmadas = 0;
  let reservasRejeitadas = 0;

  for (let reserva of reservas) {
    let { linha, coluna } = reserva;

    if (!Number.isInteger(linha) || !Number.isInteger(coluna)) {
      reservasRejeitadas++;
      continue;
    }

    if (linha < 0 || linha >= novaMatriz.length) {
      reservasRejeitadas++;
      continue;
    }

    if (coluna < 0 || coluna >= novaMatriz[linha].length) {
      reservasRejeitadas++;
      continue;
    }

    if (novaMatriz[linha][coluna] === true) {
      reservasRejeitadas++;
      continue;
    }

    novaMatriz[linha][coluna] = true;

    reservasConfirmadas++;
  }

  return {
    assentos: novaMatriz,
    reservasConfirmadas,
    reservasRejeitadas,
  };
}

console.log(
  processarReservas(
    [
      [false, false, true],
      [false, false, false],
    ],
    [
      { linha: 0, coluna: 0 },
      { linha: 0, coluna: 2 },
      { linha: 1, coluna: 1 },
    ],
  ),
);

/*
Resultado esperado:

{
  assentos: [
    [true, false, true],
    [false, true, false]
  ],
  reservasConfirmadas: 2,
  reservasRejeitadas: 1
}
*/

console.log(
  processarReservas(
    [
      [false, false],
      [false, false],
    ],
    [
      { linha: 1, coluna: 1 },
      { linha: 1, coluna: 1 },
      { linha: 5, coluna: 0 },
      { linha: 0, coluna: 0 },
    ],
  ),
);

/*
Resultado esperado:

{
  assentos: [
    [true, false],
    [false, true]
  ],
  reservasConfirmadas: 2,
  reservasRejeitadas: 2
}
*/

console.log(
  processarReservas(
    [[false, false]],
    [
      { linha: 0.5, coluna: 0 },
      { linha: 0, coluna: -1 },
    ],
  ),
);

/*
Resultado esperado:

{
  assentos: [
    [false, false]
  ],
  reservasConfirmadas: 0,
  reservasRejeitadas: 2
}
*/
