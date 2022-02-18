const text = `
ca	r
r	os!
`;

// console.log(text.match(/ca/))
//[ 'ca', index: 1, input: '\nca  r\nr   os!\n', groups: undefined ]

// console.log(text.match(/ca\t/))
//[ 'ca\t', index: 1, input: '\nca\tr\nr\tos!\n', groups: undefined ]

console.log(text.match(/ca\tr\nr\to/))
//[
// 	'ca\tr\nr\to',
// 	index: 1,
// 	input: '\nca\tr\nr\tos!\n',
// 	groups: undefined
//]