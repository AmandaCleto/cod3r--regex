const text1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const text2 = 'There is a big fog in NYC'

// ? => zero or more (optional)
const regex = /fogo*/gi; //last letter o can be 1 or more
console.log(text1.match(regex));
// [ 'fogo', 'FOGOOOOOO' ]

console.log(text2.match(regex));
// [ 'fog' ]
