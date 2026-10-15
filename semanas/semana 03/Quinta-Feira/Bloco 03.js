/* Questão 1 — Encontrar o primeiro nome longo
A função deve retornar o primeiro nome com mais de 5 caracteres.
Se nenhum nome atender à condição, deve retornar null.
*/

function primeiroNomeLongo(nomes) {
  for (let nome of nomes) {

    // ERRO: estava usando < 5, ou seja, procurava nomes
    // com MENOS de 5 caracteres.
    // CORREÇÃO: usamos > 5 para encontrar nomes com mais de 5.
    if (nome.length > 5) {
      return nome;
    }
  }

  return null;
}

console.log(primeiroNomeLongo(["Ana", "Pedro", "Roberto"]));
// Esperado: "Roberto"

console.log(primeiroNomeLongo(["Lucas", "Marina"]));
// Esperado: null

console.log(primeiroNomeLongo(["João", "Fernanda", "Carlos"]));
// Esperado: "Fernanda"

console.log(primeiroNomeLongo([]));
// Esperado: null

console.log(primeiroNomeLongo(["Beatriz", "Gabriel"]));
// Esperado: "Beatriz"

console.log(primeiroNomeLongo(["Ana", "Bia", "Caio"]));
// Esperado: null


/* Questão 2 — Aprovação de cadastro
A função deve retornar true quando a pessoa tiver 18 anos ou mais
E o cadastro estiver ativo.
Caso contrário, deve retornar false.
*/

function cadastroAprovado(idade, ativo) {

  // ERRO: || significa OU.
  // Assim, bastava ter 18 anos OU estar ativo para ser aprovado.
  // CORREÇÃO: usamos &&, que significa E.
  // As duas condições precisam ser verdadeiras.
  return idade >= 18 && ativo === true;
}

console.log(cadastroAprovado(20, true));
// Esperado: true

console.log(cadastroAprovado(20, false));
// Esperado: false

console.log(cadastroAprovado(16, true));
// Esperado: false

console.log(cadastroAprovado(18, true));
// Esperado: true

console.log(cadastroAprovado(17, false));
// Esperado: false

console.log(cadastroAprovado(30, false));
// Esperado: false


/* Questão 3 — Atualizar configuração
A função deve retornar um novo objeto com as configurações atualizadas.
O objeto original não pode ser alterado, e as propriedades antigas
que não forem atualizadas devem ser preservadas.
*/

function atualizarConfiguracao(configuracao, alteracoes) {

  // ERRO: atribuir alteracoes diretamente substituía o objeto
  // inteiro, descartando as propriedades antigas.
  // CORREÇÃO: criamos um novo objeto com o spread (...).
  // Primeiro copiamos as configurações antigas e depois aplicamos
  // as alterações. Se uma propriedade se repetir, prevalece a nova.
  return { ...configuracao, ...alteracoes };
}

const configOriginal = {
  tema: "claro",
  idioma: "pt",
  notificacoes: true
};

const configAtualizada = atualizarConfiguracao(
  configOriginal,
  { tema: "escuro" }
);

console.log(configAtualizada);
// Esperado: { tema: "escuro", idioma: "pt", notificacoes: true }

console.log(configOriginal);
// Esperado: { tema: "claro", idioma: "pt", notificacoes: true }

console.log(atualizarConfiguracao(
  { volume: 50, som: true },
  { volume: 80 }
));
// Esperado: { volume: 80, som: true }

console.log(atualizarConfiguracao({}, { tema: "claro" }));
// Esperado: { tema: "claro" }

console.log(atualizarConfiguracao(
  { idioma: "pt" },
  { idioma: "en" }
));
// Esperado: { idioma: "en" }

console.log(atualizarConfiguracao(
  { ativo: true, nivel: 2 },
  { nivel: 3 }
));
// Esperado: { ativo: true, nivel: 3 }


/*  Questão 4 — Transferência bancária
A função deve permitir a transferência somente quando o valor for
maior que zero E o saldo for suficiente.
Se a transferência for permitida, retorne o saldo restante.
Caso contrário, retorne null.
*/

function transferir(saldo, valor) {

  // ERRO: || permite a transferência se apenas uma das condições
  // for verdadeira. Por exemplo, poderia aceitar um valor maior
  // que o saldo ou até um valor negativo com saldo suficiente.
  // CORREÇÃO: usamos && para exigir as duas condições:
  // valor positivo E saldo suficiente.
  if (valor > 0 && saldo >= valor) {
    return saldo - valor;
  }

  return null;
}

console.log(transferir(100, 30));
// Esperado: 70

console.log(transferir(100, 100));
// Esperado: 0

console.log(transferir(100, 120));
// Esperado: null

console.log(transferir(100, 0));
// Esperado: null

console.log(transferir(50, -10));
// Esperado: null

console.log(transferir(20, 5));
// Esperado: 15


/* Questão 5 — Identificar um pico
A função deve retornar o índice do primeiro pico do array.
Um pico é um elemento estritamente maior que seu vizinho anterior
E seu vizinho seguinte.
As extremidades não podem ser consideradas picos.
Se não houver pico, retorne -1.
*/

function primeiroPico(numeros) {
  for (let i = 1; i < numeros.length - 1; i++) {

    // ERRO: || significa OU. Isso aceitava um elemento que fosse
    // maior que apenas um dos vizinhos, mesmo sem ser um pico.
    // CORREÇÃO: usamos && para exigir que ele seja maior
    // que o vizinho anterior E que o vizinho seguinte.
    if (numeros[i] > numeros[i - 1] &&
        numeros[i] > numeros[i + 1]) {
      return i;
    }
  }

  return -1;
}

console.log(primeiroPico([1, 3, 2, 5, 4]));
// Esperado: 1

console.log(primeiroPico([1, 2, 3, 2, 1]));
// Esperado: 2

console.log(primeiroPico([1, 2, 3, 4]));
// Esperado: -1

console.log(primeiroPico([5, 1, 4, 2]));
// Esperado: 2

console.log(primeiroPico([2, 2, 2, 2]));
// Esperado: -1

console.log(primeiroPico([]));
// Esperado: -1


/*  Questão 6 — Contar números positivos
A função deve contar somente os números maiores que zero.
Zero não deve ser contado como positivo.
*/

function contarPositivos(numeros) {
  let quantidade = 0;

  for (let numero of numeros) {

    // ERRO: >= 0 também considera o zero como válido.
    // CORREÇÃO: usamos > 0 para contar apenas números positivos.
    if (numero > 0) {
      quantidade++;
    }
  }

  return quantidade;
}

console.log(contarPositivos([1, -2, 3, 0, 5]));
// Esperado: 3

console.log(contarPositivos([-1, -2, -3]));
// Esperado: 0

console.log(contarPositivos([0, 0, 1]));
// Esperado: 1

console.log(contarPositivos([10, 20, 30]));
// Esperado: 3

console.log(contarPositivos([]));
// Esperado: 0

console.log(contarPositivos([-5, 0, 8, -1, 2]));
// Esperado: 2

/* Resumo dos erros corrigidos
| Questão | Erro | Correção |
|---|---|---|
| 1 | nome.length < 5 | nome.length > 5 |
| 2 | idade >= 18 || ativo === true | idade >= 18 && ativo === true |
| 3 | Substituía o objeto inteiro | { ...configuracao, ...alteracoes } |
| 4 | valor > 0 || saldo >= valor | valor > 0 && saldo >= valor |
| 5 | Comparava com || | Compara com && |
| 6 | numero >= 0 | numero > 0 |*/