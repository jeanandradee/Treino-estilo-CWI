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
