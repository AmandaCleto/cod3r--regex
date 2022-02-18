//to define a class (or a set) of characters you have to use []
const text = '1,2,3,4,5,6,a.b c!d?e[f'
const regexEven = /[02468]/g
console.log(text.match(regexEven)); // because of the usage of [], the regex finds 0 or 2 or ...
//[ '2', '4', '6' ]

const text2 = 'João não vai passear na moto'
const regexWithAndWithoutAccent = /n[aã]/g;
console.log(text2.match(regexWithAndWithoutAccent));
//[ 'nã', 'na' ]