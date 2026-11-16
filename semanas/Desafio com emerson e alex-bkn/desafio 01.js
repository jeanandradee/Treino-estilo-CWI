/* Jean de Andrade
🏆 Desafio 01 — O detector de números
Fácil 
JavaScript
Top Game Development Courses for Aspiring Game Developers - Vagon
 🎯 Objetivo
Criar um programa em JavaScript que receba um número inteiro e descubra 3 coisas sobre ele:
Se é par ou ímpar.
Se é positivo, negativo ou zero.
Se é primo ou não primo.
📥 Exemplos de execução
Exemplo 1:
text
Digite um número: 7
Resultado:
É ímpar
É positivo
É primo
Exemplo 2:
text
Digite um número: 10
Resultado:
É par
É positivo
Não é primo
Exemplo 3:
text
Digite um número: -4
Resultado:
É par
É negativo
Não é primo
📋 Regras
Deve ser feito em JavaScript.
Não pode considerar 1 como número primo.
Números negativos não são primos.
O número 0 não é primo.
Deve funcionar com qualquer número inteiro.
⭐ Desafio extra
Tente fazer tudo usando funções separadas:
verificarParidade()
verificarSinal()
verificarPrimo()
🏁 Critério de vitória
5 pontos: funcionamento correto.
2 pontos: organização do código.
2 pontos: uso de funções.
1 ponto: criatividade.
10 pontos
Pontuação máxima por participante.*/

const verificarParidade = (n) => n % 2 === 0 ? "É par" : "É ímpar";
const verificarSinal = (n) => n > 0 ? "É positivo" : n < 0 ? "É negativo" : "É zero";
const verificarPrimo = (n) => {
  if (n <= 1) return "Não é primo";

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return "Não é primo";
  }

  return "É primo";
};

console.log(verificarParidade(7));
console.log(verificarSinal(7));
console.log(verificarPrimo(7));

console.log(verificarParidade(10));
console.log(verificarSinal(10));
console.log(verificarPrimo(10));

console.log(verificarParidade(-4));
console.log(verificarSinal(-4));
console.log(verificarPrimo(-4));