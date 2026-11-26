/* B2 — PRÁTICO | PREPARAÇÃO CWI
   ========================================
   Q1 — VALIDADOR DE SENHA
   ========================================
Crie uma função "validarSenha(senha)".
A função recebe uma string e deve retornar um objeto contendo:
- "valida": indica se a senha atende a todos os critérios.
- "quantidadeCaracteres": quantidade de caracteres da senha.
- "temNumero": indica se existe pelo menos um número.
- "temMaiuscula": indica se existe pelo menos uma letra maiúscula.
REGRAS:
- A senha deve possuir pelo menos 8 caracteres.
- Deve conter pelo menos um número.
- Deve conter pelo menos uma letra maiúscula.
- Espaços também contam como caracteres.
Não é necessário exigir símbolos especiais.*/

function validarSenha(senha) {
  let valida = false;
  let quantidadeCaracteres = 0;
  let temNumero = false;
  let temMaiuscula = false;

  for (let s of senha) {
    quantidadeCaracteres ++;

    if (s >= "0" && s <= "9") {
      temNumero = true;
    }

    if (s >= "A" && s <= "Z") {
      temMaiuscula = true;
    }
  }

  valida = senha.length >= 8 && temNumero && temMaiuscula;

  return {
    valida,
    quantidadeCaracteres,
    temNumero,
    temMaiuscula
  }
}

// Testes principais
console.log(validarSenha("JavaScript123"));
// { valida: true, quantidadeCaracteres: 13, temNumero: true, temMaiuscula: true }
console.log(validarSenha("javascript123"));
// { valida: false, quantidadeCaracteres: 13, temNumero: true, temMaiuscula: false }
console.log(validarSenha("JavaScript"));
// { valida: false, quantidadeCaracteres: 10, temNumero: false, temMaiuscula: true }
console.log(validarSenha("Abc123"));
// { valida: false, quantidadeCaracteres: 6, temNumero: true, temMaiuscula: true }
// Testes extras
console.log(validarSenha("12345678"));
// { valida: false, quantidadeCaracteres: 8, temNumero: true, temMaiuscula: false }
console.log(validarSenha("ABCDEFGH"));
// { valida: false, quantidadeCaracteres: 8, temNumero: false, temMaiuscula: true }
console.log(validarSenha("Abcdefg1"));
// { valida: true, quantidadeCaracteres: 8, temNumero: true, temMaiuscula: true }
console.log(validarSenha("A1"));
// { valida: false, quantidadeCaracteres: 2, temNumero: true, temMaiuscula: true }
console.log(validarSenha("Abc defg1"));
// { valida: true, quantidadeCaracteres: 9, temNumero: true, temMaiuscula: true }
console.log(validarSenha(""));
// { valida: false, quantidadeCaracteres: 0, temNumero: false, temMaiuscula: false }

/* ========================================
   Q2 — DECODIFICADOR DE SEQUÊNCIA
   ========================================
Crie uma função "decodificarSequencia(texto)".
A função recebe uma string contendo letras seguidas de números.
Cada letra deve ser repetida a quantidade de vezes indicada pelo número que vem imediatamente depois dela.
Exemplo:
""A3B2C1"" deve retornar ""AAABBC"".
REGRAS:
- Cada letra será seguida por um número inteiro positivo.
- Considere letras maiúsculas e minúsculas como caracteres diferentes.
- A ordem original deve ser preservada.
- Não utilize "repeat()".
- Utilize estruturas de repetição.
- Se receber uma string vazia, retorne """".
*/

function decodificarSequencia(texto) {
  let resultado = "";
  let i = 0;

  while (i < texto.length) {
    let letra = texto[i];
    i++;

    let numero = "";

    while (i < texto.length && texto[i] >= "0" && texto[i] <= "9") {
      numero += texto[i];
      i++;
    }

    for (let j = 0; j < Number(numero); j++) {
      resultado += letra;
    }
  }

  return resultado;
}

// Testes principais

console.log(decodificarSequencia("A3B2C1"));        // "AAABBC"
console.log(decodificarSequencia("X5"));            // "XXXXX"
console.log(decodificarSequencia("a2B3"));          // "aaBBB"
console.log(decodificarSequencia("C1D1E1"));        // "CDE"
// Testes extras
console.log(decodificarSequencia("A1B1C1"));        // "ABC"
console.log(decodificarSequencia("Z4A2"));          // "ZZZZAA"
console.log(decodificarSequencia("a3a2"));          // "aaaaa"
console.log(decodificarSequencia("M2N10"));         // "MMNNNNNNNNNN"
console.log(decodificarSequencia(""));              // ""
console.log(decodificarSequencia("P2Q3R2"));        // "PPQQQRR"

/* ========================================
   Q3 — CALCULADORA DE OPERAÇÕES
   ========================================
Crie uma função "calcularOperacao(numero1, numero2, operador)".
A função recebe dois números e um operador matemático.
OPERADORES ACEITOS:
- ""+"": soma.
- ""-"": subtração.
- ""*"": multiplicação.
- ""/"": divisão.
- ""%"": resto da divisão.
- ""**"": potência.
REGRAS:
- Retorne o resultado da operação.
- Se o operador não for reconhecido, retorne ""Operador inválido"".
- Se houver divisão ou resto por zero, retorne ""Operação inválida"".
- Considere que as entradas numéricas são válidas.
*/

function calcularOperacao(numero1, numero2, operador) {
  switch (operador) {
    case "+":
      return numero1 + numero2;
    case "-":
      return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
      if (numero2 === 0) {
        return "Operação inválida";
      }
      return numero1 / numero2;
    case "%":
      if (numero2 === 0) {
        return "Operação inválida";
      }
      return numero1 % numero2;
    case "**":
      return numero1 ** numero2;
    default:
      return "Operador inválido";
  }
}

// Testes principais

console.log(calcularOperacao(10, 5, "+"));      // 15
console.log(calcularOperacao(10, 5, "-"));      // 5
console.log(calcularOperacao(4, 3, "*"));       // 12
console.log(calcularOperacao(20, 4, "/"));      // 5
console.log(calcularOperacao(10, 3, "%"));      // 1
console.log(calcularOperacao(2, 4, "**"));      // 16
// Testes extras
console.log(calcularOperacao(7, 0, "/"));       // "Operação inválida"
console.log(calcularOperacao(7, 0, "%"));       // "Operação inválida"
console.log(calcularOperacao(0, 5, "/"));       // 0
console.log(calcularOperacao(-4, 2, "*"));      // -8
console.log(calcularOperacao(3, 0, "**"));      // 1
console.log(calcularOperacao(10, 3, "&"));      // "Operador inválido"
console.log(calcularOperacao(2.5, 2, "*"));     // 5

/* ========================================
   Q4 — ANALISADOR DE PLACAR
   ========================================
Crie uma função "analisarPlacar(placar)".
A função recebe uma string contendo o resultado de uma partida no formato ""X-Y"",
em que X representa os gols do primeiro time e Y os gols do segundo time.
A função deve retornar um objeto contendo:
- "golsPrimeiro": quantidade de gols do primeiro time.
- "golsSegundo": quantidade de gols do segundo time.
- "resultado": ""Vitoria"", ""Derrota"" ou ""Empate"".
- "totalGols": soma dos gols da partida.
REGRAS:
- O placar sempre estará no formato ""X-Y"".
- Os gols serão números inteiros iguais ou maiores que zero.
- O resultado deve ser analisado pela perspectiva do primeiro time.
- Não utilize bibliotecas externas.
*/ 

function analisarPlacar(placar) {
  let placarDividido = placar.split("-");
  const golsPrimeiro = Number(placarDividido[0]);
  const golsSegundo = Number(placarDividido[1]);

  const resultado = golsPrimeiro > golsSegundo ? "Vitoria" 
    : golsSegundo > golsPrimeiro ? "Derrota" : "Empate";

  const totalGols = golsPrimeiro + golsSegundo;

  return {
    golsPrimeiro,
    golsSegundo,
    resultado,
    totalGols
  }
}

// Testes principais

console.log(analisarPlacar("2-1"));
// { golsPrimeiro: 2, golsSegundo: 1, resultado: "Vitoria", totalGols: 3 }
console.log(analisarPlacar("0-3"));
// { golsPrimeiro: 0, golsSegundo: 3, resultado: "Derrota", totalGols: 3 }
console.log(analisarPlacar("2-2"));
// { golsPrimeiro: 2, golsSegundo: 2, resultado: "Empate", totalGols: 4 }
console.log(analisarPlacar("5-0"));
// { golsPrimeiro: 5, golsSegundo: 0, resultado: "Vitoria", totalGols: 5 }
// Testes extras
console.log(analisarPlacar("0-0"));
// { golsPrimeiro: 0, golsSegundo: 0, resultado: "Empate", totalGols: 0 }
console.log(analisarPlacar("1-0"));
// { golsPrimeiro: 1, golsSegundo: 0, resultado: "Vitoria", totalGols: 1 }
console.log(analisarPlacar("0-1"));
// { golsPrimeiro: 0, golsSegundo: 1, resultado: "Derrota", totalGols: 1 }
console.log(analisarPlacar("10-2"));
// { golsPrimeiro: 10, golsSegundo: 2, resultado: "Vitoria", totalGols: 12 }
console.log(analisarPlacar("3-7"));
// { golsPrimeiro: 3, golsSegundo: 7, resultado: "Derrota", totalGols: 10 }
console.log(analisarPlacar("8-8"));
// { golsPrimeiro: 8, golsSegundo: 8, resultado: "Empate", totalGols: 16 }
console.log(analisarPlacar("12-0"));
// { golsPrimeiro: 12, golsSegundo: 0, resultado: "Vitoria", totalGols: 12 }