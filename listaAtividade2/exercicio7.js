// Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
  { nome: 'Camisa', preco: 50, desconto: 0.1 },
  { nome: 'Calça', preco: 80, desconto: 0.2 },
  { nome: 'Tênis', preco: 120, desconto: 0.15 }
];

produtos.forEach(produto => {
  produto.preco -= produto.preco * produto.desconto;
});

console.log(produtos);
