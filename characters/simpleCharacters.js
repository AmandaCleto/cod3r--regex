const text = '1,2,3,4,5,6,a,b c!d?e'

const regexComa = /,/
console.log(text.split(regexComa)) //for each coma it founds, it will generate a new element inside an array
// [ '1', '2', '3', '4', '5', '6', 'a', 'b c!d?e' ]

console.log(text.match(regexComa)) //found first coma and stopped
// [ ',', index: 1, input: '1,2,3,4,5,6,a,b c!d?e', groups: undefined ]

console.log(text.match(/,/g)) //found all comas
// [ ',', ',', ',', ',', ',', ',', ',']

console.log(text.match(/A/g)) //found none A
// null

console.log(text.match(/A/gi)) //found a
// [ 'a' ]

console.log(text.match(/2/g)) //found 2
// [ '2' ]

console.log(text.match(/b c!d/)) //found b c!d?e
// [
//     'b c!d',
//     index: 14,
//     input: '1,2,3,4,5,6,a,b c!d?e',
//     groups: undefined
//   ]
