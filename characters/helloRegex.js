const text = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.'

const regex = /casa/gi;
console.log(text.match(regex)) // ['Casa', 'casa', 'CASA']
console.log(text.match(/a b/))
// [
//     'a b',
//     index: 3,
//     input: 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.',
//     groups: undefined
// ]
