const text = `
fulano@cod3r.com.br
xico@gmail.com
joao@empresa.info.br
maria_silva@registro.br
rafa.sampaio@yahoo.com
fulano+de+tal@escola.ninja.br
felipe12@.com
isaias_henrique@com..com
`

console.log(text.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g));
// [
//     'fulano@cod3r.com.br',
//     'xico@gmail.com',
//     'joao@empresa.info.br',
//     'maria_silva@registro.br',
//     'rafa.sampaio@yahoo.com',
//     'fulano+de+tal@escola.ninja.br'
// ]