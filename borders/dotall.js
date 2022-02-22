const text = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(text.match(/^r.*r$/gi)); //BUG: dotall, the dot do not work with \n
//null

console.log(text.match(/^r[\s\S]*r$/gi)); //FIX [\s\S] select all, all that is space and all that is no space
// [
//     'Romário era um excelente jogador\n, mas hoje é um político questionador'
// ]