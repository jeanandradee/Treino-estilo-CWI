/*B5 — SISTEMA AUTOMÁTICO DE TROCO
CONTEXTO:
Uma loja precisa de um sistema que calcule o troco
de uma compra e informe quantas cédulas e moedas
devem ser entregues ao cliente.
Crie uma função calcularTroco(valorCompra, valorPago).
A função recebe:
- valorCompra: valor total da compra.
- valorPago: valor entregue pelo cliente.
REGRAS:
1. Se o valor pago for menor que o valor da compra,
   retorne null.
2. Se o pagamento for exato, retorne o troco como zero
   e uma lista vazia de cédulas e moedas.
3. O troco deve utilizar a menor quantidade possível
   de cédulas e moedas.
4. Considere as seguintes denominações:
CÉDULAS:
R$ 200, R$ 100, R$ 50, R$ 20, R$ 10, R$ 5 e R$ 2.
MOEDAS:
R$ 1,00, R$ 0,50, R$ 0,25, R$ 0,10,
R$ 0,05 e R$ 0,01.
5. Retorne um objeto contendo:
- troco: valor total do troco.
- quantidadeTotal: quantidade total de cédulas e moedas.
- distribuicao: array contendo apenas as denominações
  utilizadas, com seus respectivos valores e quantidades.
6. Trabalhe com valores inteiros em centavos durante
   os cálculos para evitar problemas de precisão decimal.
7. Não utilize bibliotecas externas.
ESTRUTURA ESPERADA:
{
troco: 30,
quantidadeTotal: 2,
distribuicao: [
{ valor: 20, quantidade: 1 },
{ valor: 10, quantidade: 1 }
]
}
*/

function calcularTroco(valorCompra, valorPago) {
  let compra = Math.round(valorCompra * 100);
  let pago = Math.round(valorPago * 100);
  let troco = pago - compra;

  if (troco < 0) {
    return null;
  }

  if (troco === 0) {
    return {
      troco: 0,
      quantidadeTotal: 0,
      distribuicao: []
    };
  }

  let valores = [
    20000, 10000, 5000, 2000, 1000,
    500, 200, 100, 50, 25, 10, 5, 1
  ];

  let distribuicao = [];
  let quantidadeTotal = 0;

  for (let valor of valores) {

    let quantidade = Math.floor(troco / valor);

    if (quantidade > 0) {

      distribuicao.push({
        valor: valor / 100,
        quantidade: quantidade
      });

      quantidadeTotal += quantidade;
      troco = troco % valor;
    }
  }

  return {
    troco: (pago - compra) / 100,
    quantidadeTotal,
    distribuicao
  };
}

// ========================================
// TESTES PRINCIPAIS
// ========================================

console.log(calcularTroco(70, 100));
// { troco: 30, quantidadeTotal: 2, distribuicao: [ { valor: 20, quantidade: 1 }, { valor: 10, quantidade: 1 } ] }

console.log(calcularTroco(35, 50));
// { troco: 15, quantidadeTotal: 2, distribuicao: [ { valor: 10, quantidade: 1 }, { valor: 5, quantidade: 1 } ] }

console.log(calcularTroco(10, 10));
// { troco: 0, quantidadeTotal: 0, distribuicao: [] }

console.log(calcularTroco(80, 50));
// null

console.log(calcularTroco(12.50, 20));
//  { troco: 7.5, quantidadeTotal: 3, distribuicao: [ { valor: 5, quantidade: 1 }, { valor: 2, quantidade: 1 }, { valor: 0.5, quantidade: 1 } ] }

console.log(calcularTroco(99.99, 200));
// { troco: 100.01, quantidadeTotal: 2, distribuicao: [ { valor: 100, quantidade: 1 }, { valor: 0.01, quantidade: 1 } ] }