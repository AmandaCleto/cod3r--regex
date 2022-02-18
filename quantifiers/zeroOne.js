const text1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const text2 = 'There is a big fog in NYC'

// ? => zero or one (optional)
const regex = /fogo?/gi; //last letter o is optional
console.log(text1.match(regex));
// [ 'fogo', 'FOGO' ]

console.log(text2.match(regex));
// [ 'fog' ]
