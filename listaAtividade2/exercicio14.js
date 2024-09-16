// Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
//   que é um array de objetos.Cada departamento tem um nome e uma lista
// de funcionarios.Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

const empresa = {
  nome: "Empresa XYZ",
  departamentos: [
    {
      nome: "Departamento 1",
      funcionarios: ["Funcionário 1", "Funcionário 2"],
    },
    {
      nome: "Departamento 2",
      funcionarios: ["Funcionário 3", "Funcionário 4"],
    },
  ],
};
for (let departamento of empresa.departamentos) {
  console.log(`Departamento: ${departamento.nome}`);
  for (let funcionario of departamento.funcionarios) {
    console.log(`Funcionário: ${funcionario}`);
  }
}
