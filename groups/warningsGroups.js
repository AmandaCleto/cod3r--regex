const text = 'Pedrinho (filho de Pedro Silva) é doutor no ABC!';
const text2 = 'Pedrinho (filho de Pedro Silva) é doutor no ABCabc!';

console.log(text.match(/[(abc)]/gi)); //inside a set there is no group
// [ '(', 'a', ')', 'A', 'B', 'C' ]
console.log(text.match(/([abc])/gi)); //inside a group can be a set
// [ 'a', 'A', 'B', 'C' ]
console.log(text.match(/(abc)/gi)); //there is no need to have a group here
// [ 'ABC' ]
console.log(text2.match(/(abc)+/gi));
// [ 'ABCabc' ]

