// Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
  { produto: 'Camiseta', quantidade: 5, valor: 50 },
  { produto: 'Calça', quantidade: 2, valor: 100 },
  { produto: 'Tênis', quantidade: 3, valor: 150 },
  { produto: 'Boné', quantidade: 4, valor: 20 },
  { produto: 'Meia', quantidade: 6, valor: 10 }
];

let valorTotal = 0;

vendas.forEach(venda => {
  valorTotal += venda.quantidade * venda.valor;
});

console.log(`O valor total de vendas é: R$ ${valorTotal.toFixed(2)}`);
