/* Jean de Andrade
🎯 Desafio 02 — Calculadora Inteligente
Muito
fácil
JavaScript
calculator isolated
Objetivo
Criar uma calculadora que receba dois números e uma operação.
Regras
O programa deve:
Receber dois números.
Perguntar qual operação deseja realizar.
Fazer a conta.
Mostrar o resultado.
Operações:
Adição (+)
Subtração (-)
Multiplicação (*)
Divisão (/)
Exemplo
text
Digite o primeiro número: 10
Digite o segundo número: 5
Escolha a operação: +
Resultado: 15
⭐ Desafio extra
Impedir divisão por zero.
Criar uma função para cada operação.
Mostrar uma mensagem caso a operação seja inválida.
🏆 Pontuação
Critério
Pontos
Receber os números
2
Fazer as operações
4
Mostrar resultado
2
Organização
2
Total
10*/

const somar = (n1, n2) => n1 + n2;

const subtrair = (n1, n2) => n1 - n2;

const multiplicar = (n1, n2) => n1 * n2;

const dividir = (n1, n2) => n2 === 0 ? "Não é possível dividir por zero!" : n1 / n2;

console.log(somar(10, 5, "+"));