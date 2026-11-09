/* Q1 — Sistema de Cadastro
Habilidades: Ambiente e Variáveis + Strings
Uma empresa recebe dados de novos funcionários.
Cada cadastro possui:
- nome
- idade
- salario
Crie uma função que receba um funcionário e retorne:
1. Nome formatado com todas as letras maiúsculas.
2. Idade atual.
3. Salário com reajuste de 10%.
4. Uma propriedade chamado maiorDeIdade,
   indicando se o funcionário possui 18 anos ou mais.
*/

function cadastrarFuncionario(funcionario) {
  let { nome, idade, salario } = funcionario;
  salario += salario * 0.10;

  let maiorDeIdade = idade >= 18 ? true : false;


  return {
    nome: nome.toUpperCase(),
    idade,
    salario,
    maiorDeIdade
  }
}

console.log(cadastrarFuncionario({ nome: "Carlos Silva", idade: 25, salario: 2000 }));
// Esperado: { nome: "CARLOS SILVA", idade: 25, salario: 2200, maiorDeIdade: true }

/* Q2 — Processamento de Pedidos
Habilidades: Entrada e saída + Operadores
Uma loja recebe pedidos contendo:
- produto
- quantidade
- precoUnitario
Crie uma função que calcule:
1. Valor bruto da compra.
2. Desconto de 10% quando o valor bruto
   for igual ou superior a 200.
3. Valor final da compra.
4. Informe se o pedido recebeu desconto.
*/

function processarPedido(pedido) {
  let { produto, quantidade, precoUnitario } = pedido;
  const valorBruto = quantidade * precoUnitario;
  let recebeuDesconto = false;
  let valorFinal = valorBruto
  if (valorBruto >= 200) {
    valorFinal *= 0.9;
    recebeuDesconto = true;
  }

  const desconto = Math.abs(valorFinal - valorBruto);

  return {
    valorBruto,
    desconto,
    valorFinal,
    recebeuDesconto
  }
}

console.log(processarPedido({ produto: "Teclado", quantidade: 2, precoUnitario: 120 }));
// Esperado: { valorBruto: 240, desconto: 24, valorFinal: 216, recebeuDesconto: true }

/* Q3 — Controle de Acesso
Habilidades: Estruturas de controle
Um sistema controla o acesso de usuários.
Cada usuário possui:
- nome
- idade
- ativo (boolean)
Regras:
- Deve possuir 18 anos ou mais.
- Deve estar ativo.
Crie uma função que receba a lista de usuários
e retorne dois arrays:
1. nomesAutorizados
2. nomesBloqueados
*/

function verificarAcessos(usuarios) {
  const nomesAutorizados = usuarios
    .filter(usuario => usuario.idade >= 18 && usuario.ativo)
    .map(usuario => usuario.nome);

  const nomesBloqueados = usuarios
    .filter(usuario => usuario.idade < 18 || !usuario.ativo)
    .map(usuario => usuario.nome);

  return {
    nomesAutorizados,
    nomesBloqueados
  };
}

console.log(verificarAcessos([ { nome: "Ana", idade: 22, ativo: true }, { nome: "Pedro", idade: 16, ativo: true },
 { nome: "Carlos", idade: 30, ativo: false }, { nome: "Julia", idade: 19, ativo: true } ]));
// Esperado: { nomesAutorizados: ["Ana", "Julia"], nomesBloqueados: ["Pedro", "Carlos"] }

/* Q4 — Análise de Matriz
Habilidades: Funções, vetores e matrizes
Uma empresa registra vendas em uma matriz.
Cada linha representa um vendedor.
Cada coluna representa um dia da semana.
Crie uma função que retorne:
1. Total de vendas de cada vendedor.
2. Total geral de vendas.
3. Quantidade de vendas superiores a 100.
Não modifique a matriz original.
*/

function analisarVendas(vendas) {
  const totaisPorVendedor = vendas.map(
    vendedor => vendedor.reduce((acc, v) => acc + v, 0)
  );

  const totalGeral = vendas.flat().reduce((acc, v) => acc + v ,0);
  
  const vendasAcima100 = vendas.flat().filter(venda => venda > 100).length;

  return {
    totaisPorVendedor,
    totalGeral,
    vendasAcima100
  }
}

console.log(analisarVendas([ [100, 150, 80], [200, 50, 120], [90, 110, 70] ]));
// Esperado: { totaisPorVendedor: [330, 370, 270], totalGeral: 970, vendasAcima100: 4 }

/* Q5 — Análise de Palavras
Habilidades: Algoritmos básicos + Strings
Um sistema recebe uma lista de palavras.
Crie uma função que retorne:
1. A palavra com maior quantidade de caracteres.
2. A quantidade total de caracteres de todas as palavras.
3. Quantas palavras começam com a letra "A".
Se houver empate no tamanho da maior palavra,
considere a primeira encontrada.
*/

function analisarPalavras(palavras) {
  const maiorPalavra = palavras.reduce(
    (acc , p) => p.length > acc.length ? p : acc ,
   ""
  );

  const totalCaracteres = palavras.reduce((acc, p) => acc + p.length ,0);

  const comecaComA = palavras.filter(palavra => palavra[0].toUpperCase() === "A").length;

  return {
    maiorPalavra,
    totalCaracteres,
    comecaComA
  }
}

console.log(analisarPalavras([ "Abacaxi", "Casa", "Automovel", "Livro", "Aviao" ]));
// Esperado: { maiorPalavra: "Automovel", totalCaracteres: 30, comecaComA: 3 }

/* Q6 — Processamento de JSON
Habilidades: JSON + Objetos + Arrays + Condicionais
Um sistema recebe um JSON contendo registros financeiros.
Cada registro possui:
- categoria
- valor
- tipo ("entrada" ou "saida")
Crie uma função que receba o JSON e retorne:
1. Total de entradas.
2. Total de saídas.
3. Saldo final (entradas - saídas).
4. Lista das categorias que tiveram saídas.

Não repita categorias na lista.
*/

function analisarFinanceiro(jsonDados) {
  let dados = JSON.parse(jsonDados);

  const entradas = dados.filter(dado => 
    dado.tipo.toLowerCase() === "entrada")
    .reduce((acc, v) => acc + v.valor , 0);

  const saidas = dados.filter(dado => 
    dado.tipo.toLowerCase() === "saida")
    .reduce((acc, v) => acc + v.valor , 0);

  const saldo = entradas - saidas;

  const categoriasComSaida = [...new Set(
    dados.filter(dado => 
      dado.tipo.toLowerCase() === "saida")
      .map(dado => dado.categoria)
  )];

  return {
    entradas,
    saidas,
    saldo,
    categoriasComSaida
  }
}

console.log(analisarFinanceiro(`[
  { "categoria": "Salario", "valor": 3000, "tipo": "entrada" },
  { "categoria": "Alimentacao", "valor": 500, "tipo": "saida" },
  { "categoria": "Freelance", "valor": 800, "tipo": "entrada" },
  { "categoria": "Transporte", "valor": 200, "tipo": "saida" },
  { "categoria": "Alimentacao", "valor": 100, "tipo": "saida" }
]`));
// Esperado: { entradas: 3800, saidas: 800, saldo: 3000, categoriasComSaida: ["Alimentacao", "Transporte"] }