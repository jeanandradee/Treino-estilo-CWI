/*
🐛 Bug 1 — Contagem de aprovados

Uma plataforma precisa contar quantos alunos foram aprovados.
A nota mínima para aprovação é 7.

Sua missão: corrija o erro na condição de aprovação.
*/

function contarAprovados(notas) {
  let aprovados = 0;

  for (let i = 0; i < notas.length; i++) {
    // Corrigido: a nota 7 também conta como aprovação.
    if (notas[i] >= 7) {
      aprovados++;
    }
  }

  return aprovados;
}

console.log(contarAprovados([6, 7, 8, 9])); // Resultado esperado: 3
console.log(contarAprovados([7, 7, 6]));    // Resultado esperado: 2
console.log(contarAprovados([5, 6, 4]));    // Resultado esperado: 0


/*
🐛 Bug 2 — Maior número do array

Uma função deve retornar o maior número de uma lista.

Sua missão: corrija o erro que impede a função de encontrar
o maior número.
*/

function encontrarMaior(numeros) {
  // Corrigido: começa com o primeiro elemento do array,
  // para funcionar também quando todos os números são negativos.
  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    // Corrigido: atualiza quando encontra um número maior.
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}

console.log(encontrarMaior([3, 8, 2, 5]));  // Resultado esperado: 8
console.log(encontrarMaior([10, 4, 7]));   // Resultado esperado: 10
console.log(encontrarMaior([-8, -3, -5])); // Resultado esperado: -3


/*
🐛 Bug 3 — Remover números negativos

Um sistema precisa criar um novo array contendo somente
números maiores ou iguais a zero.

Sua missão: corrija a condição responsável por selecionar
os números.
*/

function removerNegativos(numeros) {
  let resultado = [];

  for (let i = 0; i < numeros.length; i++) {
    // Corrigido: seleciona números maiores ou iguais a zero.
    if (numeros[i] >= 0) {
      resultado.push(numeros[i]);
    }
  }

  return resultado;
}

console.log(removerNegativos([-2, 5, -1, 8])); // Resultado esperado: [5, 8]
console.log(removerNegativos([0, -3, 4]));     // Resultado esperado: [0, 4]
console.log(removerNegativos([-1, -2]));       // Resultado esperado: []


/*
🐛 Bug 4 — Calcular o total de uma compra

Uma loja precisa somar os preços dos produtos comprados.

Sua missão: corrija o erro que faz a função não acumular
todos os preços.
*/

function calcularTotal(precos) {
  let total = 0;

  for (let i = 0; i < precos.length; i++) {
    // Corrigido: soma cada preço ao total acumulado,
    // em vez de substituir o total pelo preço atual.
    total += precos[i];
  }

  return total;
}

console.log(calcularTotal([10, 20, 30])); // Resultado esperado: 60
console.log(calcularTotal([5, 15]));     // Resultado esperado: 20
console.log(calcularTotal([8]));         // Resultado esperado: 8


/*
🐛 Bug 5 — Inverter uma string

Uma função deve retornar uma string invertida.

Sua missão: corrija o erro que faz a função deixar de incluir
um caractere.
*/

function inverterString(texto) {
  let resultado = "";

  // Corrigido: i >= 0 inclui também o caractere da posição zero.
  for (let i = texto.length - 1; i >= 0; i--) {
    resultado += texto[i];
  }

  return resultado;
}

console.log(inverterString("casa"));  // Resultado esperado: "asac"
console.log(inverterString("abc"));   // Resultado esperado: "cba"
console.log(inverterString("radar")); // Resultado esperado: "radar"


/*
🐛 Bug 6 — Atualizar tentativas restantes

Um sistema permite que o usuário tente fazer login três vezes.
Cada tentativa deve diminuir o número de tentativas restantes
em uma unidade.

Sua missão: corrija o erro que impede a atualização
do número de tentativas restantes.
*/

function atualizarTentativas(restantes) {
  for (let i = 0; i < 3; i++) {
    // Corrigido: atribui o resultado da subtração à variável.
    restantes -= 1;
  }

  return restantes;
}

console.log(atualizarTentativas(3)); // Resultado esperado: 0
console.log(atualizarTentativas(5)); // Resultado esperado: 2
console.log(atualizarTentativas(1)); // Resultado esperado: -2