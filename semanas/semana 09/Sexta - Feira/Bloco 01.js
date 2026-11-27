/* ========================================
   Q1 — ANALISADOR DE FREQUÊNCIA
   ========================================
Crie uma função "analisarFrequencia(texto)".
A função recebe uma string e deve retornar um objeto contendo:
- "quantidadeLetras": quantidade de letras, desconsiderando espaços.
- "quantidadeDigitos": quantidade de números de 0 a 9.
- "quantidadeEspacos": quantidade de espaços.
- "quantidadeOutros": quantidade de caracteres que não sejam letras, dígitos ou espaços.
REGRAS:
- Considere letras maiúsculas e minúsculas.
- Espaços devem ser contados individualmente.
- Considere pontuação como outros caracteres.
- Uma string vazia deve retornar todas as quantidades como zero.*/

function analisarFrequencia(texto) {
  const quantidadeLetras = [...texto].filter(txt => 
    (txt >= "A" && txt <= "Z") ||
    (txt >= "a" && txt <= "z")
  ).length;

  const quantidadeDigitos = [...texto].filter(txt =>
    txt >= "0" && txt <= "9"
  ).length;

  const quantidadeEspacos = [...texto].filter(txt => txt === " ").length;

  const quantidadeOutros = [...texto].filter(txt =>
    !(
      (txt >= "A" && txt <= "Z") ||
      (txt >= "a" && txt <= "z") ||
      (txt >= "0" && txt <= "9") ||
      txt === " "
    )
  ).length;


  return {
    quantidadeLetras,
    quantidadeDigitos,
    quantidadeEspacos,
    quantidadeOutros
  }
}

console.log(analisarFrequencia("Java 123!"));
// { quantidadeLetras: 4, quantidadeDigitos: 3,
//   quantidadeEspacos: 1, quantidadeOutros: 1 }

console.log(analisarFrequencia("A1 B2"));
// { quantidadeLetras: 2, quantidadeDigitos: 2,
//   quantidadeEspacos: 1, quantidadeOutros: 0 }

console.log(analisarFrequencia(""));
// { quantidadeLetras: 0, quantidadeDigitos: 0,
//   quantidadeEspacos: 0, quantidadeOutros: 0 }

console.log(analisarFrequencia("Oi, tudo bem?"));
// { quantidadeLetras: 9, quantidadeDigitos: 0,
//   quantidadeEspacos: 2, quantidadeOutros: 2 }

/* ========================================
   Q2 — COMPARADOR DE OBJETOS
   ========================================
Crie uma função "compararObjetos(objetoA, objetoB)".
A função recebe dois objetos simples e deve retornar "true" se ambos possuírem exatamente as mesmas propriedades e os mesmos valores, independentemente da ordem das propriedades.
Caso contrário, deve retornar "false".
REGRAS:
- Considere somente objetos simples, com valores primitivos.
- A quantidade de propriedades deve ser igual.
- Os nomes das propriedades devem ser iguais.
- Os valores devem ser iguais e do mesmo tipo.*/

function compararObjetos(objetoA, objetoB) {
  const chavesA = Object.keys(objetoA);
  const chavesB = Object.keys(objetoB);

  if (chavesA.length !== chavesB.length) {
    return false;
  }

  return chavesA.every(chave =>
    Object.hasOwn(objetoB, chave) &&
    objetoA[chave] === objetoB[chave]
  );
}

console.log(compararObjetos( { nome: "Ana", idade: 20 }, { idade: 20, nome: "Ana" } )); // true
console.log(compararObjetos( { nome: "Ana", idade: 20 }, { nome: "Ana", idade: 21 } )); // false
console.log(compararObjetos( { valor: 10 }, { valor: "10" } ));                         // false
console.log(compararObjetos( { a: 1, b: 2 }, { a: 1 } ));                               // false
console.log(compararObjetos({}, {}));                                                   // true
console.log(compararObjetos( { ativo: true, pontos: 0 }, { pontos: 0, ativo: true } )); // true


/* ========================================
   Q3 — CALCULADORA DE INTERVALOS
   ========================================
Crie uma função "calcularIntervalo(inicio, fim)".
A função recebe dois números inteiros e deve retornar um objeto contendo:
- "quantidade": quantidade de números existentes no intervalo.
- "soma": soma dos números do intervalo.
- "pares": quantidade de números pares.
- "impares": quantidade de números ímpares.
REGRAS:
- Considere os dois limites, início e fim.
- O intervalo pode ser crescente ou decrescente.
- Se os valores forem iguais, considere somente esse número.
- Não utilize métodos prontos para calcular os resultados.*/

function calcularIntervalo(inicio, fim) {
  let quantidade = 0;
  let soma = 0;
  let pares = 0;
  let impares = 0;

  const passo = inicio <= fim ? 1 : -1;

  for (let i = inicio; passo === 1 ? i <= fim : i >= fim; i += passo) {
    quantidade ++;
    soma += i;

    if (i % 2 === 0) {
      pares ++;
    } else {
      impares ++;
    }
  }

  return {
    quantidade,
    soma,
    pares,
    impares
  }
}


console.log(calcularIntervalo(1, 5));       // { quantidade: 5, soma: 15, pares: 2, impares: 3 }
console.log(calcularIntervalo(3, 3));       // { quantidade: 1, soma: 3, pares: 0, impares: 1 }
console.log(calcularIntervalo(2, 6));       // { quantidade: 5, soma: 20, pares: 3, impares: 2 }
console.log(calcularIntervalo(5, 1));       // { quantidade: 5, soma: 15, pares: 2, impares: 3 }
console.log(calcularIntervalo(-2, 2));      // { quantidade: 5, soma: 0, pares: 3, impares: 2 }


/* ========================================
   Q4 — SISTEMA DE RESERVAS
   ========================================
Crie uma função "processarReservas(reservas)".
Cada reserva possui:
- "codigo": identificador da reserva.
- "valor": valor da reserva.
- "status": situação da reserva.
A função deve retornar um objeto contendo:
- "totalConfirmadas": quantidade de reservas confirmadas.
- "valorConfirmado": soma dos valores das reservas confirmadas.
- "codigoMaiorReserva": código da reserva confirmada de maior valor.
REGRAS:
- Considere somente reservas com status ""confirmada"".
- Se não houver reservas confirmadas, "codigoMaiorReserva" deve ser "null".
- Se houver empate no maior valor, mantenha o código da primeira reserva encontrada.
- Não modifique o array original.*/

function processarReservas(reservas) {
  const totalConfirmadas = reservas.filter(reserva => reserva.status === "confirmada");

  const valorConfirmado = totalConfirmadas.reduce((acc, r) => acc + r.valor ,0);
  
  const maiorReserva = totalConfirmadas.reduce((maior, atual) => {
    if (maior === null || atual.valor > maior.valor) {
      return atual;
    }

    return maior;
  }, null);

  const codigoMaiorReserva = maiorReserva
    ? maiorReserva.codigo
    : null;

  return {
    totalConfirmadas: totalConfirmadas.length,
    valorConfirmado,
    codigoMaiorReserva
  }
}

console.log(processarReservas([ { codigo: "A1", valor: 100, status: "confirmada" },
 { codigo: "A2", valor: 200, status: "cancelada" }, { codigo: "A3", valor: 150, status: "confirmada" } ]));
// { totalConfirmadas: 2, valorConfirmado: 250, codigoMaiorReserva: "A3" }

console.log(processarReservas([ { codigo: "B1", valor: 80, status: "cancelada" },
 { codigo: "B2", valor: 90, status: "pendente" } ]));
// { totalConfirmadas: 0, valorConfirmado: 0, codigoMaiorReserva: null }

console.log(processarReservas([ { codigo: "C1", valor: 100, status: "confirmada" },
 { codigo: "C2", valor: 100, status: "confirmada" } ]));
// { totalConfirmadas: 2, valorConfirmado: 200, codigoMaiorReserva: "C1"}

console.log(processarReservas([]));
// { totalConfirmadas: 0, valorConfirmado: 0, codigoMaiorReserva: null }