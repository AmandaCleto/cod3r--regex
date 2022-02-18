const text = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(text.match(/\D/g)) //Uppercase shorthands get everything that is NOT
// [
//     ',', ',', ',', ',', ',',
//     ',', 'a', '.', 'b', ' ',
//     'c', '!', 'd', '?', 'e',
//     '[', 'f'
// ]


console.log(text.match(/[^0-9]/g)) //same result
// [
//     ',', ',', ',', ',', ',',
//     ',', 'a', '.', 'b', ' ',
//     'c', '!', 'd', '?', 'e',
//     '[', 'f'
// ]


console.log(text.match(/[^\d!\?\[\s,\.]/g)) //denying everything that is not letters
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

const text2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(text2.match(/[^!-/:-@\s/]/g)) //two ranges !-/  :-@
// [ '1', '2' ]