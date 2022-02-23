const text = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`

console.log(text.match(/^.{6,20}$/gm));
// it validates if is btw 6 and 20
//[ '123456', 'QUASE123!', '#OpA1?', 'Foi123!' ]

console.log(text.match(/^(?=.*[A-Z]).{6,20}$/gm));
// it validate2 if has something with uppercase and is btw 6 and 20
//[ 'QUASE123!', '#OpA1?', 'Foi123!' ]

console.log(text.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^$*]).{6,20}$/gm));
//it validates exactly the right ones
//[ '#OpA1?', 'Foi123!' ]


//?=.*[....] means lookahead any of [....]