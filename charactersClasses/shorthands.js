const text = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(text.match(/\d/g)); //get all digits
//[ '1', '2', '3', '4', '5', '6' ]

console.log(text.match(/\D/g)); //get everything that is not a digit
//[
// 	',',  ',', ',',  ',', ',',
// 	',',  'a', '.',  'b', ' ',
// 	'c',  '!', 'd',  '?', 'e',
// 	'\t', '-', '\n', 'f', '_',
// 	'g'
//]

console.log(text.match(/\w/g)); // get characters [a-zA-Z0-9_]
// [
// 	'1', '2', '3', '4',
// 	'5', '6', 'a', 'b',
// 	'c', 'd', 'e', 'f',
// 	'_', 'g'
// ]

console.log(text.match(/\s/g)); // get spaces - spaces, tabs, new line, /r, /f
// [ ' ', '\t', '\n' ]

console.log(text.match(/\S/g)); // get everything that is not a space
// [
// 	'1', ',', '2', ',', '3',
// 	',', '4', ',', '5', ',',
// 	'6', ',', 'a', '.', 'b',
// 	'c', '!', 'd', '?', 'e',
// 	'-', 'f', '_', 'g'
// ]

// \b \B