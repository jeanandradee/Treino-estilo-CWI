/* 🟥 B5 — DESAFIO FINAL DA SEMANA 🔥
Agora vamos fechar a sexta com um problema um degrau acima dos anteriores.
🎟️ Sistema de Processamento de Reservas
Uma plataforma recebe reservas de clientes:
{
  cliente: "Ana",
  idade: 25,
  lugares: 4,
  pagamento: "CARTAO",
  status: "CONFIRMADO"
}
A função deve processar todas as reservas e retornar somente as reservas válidas, mantendo a ordem original.
Regras
1. Status
Só entram reservas com:
status === "CONFIRMADO"
As demais são ignoradas.
2. Idade
Clientes com idade menor que 16 não podem reservar e devem ser ignorados.
3. Categoria
Entre as reservas válidas:
1 ou 2 lugares → "INDIVIDUAL"
3 ou mais lugares → "GRUPO"
4. Valor
Cada lugar custa R$ 50.
Exemplo:
4 lugares → 4 × 50 = 200
5. Desconto
Dependendo da quantidade de lugares:
1–2 → sem desconto
3–4 → 5%
5 ou mais → 10%
6. Pagamento
Depois do desconto:
CARTAO → acréscimo de 5%
PIX ou DINHEIRO → sem acréscimo
7. Classificação
Depois de todas as alterações:
valor final >= 200 → "ALTO"
valor final < 200 → "NORMAL"
8. Prioridade
Uma reserva será prioritária somente se:
pagamento === "CARTAO"
E
classificacao === "ALTO"
Retorno
Para cada reserva válida:
{
  cliente,
  lugares,
  categoria,
  valorFinal,
  classificacao,
  prioritario
}
valorFinal deve continuar sendo número, arredondado para 2 casas decimais.
Não altere o array original.*/

function processarReservas(clientes) {
  let resultado = [];

  for (let { cliente, idade, lugares, pagamento, status } of clientes) {
    if (status !== "CONFIRMADO" || idade < 16) {
      continue;
    }
    
      let categoria;
      let valorFinal = 0;
      let classificacao = "";
      const prioritario = pagamento === "CARTAO" && classificacao === "ALTO";

      if (lugares >= 3) {
        categoria = "GRUPO";
      } else {
        categoria = "INDIVIDUAL";
      }

      valorFinal += lugares * 50;

      if (lugares >= 3 && lugares <= 4) {
        valorFinal *= 0.95;
      } else if (lugares >= 5) {
        valorFinal *= 0.9;
      }

      if (pagamento === "CARTAO") {
        valorFinal += valorFinal * 0.05;
      }

      valorFinal = Number(valorFinal.toFixed(2));

      if (valorFinal >= 200) {
        classificacao = "ALTO";
      } else {
        classificacao = "NORMAL";
      }

      resultado.push({
        cliente,
        lugares,
        categoria,
        valorFinal,
        classificacao,
        prioritario
      })
    }

  return resultado;
}

console.log(processarReservas([
  {
    cliente: "Ana",
    idade: 25,
    lugares: 4,
    pagamento: "CARTAO",
    status: "CONFIRMADO"
  }
]));
// [
//   {
//     cliente: "Ana",
//     lugares: 4,
//     categoria: "GRUPO",
//     valorFinal: 199.5,
//     classificacao: "NORMAL",
//     prioritario: false
//   }
// ]
console.log(processarReservas([
  {
    cliente: "Bruno",
    idade: 30,
    lugares: 5,
    pagamento: "PIX",
    status: "CONFIRMADO"
  }
]));
// [
//   {
//     cliente: "Bruno",
//     lugares: 5,
//     categoria: "GRUPO",
//     valorFinal: 225,
//     classificacao: "ALTO",
//     prioritario: false
//   }
// ]
console.log(processarReservas([
  {
    cliente: "Carlos",
    idade: 15,
    lugares: 5,
    pagamento: "CARTAO",
    status: "CONFIRMADO"
  },
  {
    cliente: "Duda",
    idade: 20,
    lugares: 2,
    pagamento: "PIX",
    status: "CONFIRMADO"
  }
]));
// [
//   {
//     cliente: "Duda",
//     lugares: 2,
//     categoria: "INDIVIDUAL",
//     valorFinal: 100,
//     classificacao: "NORMAL",
//     prioritario: false
//   }
// ]
console.log(processarReservas([
  {
    cliente: "Eva",
    idade: 40,
    lugares: 4,
    pagamento: "CARTAO",
    status: "PENDENTE"
  },
  {
    cliente: "Filipe",
    idade: 40,
    lugares: 4,
    pagamento: "CARTAO",
    status: "CONFIRMADO"
  }
]));
// [
//   {
//     cliente: "Filipe",
//     lugares: 4,
//     categoria: "GRUPO",
//     valorFinal: 199.5,
//     classificacao: "NORMAL",
//     prioritario: false
//   }
// ]
console.log(processarReservas([
  {
    cliente: "Gabi",
    idade: 18,
    lugares: 4,
    pagamento: "CARTAO",
    status: "CONFIRMADO"
  },
  {
    cliente: "Hugo",
    idade: 18,
    lugares: 5,
    pagamento: "CARTAO",
    status: "CONFIRMADO"
  }
]));
// [
//   {
//     cliente: "Gabi",
//     lugares: 4,
//     categoria: "GRUPO",
//     valorFinal: 199.5,
//     classificacao: "NORMAL",
//     prioritario: false
//   },
//   {
//     cliente: "Hugo",
//     lugares: 5,
//     categoria: "GRUPO",
//     valorFinal: 236.25,
//     classificacao: "ALTO",
//     prioritario: true
//   }
// ]
console.log(processarReservas([]));
// []