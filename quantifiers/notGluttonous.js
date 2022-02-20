const text = "<div>Conteudo 01</div><div>Conteudo 02</div>"

//quantifiers gluttonous (STANDARD)
console.log(text.match(/<div>.+<\/div>/g))
//[ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]

console.log(text.match(/<div>.*<\/div>/g))
//[ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]

console.log(text.match(/<div>.{0,100}<\/div>/g))
//[ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]


//quantifiers NOT gluttonous
console.log(text.match(/<div>.+?<\/div>/g))
// [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]

console.log(text.match(/<div>.*?<\/div>/g))
// [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]

console.log(text.match(/<div>.{0,100}?<\/div>/g))
// [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]