/* 1️⃣ Validação de acesso 🔐
Uma pessoa só pode entrar se:
- tiver 18 anos ou mais;
- possuir ingresso ativo (ativo === true).
O código abaixo está liberando acessos incorretamente.
Corrija o menor trecho possível.
ERRO: o operador || permite entrar se apenas uma
condição for verdadeira.
CORREÇÃO: usar &&, pois as duas condições precisam
ser verdadeiras.
*/

function podeEntrar(pessoa) {
  if (pessoa.idade >= 18 && pessoa.ativo === true) {
    return true;
  }

  return false;
}

console.log(podeEntrar({idade: 20, ativo: true}));   // true
console.log(podeEntrar({idade: 20, ativo: false}));  // false
console.log(podeEntrar({idade: 16, ativo: true}));   // false
console.log(podeEntrar({idade: 16, ativo: false}));  // false
console.log(podeEntrar({idade: 18, ativo: true}));   // true
console.log(podeEntrar({idade: 17, ativo: true}));   // false


/* 2️⃣ Primeiro valor aprovado 📋
Uma função deve retornar o primeiro número maior
ou igual a 50.
Se nenhum número atender à regra, deve retornar null.
Existe um erro na condição.
Corrija somente o necessário.
ERRO: numero > 50 não aceita o número 50.
CORREÇÃO: usar numero >= 50.
*/

function primeiroAprovado(numeros) {
  for (let numero of numeros) {
    if (numero >= 50) {
      return numero;
    }
  }

  return null;
}

console.log(primeiroAprovado([20, 40, 60, 80])); // 60
console.log(primeiroAprovado([10, 50, 70]));     // 50
console.log(primeiroAprovado([49, 48, 47]));     // null
console.log(primeiroAprovado([50]));             // 50
console.log(primeiroAprovado([]));               // null
console.log(primeiroAprovado([30, 50, 40]));     // 50


/* 3️⃣ Atualizador de cadastro 📝
A função deve criar uma cópia do usuário e atualizar
a idade dessa cópia.
O objeto original não pode ser modificado.
Existe um erro na forma como o resultado é criado.
Faça a correção mínima.
ERRO: let resultado = usuario não cria uma cópia.
As duas variáveis apontam para o mesmo objeto.
CORREÇÃO: usar { ...usuario } para criar uma cópia.
*/

function atualizarUsuario(usuario, novaIdade) {
  let resultado = { ...usuario };
  resultado.idade = novaIdade;

  return resultado;
}

const usuarioTeste = {nome: "Ana", idade: 20};

console.log(atualizarUsuario(usuarioTeste, 25));
// {nome: "Ana", idade: 25}

console.log(usuarioTeste.idade); // 20 (original preservado)

console.log(atualizarUsuario({nome: "Leo", idade: 30}, 31));
// {nome: "Leo", idade: 31}

console.log(atualizarUsuario({nome: "Bia", idade: 18}, 19));
// {nome: "Bia", idade: 19}

console.log(atualizarUsuario({nome: "Caio", idade: 40}, 22));
// {nome: "Caio", idade: 22}

console.log(atualizarUsuario({nome: "Lia", idade: 16}, 17));
// {nome: "Lia", idade: 17}


/* 4️⃣ Controle de saldo 💳
Uma conta possui um saldo inicial.
Para cada saque:
- se o valor for positivo e houver saldo suficiente,
  o saque deve ser realizado;
- caso contrário, o saldo deve permanecer igual.
O código está permitindo saques indevidos.
Corrija a condição responsável pelo saque.
ERRO: a condição verifica apenas se o valor é positivo.
CORREÇÃO: verificar também se o saldo é suficiente,
usando saldo >= valor.
*/

function processarSaques(saldoInicial, saques) {
  let saldo = saldoInicial;

  for (let valor of saques) {
    if (valor > 0 && saldo >= valor) {
      saldo -= valor;
    }
  }

  return saldo;
}

console.log(processarSaques(100, [20, 30]));   // 50
console.log(processarSaques(100, [120]));       // 100
console.log(processarSaques(50, [10, 60]));     // 40
console.log(processarSaques(0, [10, 20]));      // 0
console.log(processarSaques(80, [0, -10, 20])); // 60
console.log(processarSaques(30, [30, 1]));      // 0


/* 5️⃣ Detector de pico ⛰️
Retorne o índice do primeiro pico de uma sequência.
Um pico é um elemento que:
- é maior que o elemento anterior;
- é maior que o elemento seguinte.
As extremidades nunca podem ser picos.
Se não existir pico, retorne -1.
Há um erro na condição que identifica o pico.
Corrija somente essa condição.
ERRO: || permite que o número seja maior que apenas
um dos vizinhos.
CORREÇÃO: usar && para exigir que seja maior que ambos.
*/

function primeiroPico(numeros) {
  for (let i = 1; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i - 1] && numeros[i] > numeros[i + 1]) {
      return i;
    }
  }

  return -1;
}

console.log(primeiroPico([1, 3, 2]));        // 1
console.log(primeiroPico([1, 2, 3, 2]));     // 2
console.log(primeiroPico([1, 2, 3, 4]));     // -1
console.log(primeiroPico([5, 1, 4, 2]));     // 2
console.log(primeiroPico([3, 3, 3]));        // -1
console.log(primeiroPico([1, 5, 4, 6, 2])); // 1


/* 6️⃣ Contador de valores positivos ➕
A função deve contar somente os números estritamente positivos.
Zero e números negativos não entram na contagem.
Existe um erro na condição.
Corrija o menor trecho possível.
ERRO: numero >= 0 também conta o zero.
CORREÇÃO: usar numero > 0.
*/

function contarPositivos(numeros) {
  let quantidade = 0;

  for (let numero of numeros) {
    if (numero > 0) {
      quantidade++;
    }
  }

  return quantidade;
}

console.log(contarPositivos([1, 2, 3]));        // 3
console.log(contarPositivos([-1, 0, 1]));       // 1
console.log(contarPositivos([0, 0, 0]));        // 0
console.log(contarPositivos([-5, -2, -1]));     // 0
console.log(contarPositivos([10, -10, 20, 0])); // 2
console.log(contarPositivos([]));               // 0