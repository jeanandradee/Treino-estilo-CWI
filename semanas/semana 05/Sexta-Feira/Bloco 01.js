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
