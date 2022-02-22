const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(text.match(/r/gi));
//[ 'R', 'r', 'r', 'r', 'r' ]

console.log(text.match(/^r/gi)); //^ out means init of line, ^ inside a set means negation
//[ 'R' ]

console.log(text.match(/r$/gi)); //$ last of the string
//[ 'r' ]

console.log(text.match(/^r.*r$/gi)); //BUG: dotall, the dot do not work with \n