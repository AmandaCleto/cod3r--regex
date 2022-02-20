const text = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.';

//to define a quantifier you must use {}
console.log(text.match(/\d{1,2}/g))
// [
//     '12', '0',  '6',
//     '9',  '21', '23',
//     '45', '46'
// ]
console.log(text.match(/[0-9]{2}/g))
// [ '12', '21', '23', '45', '46' ]
console.log(text.match(/\d{1,}/g)) //get biggest number it can
// [
//     '120', '6',
//     '9',   '21',
//     '23',  '45',
//     '46'
// ]
console.log(text.match(/\w{7}/g))
// [ 'recebeu', 'apostan' ]
console.log(text.match(/[\wõ]{7,}/g)) //a group word to õ
// [ 'recebeu', 'milhões', 'apostando' ]

//using borders
console.log(text.match(/\b\d{1,2}\b/g));
// [ '6', '9', '21', '23', '45', '46' ]

console.log(text.match(/\b[\wõ]{7}\b/g));
// [ 'recebeu', 'milhões' ]