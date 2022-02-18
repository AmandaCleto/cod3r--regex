// g - global
// i - ignore case

const text = 'Carlos assinou o abaixo-assinado.'
console.log('1 - ' + text.match(/C|ab/)) // C
console.log('2 - ' + text.match(/c|ab/)) // ab
console.log('3 - ' + text.match(/c|ab/i)) // C
console.log('4 - ' + text.match(/ab|c/ig)) // C ab
