const text = 'a   b'

//find 3 spaces
console.log(text.match(/a\s\s\sb/))
//[ 'a   b', index: 0, input: 'a   b', groups: undefined ]


console.log(text.match(/a\s+b/)) //match to 1 > blank spaces
//[ 'a   b', index: 0, input: 'a   b', groups: undefined ]

console.log(text.match(/a\ {3}b/)) //match nothing plus 3
//[ 'a   b', index: 0, input: 'a   b', groups: undefined ]

console.log(text.match(/a\s{3}b/)) //match nothing plus 3
//[ 'a   b', index: 0, input: 'a   b', groups: undefined ]