/* QUESTÃO 1 — Controle de Pagamentos
Habilidades: Ambiente e Variáveis; Entrada, Saída e Operadores.
Uma empresa registra os pagamentos de seus funcionários.
Cada registro possui:
- nome
- salario
- bonus
- descontos
O sistema deve calcular o pagamento final de cada funcionário:
pagamento = salario + bonus - descontos
Retornar:
1. Um array com o pagamento final de cada funcionário.
2. A soma de todos os pagamentos.
3. Quantos funcionários receberam mais de R$ 3000.
4. O valor do maior pagamento.
Não modificar os registros originais.
*/

function calcularPagamentos(funcionarios) {
  const pagamentos = funcionarios.map(funcionario =>
    funcionario.salario + funcionario.bonus - funcionario.descontos
  );

  const totalPago = pagamentos.reduce((total, pagamento) =>
    total + pagamento, 0
  );

  const acima3000 = pagamentos.filter(pagamento =>
    pagamento > 3000
  ).length;

  const maiorPagamento = pagamentos.length > 0
    ? Math.max(...pagamentos)
    : null;

  return {
    pagamentos,
    totalPago,
    acima3000,
    maiorPagamento
  };
}

console.log(calcularPagamentos([ { nome: "Ana", salario: 2500, bonus: 500, descontos: 200 },
 { nome: "Carlos", salario: 3000, bonus: 400, descontos: 600 }, { nome: "Marina", salario: 2200, bonus: 300, descontos: 100 },
 { nome: "Pedro", salario: 3500, bonus: 700, descontos: 300 } ]));
// Esperado: { pagamentos: [2800, 2800, 2400, 3900], totalPago: 11900, acima3000: 1, maiorPagamento: 3900 }

/* QUESTÃO 2 — Validação de Acessos
Habilidades: Estruturas de Controle; Funções; Algoritmos Básicos.
Um sistema de segurança recebe tentativas de acesso.
Cada tentativa possui:
- usuario
- senhaCorreta
- senhaInformada
O acesso será permitido quando as duas senhas forem iguais.
O sistema deve retornar:
1. Quantidade de acessos permitidos.
2. Quantidade de acessos negados.
3. Um array com os nomes dos usuários que tiveram
   acesso permitido.
4. O nome do primeiro usuário que teve acesso negado.
   Se nenhum acesso for negado, retornar null.
A comparação deve diferenciar letras maiúsculas
de minúsculas.
*/

function verificarAcessos(tentativas) {
  const permitidos = tentativas.filter(tentativa => 
    tentativa.senhaCorreta === tentativa.senhaInformada
  ).length;

  const negados = tentativas.filter(tentativa => 
    tentativa.senhaCorreta !== tentativa.senhaInformada
  ).length;

  const usuariosPermitidos = tentativas.filter(tentativa => 
    tentativa.senhaCorreta === tentativa.senhaInformada
  ) 
  .map( nome => nome.usuario);
  
  const primeiroNegado = tentativas.find(tentativa => 
    tentativa.senhaCorreta !== tentativa.senhaInformada
  )?.usuario ?? null;

  return {
    permitidos,
    negados,
    usuariosPermitidos,
    primeiroNegado
  }
}

console.log(verificarAcessos([ { usuario: "Ana", senhaCorreta: "abc123", senhaInformada: "abc123" },
 { usuario: "Carlos", senhaCorreta: "senha10", senhaInformada: "senha11" },
 { usuario: "Marina", senhaCorreta: "JavaScript", senhaInformada: "javascript" },
 { usuario: "Pedro", senhaCorreta: "teste55", senhaInformada: "teste55" } ]));
// Esperado: { permitidos: 2, negados: 2, usuariosPermitidos: ["Ana", "Pedro"], primeiroNegado: "Carlos" }

/* QUESTÃO 3 — Análise de Resultados
Habilidades: Funções; Vetores e Matrizes; Algoritmos Básicos.
Uma escola registra as notas de seus alunos em uma matriz.
Cada linha representa um aluno.
Cada coluna representa uma avaliação.
O sistema deve retornar:
1. A média individual de cada aluno.
2. Quantos alunos foram aprovados (média >= 7).
3. Quantos alunos ficaram abaixo da média 5.
4. A maior nota registrada na matriz.
5. A média geral de todas as notas.
Não modificar a matriz original.
Considere que a matriz possui pelo menos um aluno
e cada aluno possui pelo menos uma nota.
*/

function analisarResultados(notas) {
  const medias = notas.map(aluno => 
    aluno.reduce((acc , n) => acc + n ,0) / aluno.length
  );
  const aprovados = medias.filter(media => media >= 7 ).length;
  const abaixoDe5 = medias.filter(media => media < 5).length;
  const todasNotas = notas.flat();
  const maiorNota = Math.max(...todasNotas);
  const mediaGeral = todasNotas.reduce((acc , n) => 
    acc + n ,0
  ) / todasNotas.length;

  return {
    medias,
    aprovados,
    abaixoDe5,
    maiorNota,
    mediaGeral
  }
}

console.log(analisarResultados([ [8, 7, 9], [5, 6, 4], [10, 9, 8], [6, 5, 7] ]));
// Esperado: { medias: [8, 5, 9, 6], aprovados: 2, abaixoDe5: 0, maiorNota: 10, mediaGeral: 7 }

/* QUESTÃO 4 — Sequência de Números
Habilidades: Algoritmos Básicos; Estruturas de Controle; Operadores.
Um sistema recebe uma sequência de números inteiros.
Ele deve identificar os números que são divisíveis
por 3 e não são divisíveis por 2.
Retornar:
1. Um novo array com esses números.
2. A quantidade de números encontrados.
3. A soma dos números encontrados.
4. O maior número encontrado.
Se nenhum número atender à condição:
- O array será vazio.
- A quantidade será 0.
- A soma será 0.
- O maior número será null.
Não modificar o array original.
*/

function analisarSequencia(numeros) {
  const selecionados = numeros.filter(numero => numero % 3 === 0 && numero % 2 !== 0);
  const quantidade = selecionados.length;
  const soma = selecionados.reduce((acc , n) => acc + n ,0);
  const maior = selecionados.length > 0 ? Math.max(...selecionados) : null;
  
  
  return {
    selecionados,
    quantidade,
    soma,
    maior
  }
}

console.log(analisarSequencia([ 3, 6, 9, 12, 15, 18, 21, 24, 27 ]));
// Esperado: { selecionados: [3, 9, 15, 21, 27], quantidade: 5, soma: 75, maior: 27 }

/* QUESTÃO 5 — Analisador de Mensagens
Habilidades: Strings; Operadores; Estruturas de Controle.
Um sistema recebe mensagens enviadas por usuários.
Ele deve analisar cada mensagem e retornar:
1. Um novo array com as mensagens que possuem
   pelo menos 10 caracteres, desconsiderando
   espaços no início e no final.
2. Quantas mensagens contêm a palavra "erro",
   ignorando maiúsculas e minúsculas.
3. A mensagem mais longa, considerando o texto
   depois de aplicar trim().
4. Quantas mensagens estão vazias ou possuem
   somente espaços.
Em caso de empate na mensagem mais longa,
manter a primeira.
Se não houver mensagens válidas, mensagemMaisLonga
será null.
Não modificar o array original.
*/

function analisarMensagens(mensagens) {
  const mensagensLongas = mensagens
  .map(mensagem => mensagem.trim())
  .filter(mensagem => mensagem.length >= 10);

  const comErro = mensagens.filter(mensagem => 
    mensagem.toLowerCase().includes("erro")
  ).length ;

  const mensagemMaisLonga = mensagens.reduce((acc, atual) => 
    acc === null || atual.trim().length > acc.trim().length
    ? atual.trim() :
    acc 
  , null );

  const vazias = mensagens.filter(mensagem =>
    mensagem.trim() === ""
  ).length;

  return {
    mensagensLongas,
    comErro,
    mensagemMaisLonga,
    vazias
  }
}

console.log(analisarMensagens([ "  Sistema funcionando  ", "Erro ao carregar arquivo", "   ", "Falha",
 "ERRO de conexão com servidor", "Tudo certo!" ]));
// Esperado: { mensagensLongas: [ "Sistema funcionando", "Erro ao carregar arquivo", "ERRO de conexão com servidor" ],
// comErro: 2, mensagemMaisLonga: "ERRO de conexão com servidor", vazias: 1 }

/* QUESTÃO 6 — Processamento de Dados JSON
Habilidades: JSON; Objetos; Vetores; Strings; Estruturas de Controle.
Uma aplicação recebe informações de produtos em formato JSON.
Cada produto possui:
- nome
- categoria
- preco
- disponivel
A função recebe uma string JSON e deve:
1. Converter o JSON em dados JavaScript.
2. Contar quantos produtos estão disponíveis.
3. Somar os preços somente dos produtos disponíveis.
4. Criar um array com os nomes dos produtos disponíveis,
   todos em letras maiúsculas.
5. Identificar o produto disponível de maior preço.
Em caso de empate, manter o primeiro produto.
Se nenhum produto estiver disponível:
- A soma será 0.
- O array de nomes será vazio.
- O produto mais caro será null.
Não modificar os dados originais recebidos.
*/

function processarProdutos(jsonProdutos) {
  const produtos = JSON.parse(jsonProdutos);

  const disponiveis = produtos.filter(produto => produto.disponivel === true);

  const valorTotal = disponiveis.reduce((acc , p) => acc + p.preco ,0);

  const nomes = disponiveis.map(nome => nome.nome.toUpperCase());
  
  const produtoMaisCaro = disponiveis.reduce((acc, atual) => 
    acc === null || atual.preco > acc.preco
    ? atual : acc 
  , null )?.nome ?? null;

  return {
    disponiveis: disponiveis.length,
    valorTotal,
    nomes,
    produtoMaisCaro
  }
}

console.log(processarProdutos(`[ { "nome": "Notebook", "categoria": "Informática", "preco": 2500, "disponivel": true },
 { "nome": "Mouse", "categoria": "Acessórios", "preco": 80, "disponivel": true },
 { "nome": "Monitor", "categoria": "Informática", "preco": 900, "disponivel": false },
 { "nome": "Teclado", "categoria": "Acessórios", "preco": 150, "disponivel": true } ]`));

// Esperado: { disponiveis: 3, valorTotal: 2730, nomes: ["NOTEBOOK", "MOUSE", "TECLADO"], produtoMaisCaro: "Notebook" }