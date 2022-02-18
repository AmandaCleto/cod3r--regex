const text = 'áéíóú àèìòù âêîôû ç ãõ ü'

console.log(text.match(/[À-ü]/g)); //considering words with accents
// [
//     'á', 'é', 'í', 'ó', 'ú',
//     'à', 'è', 'ì', 'ò', 'ù',
//     'â', 'ê', 'î', 'ô', 'û',
//     'ç', 'ã', 'õ', 'ü'
// ]

console.log(text.match(/[À-ú]/g)); //considering words with accents
// [
//     'á', 'é', 'í', 'ó', 'ú',
//     'à', 'è', 'ì', 'ò', 'ù',
//     'â', 'ê', 'î', 'ô', 'ç',
//     'ã', 'õ'
// ]