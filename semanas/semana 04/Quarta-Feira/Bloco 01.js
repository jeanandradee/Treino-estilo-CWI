/* ==================================================
   QUESTÃO 1 — RELATÓRIO DE ACESSOS
   ==================================================
Uma plataforma registra tentativas de acesso dos usuários.
Cada registro possui:
- usuario: nome do usuário;
- resultado: "SUCESSO" ou "NEGADO".
Crie a função analisarAcessos(registros), que retorne um
objeto contendo:
1. aprovados: quantidade de acessos com resultado "SUCESSO".
2. negados: quantidade de acessos com resultado "NEGADO".
3. primeiroAprovado: nome do primeiro usuário que conseguiu
   acessar, ou null se ninguém conseguiu.
Não altere o array original.
Exemplo de retorno:
{
  aprovados: 2,
  negados: 2,
  primeiroAprovado: "Beto"
}
*/

function analisarAcessos(registros) {
  let aprovados = 0;
  let negados = 0;
  let primeiroAprovado = null;

  for (let { usuario, resultado } of registros) {
    if (resultado === "SUCESSO") {
      aprovados ++ ;

      if (primeiroAprovado === null ) {
        primeiroAprovado = usuario;
      }
    } else if (resultado === "NEGADO"){
      negados ++ ;
    }
  }

  return { aprovados, negados, primeiroAprovado };
}


console.log(analisarAcessos([{ usuario: "Ana", resultado: "NEGADO" },{ usuario: "Beto", resultado: "SUCESSO" },
{ usuario: "Caio", resultado: "SUCESSO" },{ usuario: "Duda", resultado: "NEGADO" }]));

console.log(analisarAcessos([
  { usuario: "Lia", resultado: "NEGADO" },
  { usuario: "Rui", resultado: "NEGADO" }
]));

console.log(analisarAcessos([]));


/* ==================================================
   QUESTÃO 2 — CONTROLE DE ESTOQUE
   ==================================================
Uma loja precisa identificar quais produtos devem ser repostos.
Cada produto possui:
- nome: nome do produto;
- estoque: quantidade disponível;
- minimo: quantidade mínima recomendada.
Crie a função verificarReposicao(produtos), que retorne
um objeto contendo:
1. produtosReposicao: array com os nomes dos produtos cujo
   estoque seja MENOR que o mínimo.
2. estoqueTotal: soma das quantidades em estoque de todos
   os produtos.
3. produtosZerados: quantidade de produtos cujo estoque
   seja exatamente zero.
ATENÇÃO:
- Estoque igual ao mínimo NÃO precisa de reposição.
- Não altere o array original.
- Se a lista estiver vazia, retorne os valores iniciais.
Exemplo de retorno:
{
  produtosReposicao: ["Teclado", "Monitor"],
  estoqueTotal: 15,
  produtosZerados: 1
}
*/

function verificarReposicao(produtos) {
  let produtosReposicao = [];
  let estoqueTotal = 0;
  let produtosZerados = 0;

  for (let { nome, estoque, minimo } of produtos) {
    if (estoque < minimo) {
      produtosReposicao.push(nome);
    }
    estoqueTotal += estoque;

    if (estoque === 0) {
      produtosZerados ++ ;
    }
  }

  return { produtosReposicao, estoqueTotal, produtosZerados };
}


console.log(verificarReposicao([{ nome: "Teclado", estoque: 3, minimo: 5 }, { nome: "Mouse", estoque: 10, minimo: 4 },
{ nome: "Monitor", estoque: 0, minimo: 2 }, { nome: "Webcam", estoque: 2, minimo: 2 }]));

console.log(verificarReposicao([{ nome: "Cabo", estoque: 0, minimo: 3 },{ nome: "Carregador", estoque: 0, minimo: 5 }]));

console.log(verificarReposicao([]));


/* ==================================================
   QUESTÃO 3 — RESUMO DE TRANSAÇÕES
   ==================================================
Um sistema financeiro registra movimentações de entrada
e saída. Cada transação possui:
- tipo: "ENTRADA" ou "SAIDA";
- valor: valor da movimentação.
Crie a função resumirTransacoes(transacoes), que retorne
um objeto contendo:
1. totalEntradas: soma dos valores das transações do tipo
   "ENTRADA".
2. totalSaidas: soma dos valores das transações do tipo
   "SAIDA".
3. saldo: total de entradas menos total de saídas.
Considere que todos os valores são positivos e que os tipos
serão sempre "ENTRADA" ou "SAIDA".
Não altere o array original.
Exemplo de retorno:
{
  totalEntradas: 150,
  totalSaidas: 50,
  saldo: 100
}
*/

function resumirTransacoes(transacoes) {
  let totalEntradas = 0;
  let totalSaidas = 0;
  let saldo = 0;

  for (let { tipo, valor } of transacoes) {
    if (tipo === "ENTRADA") {
      totalEntradas += valor;
      saldo += valor;
    } else if (tipo === "SAIDA") {
      totalSaidas += valor;
      saldo -= valor;
    }
  }

  return { totalEntradas, totalSaidas, saldo };
}

console.log(resumirTransacoes([{ tipo: "ENTRADA", valor: 100 },{ tipo: "SAIDA", valor: 30 },
{ tipo: "ENTRADA", valor: 50 },{ tipo: "SAIDA", valor: 20 }]));

console.log(resumirTransacoes([{ tipo: "SAIDA", valor: 40 },{ tipo: "SAIDA", valor: 10 }]));

console.log(resumirTransacoes([]));


/* ==================================================
    QUESTÃO 4 — MONITORAMENTO DE TEMPERATURA
   ==================================================
Um sistema monitora a temperatura de uma máquina durante
seu funcionamento.
Crie a função analisarTemperaturas(temperaturas), que retorne
um objeto contendo:
1. temperaturasAltas: array com as temperaturas maiores que 30.
2. quantidadeCritica: quantidade de temperaturas maiores que 40.
3. somaTemperaturas: soma de todas as temperaturas registradas.
ATENÇÃO:
- Uma temperatura igual a 30 não entra em temperaturasAltas.
- Uma temperatura igual a 40 não conta como crítica.
- Não altere o array original.
Exemplo:
Entrada: [25, 32, 41, 30, 38]
Retorno:
{
  temperaturasAltas: [32, 41, 38],
  quantidadeCritica: 1,
  somaTemperaturas: 166
}
*/

function analisarTemperaturas(temperaturas) {
  let temperaturasAltas = [];
  let quantidadeCritica = 0;
  let somaTemperaturas = 0;

  for (let temperatura of temperaturas) {
    if (temperatura > 30) {
      temperaturasAltas.push(temperatura);
    } 
    
    if (temperatura > 40) {
      quantidadeCritica ++ ;
    }

    somaTemperaturas += temperatura;
  }

  return { temperaturasAltas, quantidadeCritica, somaTemperaturas };
}

console.log(analisarTemperaturas([25, 32, 41, 30, 38]));
// RESULTADO ESPERADO: { temperaturasAltas: [32, 41, 38], quantidadeCritica: 1, somaTemperaturas: 166 }

console.log(analisarTemperaturas([40, 20, 45, 15]));
// RESULTADO ESPERADO: { temperaturasAltas: [40, 45], quantidadeCritica: 1, somaTemperaturas: 120 }

console.log(analisarTemperaturas([]));
// RESULTADO ESPERADO: { temperaturasAltas: [], quantidadeCritica: 0, somaTemperaturas: 0 }


/* ==================================================
   QUESTÃO 5 — ORGANIZAÇÃO DE PEDIDOS
   ==================================================
Uma loja virtual recebe pedidos com as seguintes informações:
- codigo: código do pedido;
- valor: valor da compra;
- status: situação do pedido.
Os status possíveis são "PAGO", "PENDENTE" e "CANCELADO".
Crie a função resumirPedidos(pedidos), que retorne um objeto
contendo:
1. codigosPagos: array com os códigos dos pedidos com status
   "PAGO".
2. valorPendente: soma dos valores dos pedidos com status
   "PENDENTE".
3. quantidadeCancelados: quantidade de pedidos com status
   "CANCELADO".
ATENÇÃO:
- Não inclua pedidos pendentes em codigosPagos.
- Não some os valores dos pedidos cancelados.
- Não altere o array original.
*/

function resumirPedidos(pedidos) {
  let codigosPagos = [];
  let valorPendente = 0;
  let quantidadeCancelados = 0;

  for (let { codigo, valor, status } of pedidos) {
    if (status === "PAGO") {
      codigosPagos.push(codigo);
    } else if (status === "PENDENTE") {
      valorPendente += valor;
    } else if (status === "CANCELADO") {
      quantidadeCancelados ++;
    }
  }

  return { codigosPagos, valorPendente, quantidadeCancelados };
}

console.log(resumirPedidos([{ codigo: "A10", valor: 100, status: "PAGO" },{ codigo: "A11", valor: 50, status: "PENDENTE" },
{ codigo: "A12", valor: 80, status: "CANCELADO" },{ codigo: "A13", valor: 30, status: "PAGO" }]));
// RESULTADO ESPERADO: { codigosPagos: ["A10", "A13"], valorPendente: 50, quantidadeCancelados: 1 }

console.log(resumirPedidos([{ codigo: "B20", valor: 70, status: "PENDENTE" },{ codigo: "B21", valor: 90, status: "CANCELADO" }]));
// RESULTADO ESPERADO: { codigosPagos: [], valorPendente: 70, quantidadeCancelados: 1 }

console.log(resumirPedidos([]));
// RESULTADO ESPERADO: { codigosPagos: [], valorPendente: 0, quantidadeCancelados: 0 }


/* ==================================================
   QUESTÃO 6 — ANÁLISE DE NOTAS
   ==================================================
Uma plataforma de ensino registra as notas dos alunos
em uma avaliação.
Crie a função analisarNotas(notas), que retorne um objeto
contendo:
1. aprovadas: array com as notas maiores ou iguais a 7.
2. quantidadeReprovadas: quantidade de notas menores que 7.
3. maiorNota: a maior nota registrada. Se o array estiver
   vazio, retorne null.
ATENÇÃO:
- A nota 7 é considerada aprovada.
- Não altere o array original.
- Não use Math.max(), sort(), find(), map(), filter() ou reduce().
*/

function analisarNotas(notas) {
  let aprovadas = [];
  let quantidadeReprovadas = 0;
  let maiorNota = null;

  for (let nota of notas) {
    if (nota >= 7) {
      aprovadas.push(nota);
    } else {
      quantidadeReprovadas ++ ;
    }

    if (maiorNota === null || nota > maiorNota) {
      maiorNota = nota;
    }
  }

  return { aprovadas, quantidadeReprovadas, maiorNota };
}

console.log(analisarNotas([5, 8, 6, 10, 7]));
// RESULTADO ESPERADO: { aprovadas: [8, 10, 7], quantidadeReprovadas: 2, maiorNota: 10 }

console.log(analisarNotas([4, 3, 6]));
// RESULTADO ESPERADO: { aprovadas: [], quantidadeReprovadas: 3, maiorNota: 6 }

console.log(analisarNotas([]));
// RESULTADO ESPERADO: { aprovadas: [], quantidadeReprovadas: 0, maiorNota: null }