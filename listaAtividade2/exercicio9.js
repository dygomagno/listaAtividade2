// Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
  { nome: 'João', idade: 28, cidade: 'São Paulo' },
  { nome: 'Maria', idade: 35, cidade: 'Rio de Janeiro' },
  { nome: 'Pedro', idade: 42, cidade: 'Brasília' },
  { nome: 'Ana', idade: 29, cidade: 'Belo Horizonte' },
  { nome: 'Carlos', idade: 31, cidade: 'Curitiba' },
  { nome: 'Juliana', idade: 26, cidade: 'Recife' },
  { nome: 'Lucas', idade: 33, cidade: 'Porto Alegre' },
  { nome: 'Mariana', idade: 37, cidade: 'Salvador' },
  { nome: 'Rafael', idade: 40, cidade: 'Fortaleza' },
  { nome: 'Camila', idade: 25, cidade: 'Manaus' }
];

let contador = 0;

clientes.forEach(cliente => {
  if (cliente.idade > 30) {
    contador++;
  }
});

console.log(`Existem ${contador} clientes com mais de 30 anos.`);
