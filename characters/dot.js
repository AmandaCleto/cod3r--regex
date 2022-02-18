// . is a joker, valid to one position

const text = '1,2,3,4,5,6,7,8,9,0'

console.log(text.match(/1.2/g)) //find any that has between 1 and 2
//[ '1,2' ]

console.log(text.match(/1..2/g)) //there is no 1 sth sth 2
//null

console.log(text.match(/1..,/g)) //find 1,2, since dot is a joker
//[ '1,2,' ]

const grades = '8.3, 7.1, 8.8, 10.0'

console.log(grades.match(/8../g))
//[ '8.3', '8.8' ]

console.log(grades.match(/.\../g)) //brings any . any
//[ '8.3', '7.1', '8.8', '0.0' ]