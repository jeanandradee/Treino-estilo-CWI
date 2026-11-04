/* QUESTÃO 1 — Simulador de Elevador
Um elevador começa no andar 0.
Ele recebe uma sequência de solicitações de movimento:
- Números positivos representam subida.
- Números negativos representam descida.
O elevador não pode ficar abaixo do andar 0.
Se uma descida ultrapassar o limite, ele permanece no andar 0.
Retorne o andar final do elevador.
*/

function simularElevador(movimentos) {
  let andar = 0;
  for (let movimento of movimentos) {
    andar += movimento;

    if (andar < 0) {
      andar = 0;
    }
  }

  return andar;
}

console.log(simularElevador([3, 2, -1, -6, 4])); // Resultado esperado: 4

/* QUESTÃO 2 — Validador de Senhas
Um sistema precisa verificar se uma senha atende
aos seguintes requisitos:
1. Possuir pelo menos 8 caracteres.
2. Conter pelo menos uma letra maiúscula.
3. Conter pelo menos uma letra minúscula.
4. Conter pelo menos um número.
Retorne true se todos os requisitos forem atendidos.
Caso contrário, retorne false.
Não utilize expressões regulares.
*/

function validarSenha(senha) {
  let temMaiusc = false;
  let temMinusc = false;
  let temNum = false;

  for (let caracter of senha) {
    if (caracter >= "A" && caracter <= "Z") {
      temMaiusc = true;
    }

    if (caracter >= "a" && caracter <= "z") {
      temMinusc = true;
    }

    if (caracter >= "0" && caracter <= "9") {
        temNum = true;
    }

  }

  if (
    senha.length < 8 ||
    !temMaiusc ||
    !temMinusc ||
    !temNum
  ) {
    return false;
  }

  return true;
}

console.log(validarSenha("JavaScript8")); // Resultado esperados: true
console.log(validarSenha("javascript8")); // Resultado esperados: false
console.log(validarSenha("JAVA1234"));    // Resultado esperados: false
console.log(validarSenha("Js123"));       // Resultado esperados: false


/* QUESTÃO 3 — Conversor de Temperaturas
Um sistema recebe temperaturas em Celsius e precisa
convertê-las para Fahrenheit.
Fórmula:
F = (C * 9 / 5) + 32
Receba um array de temperaturas e retorne um novo array
com todas as temperaturas convertidas.
Arredonde cada resultado para duas casas decimais.
Não modifique o array original.
*/

function converterTemperaturas(temperaturas) {
  let resultado = [];

  for (let c of temperaturas) {
    resultado.push(Number(((c * 9 / 5) + 32).toFixed(2)));
  }

  return resultado;
}

console.log(converterTemperaturas([0, 20, 30, 100]));
// Resultado esperado: [32, 68, 86, 212]


/* QUESTÃO 4 — Inventário de Peças
Uma oficina possui uma lista de peças e suas quantidades.
Receba um objeto contendo o estoque e um nome de peça.
O sistema deve:
1. Verificar se a peça existe no estoque.
2. Se existir, retornar sua quantidade.
3. Se não existir, retornar "Peça não encontrada".
Não modifique o objeto original.
*/

function consultarEstoque(estoque, peca) {
  let resultado = 0;
  let encontrado = false;

  for (let key in estoque) {
    if (key === peca) {
      resultado = estoque[key];
      encontrado = true;
    }
  }

  return encontrado ? resultado : "Peça não encontrada";
}

console.log(consultarEstoque({ motor: 5, roda: 12, freio: 8 }, "roda")); 
// Resultado esperados: 12

console.log(consultarEstoque({ motor: 5, roda: 12, freio: 8}, "farol"));
// Resultado esperados: "Peça não encontrada"



/* QUESTÃO 5 — Comparador de Resultados
Um sistema recebe dois arrays de números.
Ele precisa identificar:
1. Quantos valores aparecem nos dois arrays.
2. Quais valores existem somente no primeiro array.
3. Quais valores existem somente no segundo array.
Considere que os arrays não possuem valores repetidos.
Retorne um objeto com essas três informações.
Não modifique os arrays originais.
*/

function compararResultados(primeiro, segundo) {
  let emComum = 0;
  let somentePrimeiro = [];
  let somenteSegundo = [];

  for (let i = 0; i < primeiro.length; i++) {
    if (segundo.includes(primeiro[i])) {
      emComum ++ ;
    } else {
      somentePrimeiro.push(primeiro[i]);
    }
  }

  for (let i = 0; i < segundo.length; i++) {
    if (!primeiro.includes(segundo[i])) {
      somenteSegundo.push(segundo[i]);
    }
  }

  return {
    emComum,
    somentePrimeiro,
    somenteSegundo
  }
}

console.log(compararResultados( [2, 4, 6, 8, 10], [4, 8, 12, 14]));
// Resultado esperado: { emComum: 2, somentePrimeiro: [2, 6, 10], somenteSegundo: [12, 14] }

/* QUESTÃO 6 — Organizador de Horários
Um sistema recebe horários representados em minutos,
contados a partir da meia-noite.
Exemplo:
60 representa 01:00.
90 representa 01:30.
O sistema deve converter cada horário para o formato HH:MM.
Regras:
- Horas e minutos devem possuir dois dígitos.
- O resultado deve ser um novo array de strings.
- Não modifique o array original.
*/

function formatarHorarios(horarios) {
  let resultado = [];

  for (let tempo of horarios) {
    let hora = Math.floor(tempo / 60);
    let minuto = tempo % 60;
    let horaFormatada = String(hora).padStart(2, "0");
    let minutoFormatado = String(minuto).padStart(2, "0");
    resultado.push(`${horaFormatada}:${minutoFormatado}`);
  }

  return resultado;
}

console.log(formatarHorarios([0, 60, 90, 725, 1439]));
// Resultado esperado: ["00:00", "01:00", "01:30", "12:05", "23:59"]