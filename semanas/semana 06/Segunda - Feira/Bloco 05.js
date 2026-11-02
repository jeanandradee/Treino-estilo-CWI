/* ========================================
   B5 — SISTEMA DE GESTÃO INTEGRADA
   ========================================
Uma loja precisa processar os pedidos realizados
durante o dia.
Crie a função processarPedidos(pedidos).
Cada pedido possui:
- codigo
- cliente
- valor
- status
- itens (array de strings)
Os status possíveis são:
- "aprovado"
- "pendente"
- "cancelado"
REGRAS:
1. Pedidos cancelados não entram nos cálculos financeiros.
2. Pedidos aprovados recebem:
   - desconto de 10% quando o valor for maior ou igual a 500;
   - desconto de 5% quando o valor for maior ou igual a 200;
   - nenhum desconto nos demais casos.
3. Pedidos pendentes não recebem desconto.
4. A função deve retornar um objeto contendo:
- totalPedidos: quantidade total de pedidos;
- aprovados: quantidade de pedidos aprovados;
- pendentes: quantidade de pedidos pendentes;
- cancelados: quantidade de pedidos cancelados;
- faturamento: soma dos valores dos pedidos aprovados
  após os descontos;
- valorPendente: soma dos valores dos pedidos pendentes;
- clientes: array com os nomes dos clientes que possuem
  pedidos aprovados, sem repetição;
- pedidoMaisCaro: código do pedido aprovado com maior
  valor original.
5. Em caso de empate no pedido mais caro,
   mantenha o primeiro pedido.
6. Se não houver pedidos aprovados,
   pedidoMaisCaro deve ser null.
7. Não modifique o array original.
RESTRIÇÕES:
- Não utilizar map(), filter() ou reduce().
- Utilize estruturas de repetição e condicionais.
*/

function processarPedidos(pedidos) {
  let totalPedidos = pedidos.length;
  let aprovados = 0;
  let pendentes = 0;
  let cancelados = 0;
  let faturamento = 0;
  let valorPendente = 0;
  let clientes = [];
  let pedidoMaisCaro = null;
  let maiorValor = -Infinity;

  for (let { codigo, cliente, valor, status, itens } of pedidos) {
    if (status === "aprovado") {
      aprovados++;

      if (valor >= 500) {
        faturamento += valor * 0.90;
      } else if (valor >= 200) {
        faturamento += valor * 0.95;
      } else {
        faturamento += valor;
      }

      if (!clientes.includes(cliente)) {
        clientes.push(cliente);
      }

      if (valor > maiorValor) {
        maiorValor = valor;
        pedidoMaisCaro = codigo;
      }

    } else if (status === "pendente") {
      pendentes++;
      valorPendente += valor;
    } else if (status === "cancelado") {
      cancelados++;
    }
  }

  return {
    totalPedidos,
    aprovados,
    pendentes,
    cancelados,
    faturamento,
    valorPendente,
    clientes,
    pedidoMaisCaro
  };
}

console.log(processarPedidos([
    {
        codigo: "P001",
        cliente: "Ana",
        valor: 600,
        status: "aprovado",
        itens: ["Notebook", "Mouse"]
    },
    {
        codigo: "P002",
        cliente: "Bruno",
        valor: 300,
        status: "pendente",
        itens: ["Teclado"]
    },
    {
        codigo: "P003",
        cliente: "Carlos",
        valor: 200,
        status: "aprovado",
        itens: ["Monitor"]
    },
    {
        codigo: "P004",
        cliente: "Ana",
        valor: 150,
        status: "cancelado",
        itens: ["Cabo"]
    },
    {
        codigo: "P005",
        cliente: "Marina",
        valor: 500,
        status: "aprovado",
        itens: ["Celular"]
    }
]));

/* RESULTADO ESPERADO:
{
    totalPedidos: 5,
    aprovados: 3,
    pendentes: 1,
    cancelados: 1,
    faturamento: 1180,
    valorPendente: 300,
    clientes: ["Ana", "Carlos", "Marina"],
    pedidoMaisCaro: "P001"
}
*/