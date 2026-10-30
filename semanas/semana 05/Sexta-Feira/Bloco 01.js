/* 📦 Desafio 1 — Controle de mercadorias
Um depósito recebe registros de quantidades de mercadorias. O sistema precisa gerar um resumo.
Crie resumirMercadorias(quantidades), retornando:
total: soma das quantidades positivas.
itensValidos: quantidade de valores positivos.
estoqueZerado: quantidade de valores iguais a zero.
maiorEstoque: maior quantidade positiva, ou 0 se não houver. */
function resumirMercadorias(quantidades) {
  let total = 0;
  let itensValidos = 0;
  let estoqueZerado = 0;
  let maiorEstoque = 0;

  for (let mercadoria of quantidades) {

    if (mercadoria > 0) {
      itensValidos ++;
      total += mercadoria;
    } else  if (mercadoria === 0) {
      estoqueZerado ++ ;
    }

    if (mercadoria > maiorEstoque) {
      maiorEstoque = mercadoria;
    }
  }

  return {
    total,
    itensValidos,
    estoqueZerado,
    maiorEstoque
  }
}

console.log(resumirMercadorias([5, 0, 12, -3, 8]));
// { total: 25, itensValidos: 3, estoqueZerado: 1, maiorEstoque: 12 }

console.log(resumirMercadorias([0, -2, 0]));
// { total: 0, itensValidos: 0, estoqueZerado: 2, maiorEstoque: 0 }

console.log(resumirMercadorias([4, 7, 9]));
// { total: 20, itensValidos: 3, estoqueZerado: 0, maiorEstoque: 9 }

/* 🚦 Desafio 2 — Fiscalização de veículos
Uma fiscalização registra a velocidade dos veículos que passam por uma estrada.
Crie fiscalizarVeiculos(velocidades), retornando:
totalVeiculos: quantidade de registros.
dentroLimite: quantidade de velocidades menores ou iguais a 80.
infratores: quantidade de velocidades maiores que 80.
maiorVelocidade: maior velocidade registrada, ou 0 se não houver registros. */
function fiscalizarVeiculos(velocidades) {
  let totalVeiculos = 0;
  let dentroLimite = 0;
  let infratores = 0;
  let maiorVelocidade = 0;

  for (let velocidade of velocidades) {
    totalVeiculos ++;

    if (velocidade <= 80) {
      dentroLimite ++ ;
    } else {
      infratores ++ ;
    }

    if (velocidade > maiorVelocidade) {
      maiorVelocidade = velocidade;
    }
  }

  return {
    totalVeiculos,
    dentroLimite,
    infratores, 
    maiorVelocidade
  }
}

console.log(fiscalizarVeiculos([60, 80, 95, 110, 70]));
// { totalVeiculos: 5, dentroLimite: 3, infratores: 2, maiorVelocidade: 110 }

console.log(fiscalizarVeiculos([80, 50, 75]));
// { totalVeiculos: 3, dentroLimite: 3, infratores: 0, maiorVelocidade: 80 }

console.log(fiscalizarVeiculos([]));
// { totalVeiculos: 0, dentroLimite: 0, infratores: 0, maiorVelocidade: 0 }

/* 🔤 Desafio 3 — Organizador de mensagens
Um sistema recebe uma frase e precisa analisar suas palavras.
Crie organizarMensagem(texto), retornando:
quantidadePalavras: quantidade de palavras.
palavraMaisLonga: palavra com maior comprimento. Se houver empate, manter a primeira.
quantidadeLongas: quantidade de palavras com mais de 5 caracteres.
Considere que as palavras são separadas por espaços e que o texto pode conter espaços no começo, no fim ou estar vazio. */
function organizarMensagem(texto) {
  let quantidadePalavras = 0;
  let palavraMaisLonga = "";
  let quantidadeLongas = 0;
  let palavras = texto.trim() === "" ? [] : texto.trim().split(/\s+/);
  for (let palavra of palavras) {
    quantidadePalavras ++ ;

    if (palavra.length > palavraMaisLonga.length) {
      palavraMaisLonga = palavra;
    }

    if (palavra.length > 5) {
      quantidadeLongas ++ ;
    }
  }

  return {
    quantidadePalavras,
    palavraMaisLonga,
    quantidadeLongas
  }
}

console.log(organizarMensagem("gato computador sol janela"));
// { quantidadePalavras: 4, palavraMaisLonga: "computador", quantidadeLongas: 2 }

console.log(organizarMensagem("casa bola mesa"));
// { quantidadePalavras: 3, palavraMaisLonga: "casa", quantidadeLongas: 0 }

console.log(organizarMensagem(""));
// { quantidadePalavras: 0, palavraMaisLonga: "", quantidadeLongas: 0 }

/* 🔐 Desafio 4 — Verificador de acesso
Um sistema recebe códigos de identificação. Para ser aprovado, o código precisa:
Ter pelo menos 6 caracteres.
Começar com "A" ou "B", sem diferenciar maiúsculas e minúsculas.
Terminar com um número.
Crie verificarCodigos(codigos), retornando:
aprovados: array com os códigos que atendem às regras, mantendo a ordem original.
reprovados: quantidade de códigos que não atendem às regras. */
function verificarCodigos(codigos) {
  let aprovados = [];
  let reprovados = 0;

  for (let codigo of codigos) {
    if (codigo.length >= 6 &&
      (codigo[0] === "A" || codigo[0] === "B" ||
      codigo[0] === "a" || codigo[0] === "b" ) &&
      (codigo[codigo.length - 1] >= "0" && codigo[codigo.length - 1] <= "9")
    ) {
      aprovados.push(codigo);
    } else {
      reprovados ++ ;
    }
  }

  return { 
    aprovados,
    reprovados
  }
}

console.log(verificarCodigos(["Abcde1", "B123", "casa22", "bporta8"]));
// { aprovados: ["Abcde1", "bporta8"], reprovados: 2 }

console.log(verificarCodigos(["A12345", "Bteste9", "Xcasa1"]));
// { aprovados: ["A12345", "Bteste9"], reprovados: 1 }

console.log(verificarCodigos([]));
// { aprovados: [], reprovados: 0 }

/* ⚙️ Desafio 5 — Simulador de equipamentos
Um equipamento começa com 50 unidades de energia e recebe uma sequência de comandos.
Crie processarEquipamento(comandos), retornando:
energiaFinal: energia ao terminar.
comandosExecutados: quantidade de comandos reconhecidos.
comandosIgnorados: quantidade de comandos desconhecidos.
desligado: indica se o equipamento recebeu o comando "DESLIGAR".
Regras:
Comando
Efeito
"CARREGAR"
Adiciona 20 de energia
"CONSUMIR"
Retira 15 de energia, sem ficar abaixo de zero
"DESLIGAR"
Desliga o equipamento e encerra o processamento
Comandos desconhecidos devem ser ignorados e contabilizados. Depois de "DESLIGAR", nenhum comando seguinte deve ser processado.*/
function processarEquipamento(comandos) {
  let energiaFinal = 50;
  let comandosExecutados = 0;
  let comandosIgnorados = 0;
  let desligado = false;

  for (let comando of comandos) {

    if (comando === "CARREGAR") {
      energiaFinal += 20;
      comandosExecutados++;

    } else if (comando === "CONSUMIR") {
      energiaFinal = Math.max(0, energiaFinal - 15);
      comandosExecutados++;

    } else if (comando === "DESLIGAR") {
      desligado = true;
      comandosExecutados++;
      break;

    } else {
      comandosIgnorados++;
    }
  }

  return {
    energiaFinal,
    comandosExecutados,
    comandosIgnorados,
    desligado
  };
}

console.log(processarEquipamento(["CARREGAR", "CONSUMIR", "CARREGAR"]));
// { energiaFinal: 75, comandosExecutados: 3, comandosIgnorados: 0, desligado: false }

console.log(processarEquipamento(["CONSUMIR", "CONSUMIR", "DESLIGAR", "CARREGAR"]));
// { energiaFinal: 20, comandosExecutados: 3, comandosIgnorados: 0, desligado: true }

console.log(processarEquipamento(["OI", "CARREGAR", "X"]));
// { energiaFinal: 70, comandosExecutados: 1, comandosIgnorados: 2, desligado: false }

/* 🧩 Desafio 6 — Auditoria de transações
Um sistema financeiro recebe uma lista de valores de transações. Ele precisa identificar quais operações foram concluídas e calcular o saldo final.
Crie auditarTransacoes(transacoes), retornando:
aprovadas: quantidade de valores maiores que zero.
estornadas: quantidade de valores menores que zero.
saldoFinal: soma de todos os valores.
maiorCredito: maior valor positivo encontrado, ou 0 se não houver. */
function auditarTransacoes(transacoes) {
  let aprovadas = 0;
  let estornadas = 0;
  let saldoFinal = 0;
  let maiorCredito = 0;

  for (let transacao of transacoes) {
    saldoFinal += transacao;

    if (transacao > 0) {
      aprovadas ++ ;
    } else if (transacao < 0) {
      estornadas ++ ;
    }

    if (transacao > maiorCredito) {
      maiorCredito = transacao;
    }
  }

  return { 
    aprovadas,
    estornadas,
    saldoFinal,
    maiorCredito
  }
}

console.log(auditarTransacoes([100, -30, 50, -10, 80]));
// { aprovadas: 3, estornadas: 2, saldoFinal: 190, maiorCredito: 100 }

console.log(auditarTransacoes([-20, -40, 0]));
// { aprovadas: 0, estornadas: 2, saldoFinal: -60, maiorCredito: 0 }

console.log(auditarTransacoes([25, 25, 25]));
// { aprovadas: 3, estornadas: 0, saldoFinal: 75, maiorCredito: 25 }

console.log(auditarTransacoes([]));
// { aprovadas: 0, estornadas: 0, saldoFinal: 0, maiorCredito: 0 }