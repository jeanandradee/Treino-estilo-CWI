/* 📦 Desafio 1 — Analisador de mensagens
Um sistema recebe mensagens de usuários e precisa gerar um relatório.
Crie a função analisarMensagens(mensagens).
Regras:
Conte quantas mensagens possuem pelo menos 15 caracteres, desconsiderando espaços no início e no fim.
Conte quantas mensagens contêm a palavra "erro", sem diferenciar maiúsculas de minúsculas.
Retorne o índice da primeira mensagem que contém "URGENTE", sem diferenciar maiúsculas de minúsculas. Se nenhuma contiver, retorne -1.
Não modifique as mensagens originais.*/
function analisarMensagens(mensagens) {
  let mensagensLongas = 0;
  let mensagensComErro = 0;
  let indiceUrgente = -1;

  for (let i = 0; i < mensagens.length; i++) {
    let mensagem = mensagens[i].toUpperCase().trim();
    if (mensagem.length >= 15) {
      mensagensLongas ++ ;
    }

    if (mensagem.includes("ERRO")) {
      mensagensComErro ++;
    }

    if (indiceUrgente === -1 && mensagem.includes("URGENTE")) {
      indiceUrgente = i;
    }
  }

  return { mensagensLongas, mensagensComErro, indiceUrgente } ;
}

console.log(analisarMensagens([ "  Sistema iniciado  ", "ERRO ao conectar",
  "Tudo funcionando normalmente", "Aviso URGENTE para o setor", "erro no processo" ]));
// Esperado: { mensagensLongas: 3, mensagensComErro: 2, indiceUrgente: 3 }

console.log(analisarMensagens([ "ok", "Falha no sistema", "Tudo certo" ]));
// Esperado: { mensagensLongas: 1, mensagensComErro: 0, indiceUrgente: -1 }

/* 🔢 Desafio 2 — Auditoria de matriz
Uma empresa armazena a quantidade de solicitações recebidas por setor em uma matriz. Cada linha representa um setor e cada coluna representa um dia.
Crie a função auditarSolicitacoes(matriz).
Regras:
Retorne a soma de cada linha.
Conte quantas linhas possuem todos os valores iguais a zero.
Retorne o índice da linha com a maior soma. Em caso de empate, escolha a primeira.
Se a matriz estiver vazia, a maior linha deve ser -1.
Não modifique a matriz original.*/
function auditarSolicitacoes(matriz) {
  let totaisPorSetor = [];
  let setoresSemSolicitacoes = 0;
  let indiceMaiorSetor = -1;
  let maiorSoma = 0;

  for (let i = 0; i < matriz.length; i++) {
    let somaSetor = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      somaSetor += matriz[i][j];
    }

    if (somaSetor === 0) {
      setoresSemSolicitacoes ++ ;
    }

    if (indiceMaiorSetor === -1 || somaSetor > maiorSoma) {
      maiorSoma = somaSetor;
      indiceMaiorSetor = i;
    }

    totaisPorSetor.push(somaSetor);

  }

  return { totaisPorSetor, setoresSemSolicitacoes, indiceMaiorSetor };
}

console.log(auditarSolicitacoes([ [3, 2, 1], [0, 0, 0], [4, 1, 2], [0, 0, 0] ]));
// Esperado: { totaisPorSetor: [6, 0, 7, 0], setoresSemSolicitacoes: 2, indiceMaiorSetor: 2 }

console.log(auditarSolicitacoes([ [2, 2], [4, 0], [1, 3] ]));
// Esperado: { totaisPorSetor: [4, 4, 4], setoresSemSolicitacoes: 0, indiceMaiorSetor: 0 }

console.log(auditarSolicitacoes([]));
// Esperado: { totaisPorSetor: [], setoresSemSolicitacoes: 0, indiceMaiorSetor: -1 }

/* 🧾 Desafio 3 — Histórico de alterações
Um sistema recebe dois objetos que representam o cadastro de um usuário antes e depois de uma atualização.
Crie a função compararCadastro(antes, depois).
Regras:
Retorne as propriedades cujo valor mudou.
Retorne as propriedades que existiam antes, mas foram removidas.
Retorne as propriedades que foram adicionadas.
Considere uma propriedade alterada quando ela existe nos dois objetos e seus valores são diferentes usando !==.
Mantenha a ordem das propriedades do objeto antes para alterações e remoções; para adições, use a ordem do objeto depois.
Não altere nenhum dos objetos.*/

function compararCadastro(antes, depois) {
  const alteradas = [];
  const removidas = [];
  const adicionadas = [];

  for (const chave in antes) {
    if (chave in depois) {
      if (antes[chave] !== depois[chave]) {
        alteradas.push(chave);
      }
    } else {
      removidas.push(chave);
    }
  }

  for (const chave in depois) {
    if (!(chave in antes)) {
      adicionadas.push(chave);
    }
  }

  return { alteradas, removidas, adicionadas };
}


console.log(compararCadastro(
  { nome: "Ana", idade: 25, cidade: "Recife", ativo: true },
  { nome: "Ana", idade: 26, ativo: false, email: "ana@email.com" }
));
// Esperado: {
//   alteradas: ["idade", "ativo"],
//   removidas: ["cidade"],
//   adicionadas: ["email"]
// }

console.log(compararCadastro(
  { produto: "Livro", preco: 30 },
  { produto: "Livro", preco: 30, estoque: 5 }
));
// Esperado: {
//   alteradas: [],
//   removidas: [],
//   adicionadas: ["estoque"]
// }

/* 🔤 Desafio 4 — Detector de padrões em frases
Uma ferramenta de revisão precisa analisar frases digitadas por usuários.
Crie a função analisarFrases(frases).
Regras:
Conte quantas frases terminam com ?, ignorando espaços no final.
Conte quantas frases possuem pelo menos uma palavra repetida dentro da própria frase, sem diferenciar maiúsculas de minúsculas.
Para detectar repetição, considere palavras separadas por espaços e ignore pontuação no início e no fim de cada palavra.
Retorne a primeira frase que contém uma palavra repetida, preservando o texto original. Se não houver, retorne null.*/
function analisarFrases(frases) {
 let terminamComInterrogacao = 0;
  let frasesComRepeticao = 0;
  let primeiraComRepeticao = null;

  for (const frase of frases) {
    if (frase.trim().endsWith("?")) {
      terminamComInterrogacao++;
    }

    const palavras = frase.split(/\s+/);
    const vistos = [];
    let temRepeticao = false;

    for (const palavra of palavras) {
      const normalizada = palavra
        .toLowerCase()
        .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");

      if (normalizada === "") {
        continue;
      }

      if (vistos.includes(normalizada)) {
        temRepeticao = true;
        break;
      }

      vistos.push(normalizada);
    }

    if (temRepeticao) {
      frasesComRepeticao++;

      if (primeiraComRepeticao === null) {
        primeiraComRepeticao = frase;
      }
    }
  }

  return { terminamComInterrogacao, frasesComRepeticao, primeiraComRepeticao }
}

console.log(analisarFrases([ "Tudo certo?", "JavaScript é legal, JavaScript é útil.", "Você vem hoje?   ", "Muito muito bom!" ]));
// Esperado: { terminamComInterrogacao: 2, frasesComRepeticao: 2, primeiraComRepeticao: "JavaScript é legal, JavaScript é útil." }

console.log(analisarFrases([ "Tudo bem?", "Sem repetição aqui." ]));
// Esperado: { terminamComInterrogacao: 1, frasesComRepeticao: 0, primeiraComRepeticao: null }

/* 🧮 Desafio 5 — Conferência de estoque
Uma loja recebe uma lista de produtos e precisa identificar possíveis problemas no estoque.
Crie a função conferirEstoque(produtos).
Cada produto possui nome, estoque e minimo.
Regras:
Conte os produtos cujo estoque está abaixo do mínimo.
Some quantas unidades faltam para que cada produto abaixo do mínimo alcance seu mínimo.
Retorne o nome do produto com a maior falta. Em caso de empate, mantenha o primeiro. Se nenhum produto estiver abaixo do mínimo, retorne null.
Não altere os objetos originais.*/
function conferirEstoque(produtos) {
  let produtosAbaixoDoMinimo = 0;
  let unidadesEmFalta = 0;
  let maiorFalta = null;
  let quantidadeMaiorFalta = 0;
  
  for (let { nome, estoque, minimo } of produtos) {
    if (minimo > estoque) {
      produtosAbaixoDoMinimo ++ ;
      unidadesEmFalta += minimo - estoque ;

      if (maiorFalta === null || minimo - estoque > quantidadeMaiorFalta) {
        quantidadeMaiorFalta = minimo - estoque ;
        maiorFalta = nome ;
      }
    }
  }

  return { produtosAbaixoDoMinimo, unidadesEmFalta, maiorFalta } ;
}

console.log(conferirEstoque([ { nome: "Teclado", estoque: 3, minimo: 5 }, { nome: "Mouse", estoque: 1, minimo: 6 },
 { nome: "Monitor", estoque: 4, minimo: 4 }, { nome: "Cabo", estoque: 2, minimo: 5 } ]));
// Esperado: { produtosAbaixoDoMinimo: 3, unidadesEmFalta: 10, maiorFalta: "Mouse" }

console.log(conferirEstoque([ { nome: "Teclado", estoque: 5, minimo: 5 }, { nome: "Mouse", estoque: 8, minimo: 3 } ]));
// Esperado: { produtosAbaixoDoMinimo: 0, unidadesEmFalta: 0, maiorFalta: null }

/*🎮 Desafio 6 — Simulador de comandos
Um sistema controla a pontuação de um jogador por meio de comandos.
Crie a função processarComandos(comandos).
Cada comando é um objeto com acao e valor.
Regras:
"GANHAR": adiciona valor à pontuação.
"PERDER": subtrai valor da pontuação.
"DOBRAR": multiplica a pontuação atual por 2. O campo valor deve ser ignorado.
"ZERAR": define a pontuação como 0. O campo valor deve ser ignorado.
Comandos desconhecidos devem ser ignorados.
Conte quantos comandos válidos foram executados.
Ao final, retorne a pontuação final, a quantidade de comandos executados e o índice do primeiro comando que deixou a pontuação negativa. Se isso nunca acontecer, retorne -1.
A pontuação começa em 0.*/

function processarComandos(comandos) {
  let pontuacaoFinal = 0;
  let comandosExecutados = 0;
  let primeiroIndiceNegativo = -1;

  for (let i = 0; i < comandos.length; i++) {
    const { acao, valor } = comandos[i];

    switch (acao) {
      case "GANHAR":
        pontuacaoFinal += valor;
        break;

      case "PERDER":
        pontuacaoFinal -= valor;
        break;

      case "DOBRAR":
        pontuacaoFinal *= 2;
        break;

      case "ZERAR":
        pontuacaoFinal = 0;
        break;

      default:
        continue;
    }

    comandosExecutados++;

    if (
      pontuacaoFinal < 0 &&
      primeiroIndiceNegativo === -1
    ) {
      primeiroIndiceNegativo = i;
    }
  }

  return { pontuacaoFinal, comandosExecutados, primeiroIndiceNegativo };
}


console.log(processarComandos([ { acao: "GANHAR", valor: 10 }, { acao: "PERDER", valor: 4 },
 { acao: "DOBRAR", valor: 0 }, { acao: "PERDER", valor: 20 },
 { acao: "GANHAR", valor: 5 }, { acao: "INVALIDO", valor: 100 } ]));
// Esperado: { pontuacaoFinal: -3, comandosExecutados: 5, primeiroIndiceNegativo: 3 }

console.log(processarComandos([ { acao: "GANHAR", valor: 5 }, { acao: "ZERAR", valor: 999 },
  { acao: "GANHAR", valor: 3 } ]));
// Esperado: { pontuacaoFinal: 3, comandosExecutados: 3, primeiroIndiceNegativo: -1 }