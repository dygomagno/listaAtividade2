// Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

const funcionarios = [
  { nome: 'João', cargo: 'Analista', salario: 5000 },
  { nome: 'Maria', cargo: 'Desenvolvedora', salario: 6000 },
  { nome: 'Pedro', cargo: 'Analista', salario: 5500 },
  { nome: 'Ana', cargo: 'Gerente', salario: 7000 },
  { nome: 'Carlos', cargo: 'Desenvolvedor', salario: 4500 },
  { nome: 'Mariana', cargo: 'Analista', salario: 5200 },
  { nome: 'Lucas', cargo: 'Desenvolvedor', salario: 4800 },
  { nome: 'Juliana', cargo: 'Gerente', salario: 6500 },
  { nome: 'Fernando', cargo: 'Analista', salario: 5300 },
  { nome: 'Camila', cargo: 'Desenvolvedora', salario: 5900 }
];


const salarioMinimo = 5500;
const funcionariosFiltrados = [];

for (const funcionario of funcionarios) {
  if (funcionario.salario > salarioMinimo) {
    funcionariosFiltrados.push(funcionario);
  }
}

console.log(funcionariosFiltrados);
