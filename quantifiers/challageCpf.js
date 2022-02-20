// accept cpf like:
// 600.576.890-12
// 765.998.345-23

const cpf1 = '600.576.890-12';
const cpf2 = '765.998.345-23';

//wrong - should return null
const cpf3 = '765.998.345-a3';

console.log('My \n');
const myCpfRegex = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g

console.log(cpf1.match(myCpfRegex))
console.log(cpf2.match(myCpfRegex))
console.log(cpf3.match(myCpfRegex))

console.log('\n Professor \n');
const professorCpfRegex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

console.log(cpf1.match(professorCpfRegex))
console.log(cpf2.match(professorCpfRegex))
console.log(cpf3.match(professorCpfRegex))
