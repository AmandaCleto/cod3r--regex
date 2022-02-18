const text1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const text2 = 'There is a big fog in NYC'

// ? => zero or one (optional)
const regex = /fogo+/gi; //it has to have at least one last o, in fogo
console.log(text1.match(regex));
// [ 'fogo', 'FOGOOOOOO' ]

console.log(text2.match(regex));
// null


const text3 = 'Os números: 0123456789.'
console.log(text3.match(/[0-9]/g));
// [
//     '0', '1', '2', '3',
//     '4', '5', '6', '7',
//     '8', '9'
// ]

console.log(text3.match(/[0-9]+/g)); //gluttonous => as + indicates that it can bring 1 instance or more, in this case, it found a sequel of 0-9 in one set
// [ '0123456789' ]

console.log(text3.match(/[0-9]+?/g)); //not gluttonous => not consider a set
// [
//     '0', '1', '2', '3',
//     '4', '5', '6', '7',
//     '8', '9'
// ]
