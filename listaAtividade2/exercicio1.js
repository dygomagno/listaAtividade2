// Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
//   ano, e cor.Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  cor: "Prata",
};

for (let propriedade in carro) {
  console.log(propriedade + ": " + carro[propriedade]);
}

// Crie um arquivo HTML:

// 1 - No seu editor, crie um arquivo chamado index.html insira o conteúdo padão de HTML:

// 2- na tag script colocque o código acima

// 3- Depois execute no terminal: node exercicio1

// 3 - esse será o resultado:
// marca: Toyota
// modelo: Corolla
// ano: 2020
// cor: Prata


