/* ========================================
   B3 — CAÇA-BUG
   ========================================
Q1 — Validador de idade
Uma função recebe a idade de uma pessoa.
Regras:
- Menor de 18: "Menor de idade".
- De 18 até 59: "Adulto".
- 60 ou mais: "Idoso".
- Valores negativos ou não inteiros: "Idade inválida".
O código apresenta problemas na classificação.
Identifique e corrija os erros.
*/

function classificarIdade(idade) {
  // CORREÇÃO: validar se a idade é um número inteiro
  // e se não é negativa antes de classificar.
  if (!Number.isInteger(idade) || idade < 0) {
    return "Idade inválida";
  }

  if (idade < 18) {
    return "Menor de idade";

  // CORREÇÃO: usar >= 18, pois a idade 18
  // também deve ser classificada como adulto.
  } else if (idade >= 18 && idade < 60) {
    return "Adulto";

  } else if (idade >= 60) {
    return "Idoso";
  }

}

console.log(classificarIdade(17));    // "Menor de idade"
console.log(classificarIdade(18));    // "Adulto"
console.log(classificarIdade(60));    // "Idoso"
console.log(classificarIdade(-2));    // "Idade inválida"
console.log(classificarIdade(25.5));  // "Idade inválida"


/* ========================================
   Q2 — Contador de vogais
Uma função recebe uma string e deve retornar
a quantidade de vogais existentes nela.
Regras:
- Contar a, e, i, o, u.
- Ignorar diferenças entre maiúsculas
  e minúsculas.
- Não contar espaços ou outros caracteres.
O código apresenta um erro na contagem.
Identifique e corrija.
*/

function contarVogais(texto) {
  let contador = 0;
  // CORREÇÃO: transformar cada letra em minúscula
  // para também reconhecer as vogais maiúsculas.
  for (let letra of texto.toLowerCase()) {

    if ("aeiou".includes(letra)) {
      contador++;
    }
  }

  return contador;
}

console.log(contarVogais("JavaScript"));  // 3
console.log(contarVogais("EDUCACAO"));    // 5
console.log(contarVogais("Chat GPT"));    // 1

/* ========================================
   Q3 — Atualizador de configurações
Uma função recebe dois objetos:
- configuracaoAtual
- novasConfiguracoes
Deve retornar um novo objeto com as propriedades
dos dois objetos combinadas.
Se uma propriedade existir nos dois objetos,
o valor de novasConfiguracoes deve prevalecer.
O objeto original não pode ser modificado.
O código apresenta um erro na combinação.
Identifique e corrija.
*/

function atualizarConfiguracao(configuracaoAtual, novasConfiguracoes) {
  return {
    // CORREÇÃO: primeiro espalhar o objeto atual
    // e depois as novas configurações.
    // Assim, quando uma propriedade se repetir,
    // o valor novo terá prioridade.
    ...configuracaoAtual,
    ...novasConfiguracoes
  };
}

const atual = {
  tema: "claro",
  idioma: "pt-BR",
  notificacoes: true
};

const novas = {
  tema: "escuro",
  notificacoes: false
};

console.log(atualizarConfiguracao(atual, novas));
// Resultado esperado:
// {
//   tema: "escuro",
//   idioma: "pt-BR",
//   notificacoes: false
// }

console.log(atual.tema);
// Resultado esperado: "claro"


/* ========================================
   Q4 — Calculadora de média
Uma função recebe três notas e deve calcular
a média aritmética.
Regras:
- Todas as notas devem estar entre 0 e 10.
- Se alguma nota estiver fora desse intervalo,
  retorne "Nota inválida".
- A média deve ser calculada corretamente.
- Se a média for maior ou igual a 7,
  retorne "Aprovado".
- Caso contrário, retorne "Reprovado".
O código apresenta erros na validação
e no cálculo.
Identifique e corrija.
*/

function calcularMedia(nota1, nota2, nota3) {
  // CORREÇÃO: utilizar || entre as validações,
  // pois basta UMA nota ser inválida para
  // retornar "Nota inválida".
  if (
    nota1 < 0 || nota1 > 10 ||
    nota2 < 0 || nota2 > 10 ||
    nota3 < 0 || nota3 > 10
  ) {
    return "Nota inválida";
  }
  // CORREÇÃO: colocar a soma das três notas
  // entre parênteses antes de dividir por 3.
  const media = (nota1 + nota2 + nota3) / 3;

  // CORREÇÃO: utilizar >= 7, pois a média
  // exatamente igual a 7 também aprova.
  if (media >= 7) {
    return "Aprovado";
  }

  return "Reprovado";
}

console.log(calcularMedia(8, 7, 9));    // "Aprovado"
console.log(calcularMedia(5, 6, 7));    // "Reprovado"
console.log(calcularMedia(11, 5, 8));   // "Nota inválida"
console.log(calcularMedia(7, 7, 7));    // "Aprovado"