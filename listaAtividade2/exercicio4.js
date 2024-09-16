// Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

const pessoas = [
  { nome: "João", idade: 25, cidade: "São Paulo" },
  { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
  { nome: "Pedro", idade: 22, cidade: "Belo Horizonte" },
];

for (const pessoa of pessoas) {
  console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
// O laço for...of é usado para iterar sobre os elementos do array pessoas.
//A variável pessoa recebe o valor de cada elemento do array, um por vez.
//Em cada iteração, pessoa será um dos objetos do array ({ nome: "João", idade: 25, cidade: "São Paulo" }, etc.).

// Dentro do laço, o console.log exibe uma string formatada que inclui as propriedades do objeto pessoa.
// Utiliza-se template literals (entre crases `) para incluir variáveis dentro da string, o que permite a interpolação dos valores diretamente.
