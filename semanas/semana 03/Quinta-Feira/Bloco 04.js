/* Questão 1 — Cofre digital
Implemente desbloquearCofre(tentativas, senha).
O sistema recebe um array de códigos digitados e uma senha correta.
Retorne o índice da primeira tentativa correta.
Se a senha não aparecer, retorne -1.
Os índices começam em 0.
*/

function desbloquearCofre(tentativas, senha) {
  for (let i = 0; i < tentativas.length; i++) {
    if (tentativas[i] === senha) {
      return i;
    }
  }

  return -1;
}

console.log(desbloquearCofre([123, 456, 789], 456));
// Esperado: 1

console.log(desbloquearCofre([111, 222, 333], 999));
// Esperado: -1

console.log(desbloquearCofre([555, 555, 777], 555));
// Esperado: 0

console.log(desbloquearCofre([], 123));
// Esperado: -1

console.log(desbloquearCofre([10, 20, 30, 40], 40));
// Esperado: 3

console.log(desbloquearCofre([8, 6, 4, 2], 6));
// Esperado: 1

/* Questão 2 — Histórico de páginas
Implemente voltarPagina(historico).
O array representa as páginas visitadas em ordem.
A função deve retornar a página anterior à última visitada.
Não remova elementos nem altere o array original.
Se houver menos de duas páginas, retorne null.
*/

function voltarPagina(historico) {
  if (historico.length < 2) {
    return null;
  }

  return historico[historico.length -2];
}

console.log(voltarPagina(["inicio", "perfil", "configuracoes"]));
// Esperado: "perfil"

console.log(voltarPagina(["home", "noticias"]));
// Esperado: "home"

console.log(voltarPagina(["inicio"]));
// Esperado: null

console.log(voltarPagina([]));
// Esperado: null

console.log(voltarPagina(["A", "B", "C", "D"]));
// Esperado: "C"

console.log(voltarPagina(["loja", "carrinho", "pagamento"]));
// Esperado: "carrinho"

/* Questão 3 — Verificação de encaixe
Implemente cabeNoEspaco(peca, espaco).
A função recebe dois objetos com largura e altura.
A peça só cabe se sua largura for menor ou igual à largura do espaço
E sua altura for menor ou igual à altura do espaço.
A peça pode ser girada? Não. Considere as medidas exatamente como recebidas.
Retorne true ou false.
*/

function cabeNoEspaco(peca, espaco) {
  if (peca.largura <= espaco.largura && peca.altura <= espaco.altura) {
    return true;
  } 

  return false;
}

console.log(cabeNoEspaco( { largura: 4, altura: 3 }, { largura: 5, altura: 4 } ));
// Esperado: true

console.log(cabeNoEspaco( { largura: 6, altura: 3 }, { largura: 5, altura: 4 } ));
// Esperado: false

console.log(cabeNoEspaco( { largura: 5, altura: 4 }, { largura: 5, altura: 4 } ));
// Esperado: true

console.log(cabeNoEspaco( { largura: 3, altura: 7 }, { largura: 6, altura: 5 } ));
// Esperado: false

console.log(cabeNoEspaco( { largura: 2, altura: 2 }, { largura: 10, altura: 10 } ));
// Esperado: true

console.log(cabeNoEspaco( { largura: 8, altura: 8 }, { largura: 7, altura: 9 } ));
// Esperado: false