const text = 'ABC [abc] a-c 1234'

console.log(text.match(/[a-c]/g))
//[ 'a', 'b', 'c', 'a', 'c' ]

console.log(text.match(/a-c/g)) //do not define a range. Ranges must have []
//[ 'a-c' ]

console.log(text.match(/[A-z]/g)) //ranges uses the order from UNICODE - ASCII table
// [
//     'A', 'B', 'C', '[',
//     'a', 'b', 'c', ']',
//     'a', 'c'
// ]

// console.log(text.match(/[a-Z]/g)) //ranges must follow the order from UNICODE - ASCII table
//ERROR