/* ========================================
   Q1 — SIMULADOR DE CAIXA
   ========================================
Uma caixa possui um saldo inicial e recebe uma
sequência de movimentações.
Crie uma função simularCaixa(saldoInicial, movimentos).
Cada movimento possui:
- tipo: "credito" ou "debito".
- valor: valor da movimentação.
REGRAS:
- Crédito aumenta o saldo.
- Débito diminui o saldo.
- Se um débito for maior que o saldo disponível,
  ignore essa movimentação.
- Movimentações com valor menor ou igual a zero
  devem ser ignoradas.
Retorne um objeto contendo:
- saldoFinal: saldo depois das movimentações.
- movimentosAceitos: quantidade de movimentações realizadas.
- movimentosIgnorados: quantidade de movimentações ignoradas.
*/

function simularCaixa(saldoInicial, movimentos) {
  let saldoFinal = saldoInicial;
  let movimentosAceitos = 0;
  let movimentosIgnorados = 0;

  for (let { tipo, valor } of movimentos) {

    if (valor <= 0) {
      movimentosIgnorados++;
      continue;
    }

    if (tipo === "credito") {
      saldoFinal += valor;
      movimentosAceitos++;

    } else if (tipo === "debito") {

      if (valor > saldoFinal) {
        movimentosIgnorados++;
        continue;
      }

      saldoFinal -= valor;
      movimentosAceitos++;

    } else {
      movimentosIgnorados++;
    }
  }

  return {
    saldoFinal,
    movimentosAceitos,
    movimentosIgnorados
  };
}

console.log(simularCaixa(100, [ { tipo: "credito", valor: 50 },{ tipo: "debito", valor: 30 },
{ tipo: "debito", valor: 150 },{ tipo: "credito", valor: 20 }]));
// Resultado esperado: { saldoFinal: 140, movimentosAceitos: 3, movimentosIgnorados: 1 }

/* ========================================
   Q2 — CODIFICADOR DE TEXTO
   ========================================
Crie uma função codificarTexto(texto).
A função deve transformar cada letra em sua
próxima letra do alfabeto.
REGRAS:
- "a" vira "b".
- "b" vira "c".
- "y" vira "z".
- "z" vira "a".
- Letras maiúsculas devem continuar maiúsculas.
- Números, espaços e símbolos devem permanecer iguais.
Dica: você pode resolver usando códigos de caracteres,
mas não é obrigatório.

*/

function codificarTexto(texto) {
  let alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let resultado = "";

  for (let letra of texto) {
    let minuscula = letra.toLowerCase();
    let posicao = alfabeto.indexOf(minuscula);

    if (posicao !== -1) {
      let proxima;

      if (minuscula === "z") {
        proxima = "a";
      } else {
        proxima = alfabeto[posicao + 1];
      }

      if (letra === letra.toUpperCase()) {
        resultado += proxima.toUpperCase();
      } else {
        resultado += proxima;
      }

    } else {
      resultado += letra;
    }
  }

  return resultado;
}

console.log(codificarTexto("abc"));       // "bcd"
console.log(codificarTexto("xyz"));       // "yza"
console.log(codificarTexto("Casa 123"));  // "Dbtb 123"
console.log(codificarTexto("XYZ"));       // "YZA"
console.log(codificarTexto("Java!"));     // "Kbwb!"

/* ========================================
   Q3 — TRANSFORMADOR DE OBJETOS
   ========================================
Crie uma função transformarUsuario(usuario).
O objeto recebido possui:
{
nome: "ana silva",
idade: 25,
endereco: {
cidade: "joão pessoa",
estado: "pb"
}
}
Retorne um NOVO objeto contendo:
{
nome: "Ana Silva",
idade: 25,
localizacao: "João Pessoa - PB",
faixaEtaria: "Adulto"
}
REGRAS:
- Nome e cidade devem começar com letras maiúsculas.
- O restante das letras deve ficar minúsculo.
- Estado deve ficar em letras maiúsculas.
- Menores de 18 anos: "Menor".
- De 18 até 59 anos: "Adulto".
- 60 anos ou mais: "Idoso".
- Não modifique o objeto original.

*/

function transformarUsuario(usuario) {
  let nome = usuario.nome
    .toLowerCase()
    .split(" ")
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ");

  let cidade = usuario.endereco.cidade
    .toLowerCase()
    .split(" ")
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ");

  let estado = usuario.endereco.estado.toUpperCase();

  let faixaEtaria;

  if (usuario.idade < 18) {
    faixaEtaria = "Menor";
  } else if (usuario.idade < 60) {
    faixaEtaria = "Adulto";
  } else {
    faixaEtaria = "Idoso";
  }

  return {
    nome,
    idade: usuario.idade,
    localizacao: `${cidade} - ${estado}`,
    faixaEtaria
  };

}

const usuario = { nome: "ana silva", idade: 25, endereco: { cidade: "joão pessoa", estado: "pb" } };

console.log(transformarUsuario(usuario));
// Resultado: { nome: "Ana Silva", idade: 25, localizacao: "João Pessoa - PB", faixaEtaria: "Adulto" }

/* ========================================
   Q4 — ANALISADOR DE MATRIZ
   ========================================
Crie uma função analisarDiagonal(matriz).
A função recebe uma matriz quadrada de números.
Retorne um objeto contendo:
- diagonalPrincipal: elementos da diagonal principal.
- diagonalSecundaria: elementos da diagonal secundária.
- somaPrincipal: soma da diagonal principal.
- somaSecundaria: soma da diagonal secundária.
Considere que a matriz sempre será quadrada.
*/

function analisarDiagonal(matriz) {
  let diagonalPrincipal = [];
  let diagonalSecundaria = [];

  let somaPrincipal = 0;
  let somaSecundaria = 0;

  for (let i = 0; i < matriz.length; i++) {

    diagonalPrincipal.push(matriz[i][i]);

    diagonalSecundaria.push(
      matriz[i][matriz.length - 1 - i]
    );

    somaPrincipal += matriz[i][i];

    somaSecundaria += matriz[i][matriz.length - 1 - i];
  }

  return {
    diagonalPrincipal,
    diagonalSecundaria,
    somaPrincipal,
    somaSecundaria
  };
}

console.log(analisarDiagonal([ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]));
// Resultado esperado: { diagonalPrincipal: [1, 5, 9], diagonalSecundaria: [3, 5, 7], somaPrincipal: 15, somaSecundaria: 15 }

console.log(analisarDiagonal([ [2, 4], [6, 8] ]));
// Resultado esperado: { diagonalPrincipal: [2, 8], diagonalSecundaria: [4, 6], somaPrincipal: 10, somaSecundaria: 10 }