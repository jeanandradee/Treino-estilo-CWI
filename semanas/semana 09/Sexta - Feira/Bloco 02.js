/* B2 — PRÁTICO 
   ========================================
   Q1 — INTERPRETADOR DE COMANDOS
   ========================================
Crie uma função "interpretarComando(comando)".
A função recebe uma string contendo uma operação matemática e dois números, separados por espaços.
Formatos aceitos:
- ""SOMA 10 5""
- ""SUB 10 5""
- ""MULT 10 5""
- ""DIV 10 5""
A função deve retornar um objeto contendo:
- "operacao": nome da operação.
- "resultado": resultado do cálculo.
REGRAS:
- SOMA: adição.
- SUB: subtração.
- MULT: multiplicação.
- DIV: divisão.
- Se o comando for inválido, retorne "null".
- Não permita divisão por zero.
- Considere os números inteiros ou decimais.*/

function interpretarComando(comando) {
  let divisor = comando.split(" ");

  if (divisor.length !== 3) {
    return null;
  }

  let operacao = divisor[0];
  let n1 = Number(divisor[1]);
  let n2 = Number(divisor[2]);

  if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
    return null;
  }

  switch (operacao) {
    case "SOMA" :
      return { operacao, resultado:n1 + n2};
 
    case "SUB" :
      return { operacao, resultado: n1 - n2};

    case "MULT" :
      return { operacao, resultado: n1 * n2};

    case "DIV" :
      if (n2 === 0) {
        return null;
      }

      return { operacao, resultado: n1 / n2};

    default :
      return null;
  }
}

console.log(interpretarComando("SOMA 10 5")); // { operacao: "SOMA", resultado: 15 }
console.log(interpretarComando("SUB 10 5"));  // { operacao: "SUB", resultado: 5 }
console.log(interpretarComando("MULT 4 3"));  // { operacao: "MULT", resultado: 12 }
console.log(interpretarComando("DIV 20 4"));  // { operacao: "DIV", resultado: 5 }
console.log(interpretarComando("DIV 10 0"));  // null
console.log(interpretarComando("POT 2 3"));   // null
console.log(interpretarComando("SOMA 2"));    // null

/* ========================================
   Q2 — NORMALIZADOR DE CADASTRO
   ========================================
Crie uma função "normalizarCadastro(cadastro)".
O objeto recebido possui:
- "nome"
- "email"
- "cidade"
A função deve retornar um novo objeto com os mesmos campos, seguindo as regras:
- Nome: remover espaços no início e no final.
- Email: remover espaços no início e no final e converter para letras minúsculas.
- Cidade: remover espaços no início e no final e converter para letras maiúsculas.
REGRAS:
- Não modifique o objeto original.
- Preserve os nomes das propriedades.
- Retorne um novo objeto.*/

function normalizarCadastro(cadastro) {
  let { nome, email, cidade } = cadastro;

  return {
    nome: nome.trim(),
    email: email.trim().toLowerCase(),
    cidade: cidade.trim().toUpperCase()
  };
}

const cadastro1 = { nome: "  Ana Silva  ", email: " ANA@EMAIL.COM ", cidade: "  João Pessoa " };

console.log(normalizarCadastro(cadastro1));
// { nome: "Ana Silva", email: "ana@email.com", cidade: "JOÃO PESSOA" }
console.log(cadastro1);
// O objeto original deve continuar sem alterações.
console.log(normalizarCadastro({ nome: " Pedro ", email: " PEDRO@TESTE.COM ", cidade: " Recife " }));
// { nome: "Pedro", email: "pedro@teste.com", cidade: "RECIFE" }

/* ========================================
   Q3 — TRANSPOSIÇÃO DE MATRIZ
   ========================================
Crie uma função "transporMatriz(matriz)".
A função recebe uma matriz e deve retornar uma nova matriz com linhas e colunas invertidas.
Exemplo:
[ [1, 2, 3], [4, 5, 6] ]
Resultado:
[ [1, 4], [2, 5], [3, 6] ]
REGRAS:
- Não modifique a matriz original.
- A matriz pode ter diferentes quantidades de linhas e colunas.
- Considere matrizes retangulares.
- Uma matriz vazia deve retornar "[]".*/

function transporMatriz(matriz) {
  if (matriz.length === 0) return [];

  const resultado = [];

  for (let coluna = 0; coluna < matriz[0].length; coluna++) {
    const novaLinha = [];

    for (let linha = 0; linha < matriz.length; linha++) {
      novaLinha.push(matriz[linha][coluna]);
    }

    resultado.push(novaLinha);
  }

  return resultado;
}


console.log(transporMatriz([ [1, 2, 3], [4, 5, 6] ]));     // [[1, 4], [2, 5], [3, 6]]
console.log(transporMatriz([ [1, 2], [3, 4], [5, 6] ]));   // [[1, 3, 5], [2, 4, 6]]
console.log(transporMatriz([ [7] ]));                      // [[7]]
console.log(transporMatriz([]));                           // []

/* ========================================
   Q4 — CONVERSOR DE TEMPO
   ========================================
Crie uma função "converterSegundos(segundos)".
A função recebe uma quantidade inteira e não negativa de segundos e deve retornar um objeto contendo:
- "horas"
- "minutos"
- "segundos"
REGRAS:
- Uma hora possui 3600 segundos.
- Um minuto possui 60 segundos.
- Os segundos restantes devem ficar entre 0 e 59.
- Os minutos restantes devem ficar entre 0 e 59.*/

function converterSegundos(segundos) {
  const horas = Math.floor(segundos / 3600);

  const minutos = Math.floor((segundos % 3600) / 60);

  const segundosRestantes = segundos % 60;

  return {
    horas,
    minutos,
    segundos: segundosRestantes
  };
}

console.log(converterSegundos(3665));    // { horas: 1, minutos: 1, segundos: 5 }
console.log(converterSegundos(59));      // { horas: 0, minutos: 0, segundos: 59 }
console.log(converterSegundos(3600));    // { horas: 1, minutos: 0, segundos: 0 }
console.log(converterSegundos(7200));    // { horas: 2, minutos: 0, segundos: 0 }
console.log(converterSegundos(0));       // { horas: 0, minutos: 0, segundos: 0 }