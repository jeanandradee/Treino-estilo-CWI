/* ============================================================
🟨 B5 — DESAFIO FINAL
🎫 PROCESSADOR DE INSCRIÇÕES
Um sistema recebe inscrições de participantes.
Cada inscrição possui:
{
  nome,
  idade,
  tipo,
  pagamento
}
Regras:
1. Participantes com idade menor que 16 anos devem ser IGNORADOS.
2. O preço depende do tipo:
   - "NORMAL" → R$ 50
   - "VIP" → R$ 80
3. O desconto depende da quantidade:
   - 1 inscrição → sem desconto
   - 2 inscrições → 5% de desconto
   - 3 ou mais → 10% de desconto
4. Depois do desconto:
   - "CARTAO" → acrescenta 5%
   - "PIX" → não altera o valor
5. Classificação:
   - valor final >= 150 → "ALTO"
   - valor final < 150 → "NORMAL"
6. A inscrição é prioritária SOMENTE quando:
   - pagamento === "CARTAO"
   - E classificação === "ALTO"
7. O resultado deve conter:
{
  nome,
  valorFinal,
  classificacao,
  prioritario
}
8. valorFinal deve ser numérico e arredondado para 2 casas decimais.
9. Não altere os objetos originais.
============================================================ */

function processarInscricoes(inscricoes) {
  let resultado = [];
  for (let { nome, idade, tipo, quantidade, pagamento} of inscricoes) {
    if (idade < 16) {
      continue;
    }

    let valorFinal = 0;
    let classificacao;
    let prioritario = false;

    if (tipo === "NORMAL") {
      valorFinal = 50;
    } else if (tipo === "VIP") {
      valorFinal = 80;
    }

    if (quantidade >= 3) {
      valorFinal *= 0.9;
    } else if (quantidade === 2) {
      valorFinal *= 0.95;
    }

    if (pagamento === "CARTAO") {
      valorFinal += valorFinal * 0.05;
    } 

    valorFinal = Number(valorFinal.toFixed(2));

    if (valorFinal >= 150) {
      classificacao = "ALTO";
    } else {
      classificacao = "NORMAL";
    }

    if (pagamento === "CARTAO" && classificacao === "ALTO") {
      prioritario = true;
    }

    resultado.push({
      nome,
      valorFinal,
      classificacao,
      prioritario
    });
  }

  return resultado;
}

console.log(processarInscricoes([
  {
    nome: "Ana",
    idade: 20,
    tipo: "NORMAL",
    quantidade: 1,
    pagamento: "PIX"
  }
]));
// [
//   {
//     nome: "Ana",
//     valorFinal: 50,
//     classificacao: "NORMAL",
//     prioritario: false
//   }
// ]

console.log(processarInscricoes([
  {
    nome: "Bruno",
    idade: 25,
    tipo: "VIP",
    quantidade: 2,
    pagamento: "CARTAO"
  }
]));
// [
//   {
//     nome: "Bruno",
//     valorFinal: 79.8,
//     classificacao: "NORMAL",
//     prioritario: false
//   }
// ]

console.log(processarInscricoes([
  {
    nome: "Carlos",
    idade: 30,
    tipo: "VIP",
    quantidade: 3,
    pagamento: "CARTAO"
  }
]));
// [
//   {
//     nome: "Carlos",
//     valorFinal: 151.2,
//     classificacao: "ALTO",
//     prioritario: true
//   }
// ]

console.log(processarInscricoes([
  {
    nome: "Diana",
    idade: 15,
    tipo: "VIP",
    quantidade: 5,
    pagamento: "CARTAO"
  }
]));
// []

console.log(processarInscricoes([
  {
    nome: "Edu",
    idade: 18,
    tipo: "NORMAL",
    quantidade: 3,
    pagamento: "PIX"
  },
  {
    nome: "Fabi",
    idade: 17,
    tipo: "VIP",
    quantidade: 1,
    pagamento: "CARTAO"
  }
]));
// [
//   {
//     nome: "Edu",
//     valorFinal: 135,
//     classificacao: "NORMAL",
//     prioritario: false
//   },
//   {
//     nome: "Fabi",
//     valorFinal: 84,
//     classificacao: "NORMAL",
//     prioritario: false
//   }
// ]

console.log(processarInscricoes([
  {
    nome: "Gabi",
    idade: 22,
    tipo: "VIP",
    quantidade: 3,
    pagamento: "PIX"
  }
]));
// [
//   {
//     nome: "Gabi",
//     valorFinal: 216,
//     classificacao: "ALTO",
//     prioritario: false
//   }
// ])