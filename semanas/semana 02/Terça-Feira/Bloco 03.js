/* ============================================================
1️⃣ VALIDADOR DE IDADE
O código deveria retornar um NOVO array contendo somente as
pessoas com idade maior ou igual a 18.
Bug: existe um erro na lógica.
Não altere o array original.
Não use filter().
============================================================ */

function maioresDeIdade(pessoas) {
  let resultado = [];

  for (let pessoa of pessoas) {

    // ❌ ERRO ORIGINAL:
    // if (pessoa.idade > 18)
    //
    // O problema é que ">" significa MAIOR que 18.
    // Porém, o enunciado pede:
    // maior OU IGUAL a 18.
    //
    // Por isso, uma pessoa com exatamente 18 anos
    // estava sendo ignorada.

    // ✅ CORREÇÃO:
    // Usamos >= para aceitar 18 ou qualquer idade acima de 18.
    if (pessoa.idade >= 18) {
      resultado.push({
        nome: pessoa.nome,
        idade: pessoa.idade
      });
    }
  }

  return resultado;
}

console.log(maioresDeIdade([{nome: "Ana", idade: 17}, {nome: "Carlos", idade: 18},
  {nome: "Bia", idade: 20}]));
// [ {nome: "Carlos", idade: 18}, {nome: "Bia", idade: 20} ]

console.log(maioresDeIdade([{nome: "João", idade: 18}]));
// [ {nome: "João", idade: 18} ]

console.log(maioresDeIdade([{nome: "A", idade: 10}, {nome: "B", idade: 15}]));
// []

console.log(maioresDeIdade([]));
// []

console.log(maioresDeIdade([{nome: "X", idade: 19}, {nome: "Y", idade: 18}]));
// [ {nome: "X", idade: 19}, {nome: "Y", idade: 18} ]

console.log(maioresDeIdade([{nome: "Rui", idade: 30}]));
// [ {nome: "Rui", idade: 30} ]


/* ============================================================
2️⃣ CONTROLE DE SALDO
O sistema deve processar uma lista de movimentações.
Regras:
- ENTRADA adiciona o valor ao saldo.
- SAIDA somente pode acontecer se houver saldo suficiente.
- Se não houver saldo suficiente, a SAIDA deve ser ignorada.
- O saldo nunca pode ficar negativo.
Existe um bug no código abaixo.
Não reescreva tudo.
Corrija somente o necessário.
============================================================ */

function processarSaldo(movimentacoes) {
  let saldo = 0;

  for (let movimento of movimentacoes) {

    if (movimento.tipo === "ENTRADA") {
      saldo += movimento.valor;

    } else if (movimento.tipo === "SAIDA") {

      // ❌ ERRO ORIGINAL:
      // saldo -= movimento.valor;
      //
      // O código retirava o valor da conta SEM verificar
      // se havia saldo suficiente.
      //
      // Exemplo:
      // saldo = 50
      // SAIDA = 80
      //
      // O código original faria:
      // 50 - 80 = -30
      //
      // Mas o enunciado diz que a saída deve ser ignorada
      // quando não houver saldo suficiente.
      
      // ✅ CORREÇÃO:
      // Só fazemos a retirada se o saldo for suficiente.
      if (saldo >= movimento.valor) {
        saldo -= movimento.valor;
      }

      // Se saldo < movimento.valor, não fazemos nada.
      // Dessa forma, a saída é ignorada e o saldo permanece igual.
    }
  }

  return saldo;
}

console.log(processarSaldo([{tipo: "ENTRADA", valor: 100}, {tipo: "SAIDA", valor: 40}]));
// 60

console.log(processarSaldo([{tipo: "ENTRADA", valor: 50}, {tipo: "SAIDA", valor: 80}]));
// 50

console.log(processarSaldo([{tipo: "ENTRADA", valor: 100}, {tipo: "SAIDA", valor: 100}]));
// 0

console.log(processarSaldo([{tipo: "SAIDA", valor: 20}, {tipo: "ENTRADA", valor: 50}]));
// 50

console.log(processarSaldo([]));
// 0

console.log(processarSaldo([{tipo: "ENTRADA", valor: 200}, {tipo: "SAIDA", valor: 50}, {tipo: "SAIDA", valor: 300}]));
// 150


/* ============================================================
3️⃣ ATUALIZAÇÃO DE CADASTRO
A função deve atualizar somente o nome de um usuário e retornar
um NOVO objeto.
O objeto original não pode ser alterado.
Existe um bug no código.
Corrija somente o necessário.

============================================================ */

function atualizarNome(usuario, novoNome) {

  // ❌ ERRO ORIGINAL:
  // let resultado = usuario;
  //
  // Aqui não estamos criando um novo objeto.
  //
  // "resultado" e "usuario" passam a apontar para o MESMO objeto
  // na memória.
  //
  // Então, quando fazemos:
  //
  // resultado.nome = novoNome;
  //
  // também estamos alterando "usuario".
  
  // ✅ CORREÇÃO:
  // Usamos o spread operator (...) para criar um NOVO objeto
  // copiando as propriedades do objeto original.
  //
  // Assim, "resultado" é um objeto diferente de "usuario".

  let resultado = {
    ...usuario,
    nome: novoNome
  };

  return resultado;
}


const usuario1 = { nome: "Ana", idade: 25};
console.log(atualizarNome(usuario1, "Maria")); // {nome: "Maria", idade: 25}
console.log(usuario1); // {nome: "Ana", idade: 25}

// ------------------------------------------------------------

const usuario2 = { nome: "João", idade: 30};
console.log(atualizarNome(usuario2, "Carlos")); // {nome: "Carlos", idade: 30}
console.log(usuario2); // {nome: "João", idade: 30}

// ------------------------------------------------------------

const usuario3 = { nome: "Bia", idade: 18};
console.log(atualizarNome(usuario3, "Laura")); // {nome: "Laura", idade: 18}
console.log(usuario3); // {nome: "Bia", idade: 18}