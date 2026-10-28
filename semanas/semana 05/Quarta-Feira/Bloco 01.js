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
  const alteradas = {};
  const removidas = [];
  const adicionadas = [];

  for (const chave in antes) {
    if (chave in depois) {
      if (antes[chave] !== depois[chave]) {
        alteradas[chave] = depois[chave];
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
