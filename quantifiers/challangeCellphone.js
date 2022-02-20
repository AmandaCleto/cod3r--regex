//accept cellphones like:
// (11) 98756-1212
// 98765-4321

const cellphone1 = '(11) 98756-1212'
const cellphone2 = '98765-4321'
const cellphone3 = '9765-4321'
const cellphone4 = '(11) 9875-1212'

//wrong - should return null
const cellphone5 = '475-1212'

console.log('My \n');
const myCellphoneRegex = /.{4}\d*-\d{4}/g //BAD

console.log(cellphone1.match(myCellphoneRegex))
console.log(cellphone2.match(myCellphoneRegex))
console.log(cellphone3.match(myCellphoneRegex))
console.log(cellphone4.match(myCellphoneRegex))
console.log(cellphone5.match(myCellphoneRegex))

console.log('\n Professor \n');
const professorCellphoneRegex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g //Bug - it can have 1 ddd only, this will be fixed in the groups chapter

console.log(cellphone1.match(professorCellphoneRegex))
console.log(cellphone2.match(professorCellphoneRegex))
console.log(cellphone3.match(professorCellphoneRegex))
console.log(cellphone4.match(professorCellphoneRegex))
console.log(cellphone5.match(professorCellphoneRegex))