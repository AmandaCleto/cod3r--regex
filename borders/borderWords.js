const text = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(text.match(/\bdia\w+/gi));//it starts with dia
//[ 'diatonico', 'diafragma' ]

console.log(text.match(/\w+dia\b/gi));//it end with dia
//[ 'media', 'wikipedia', 'bom_dia', 'melodia' ]

console.log(text.match(/\w+dia/gi));//it goes 'till dia, for instance, radial, do not end with dia, but the regex matched 'till dia only
//[ 'media', 'wikipedia', 'bom_dia', 'melodia',  'radia' ]

console.log(text.match(/\w+dia\w/gi));//it necessary has a word + dia + word
//[ 'radial' ]

console.log(text.match(/\bdia\b/gi));//it's exclusive the string dia
//[ 'dia' ]


//Borders is not \w,
//Borders is [^A-Za-z0-9]
//Borders has problems with accents

const text2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'

console.log(text2.match(/\bdia\b/gi));
//[ 'dia', 'dia', 'dia', 'dia' ]

console.log(text2.match(/(\S*)?dia(\S*)?/gi)); //it gets coma!
// [
//     'dia',
//     'diatônico',
//     'diafragma,',
//     'média',
//     'wikipédia',
//     'bom-dia',
//     'melodia',
//     'radial'
// ]


console.log(text2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi));
// [
//     'dia',       'diatônico',
//     'diafragma', 'média',
//     'wikipédia', 'bom-dia',
//     'melodia',   'radial'
// ]


console.log(text2.match(/^dia|\sdia\s|$dia/gm)); //get only dia. Not very good