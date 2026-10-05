/* ============================================================
1️⃣ PRIMEIRO ELEMENTO VÁLIDO

A função deve retornar o primeiro número que seja:

- maior ou igual a 50
- menor que 100

Caso nenhum número atenda às duas condições, retorne -1.

O código possui um erro lógico.
Corrija somente o necessário.
============================================================ */

function primeiroValido(nums) {
  for (let i = 0; i < nums.length; i++) {

    // ❌ ERRO:
    // if (nums[i] > 50 && nums[i] < 100)

    // O enunciado diz "maior OU IGUAL a 50".
    // Portanto, precisamos usar >= em vez de >.
    if (nums[i] >= 50 && nums[i] < 100) {
      return nums[i];
    }
  }

  return -1;
}

console.log(primeiroValido([20, 35, 50, 70, 120])); // 50
console.log(primeiroValido([10, 49, 100, 120])); // -1
console.log(primeiroValido([101, 80, 60])); // 80
console.log(primeiroValido([50, 51, 52])); // 50
console.log(primeiroValido([99, 100])); // 99
console.log(primeiroValido([])); // -1


/* ============================================================
2️⃣ CONTROLE DE SALDO

O sistema recebe operações:

"ENTRADA" → adiciona o valor ao saldo.
"SAIDA"   → só pode retirar se houver saldo suficiente.

Se não houver saldo suficiente, a operação deve ser ignorada.

O código possui um erro lógico.
Faça a menor alteração possível.

Exemplo:
saldo = 100
SAIDA 150 → saldo continua 100
============================================================ */

function processarSaldo(saldo, operacoes) {
  for (let operacao of operacoes) {

    if (operacao.tipo === "ENTRADA") {
      saldo += operacao.valor;
    }

    // ❌ ERRO:
    // O código retirava o dinheiro sem verificar
    // se havia saldo suficiente.
    //
    // saldo -= operacao.valor;

    // ✅ CORREÇÃO:
    // Só fazemos a retirada se o saldo for suficiente.
    if (operacao.tipo === "SAIDA" && saldo >= operacao.valor) {
      saldo -= operacao.valor;
    }
  }

  return saldo;
}

console.log(processarSaldo(100, [
  {tipo: "SAIDA", valor: 150}
])); // 100

console.log(processarSaldo(100, [
  {tipo: "SAIDA", valor: 40}
])); // 60

console.log(processarSaldo(50, [
  {tipo: "ENTRADA", valor: 30},
  {tipo: "SAIDA", valor: 20}
])); // 60

console.log(processarSaldo(100, [
  {tipo: "SAIDA", valor: 100},
  {tipo: "SAIDA", valor: 1}
])); // 0

console.log(processarSaldo(0, [
  {tipo: "SAIDA", valor: 10},
  {tipo: "ENTRADA", valor: 30}
])); // 30

console.log(processarSaldo(80, [
  {tipo: "SAIDA", valor: 90},
  {tipo: "SAIDA", valor: 20}
])); // 80


/* ============================================================
3️⃣ ATUALIZAÇÃO DE CADASTRO

A função deve criar uma nova versão do usuário alterando
apenas o campo "ativo".

O objeto original NÃO pode ser alterado.

O código possui um erro.
Faça a menor alteração possível.

Exemplo:
usuario = {nome: "Ana", idade: 20, ativo: false}

resultado:
{nome: "Ana", idade: 20, ativo: true}

usuario original continua com ativo: false.
============================================================ */

function atualizarUsuario(usuario, ativo) {

  // ❌ ERRO:
  // let resultado = usuario;
  //
  // Aqui "resultado" e "usuario" apontam para o MESMO objeto.
  // Portanto, quando fazemos resultado.ativo = ativo,
  // também estamos alterando o objeto original.

  // ✅ CORREÇÃO:
  // O spread (...) cria um NOVO objeto copiando
  // as propriedades de usuario.
  let resultado = {...usuario};

  resultado.ativo = ativo;

  return resultado;
}


let usuario1 = {
  nome: "Ana",
  idade: 20,
  ativo: false
};

console.log(atualizarUsuario(usuario1, true));
// {nome: "Ana", idade: 20, ativo: true}

console.log(usuario1);
// {nome: "Ana", idade: 20, ativo: false}


let usuario2 = {
  nome: "Carlos",
  idade: 30,
  ativo: true
};

console.log(atualizarUsuario(usuario2, false));
// {nome: "Carlos", idade: 30, ativo: false}

console.log(usuario2);
// {nome: "Carlos", idade: 30, ativo: true}


let usuario3 = {
  nome: "Maria",
  idade: 25,
  ativo: false
};

console.log(atualizarUsuario(usuario3, false));
// {nome: "Maria", idade: 25, ativo: false}

console.log(usuario3);
// {nome: "Maria", idade: 25, ativo: false}
