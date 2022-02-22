const text = '<b>destaque</b><strong>forte</strong><div>conteudo</div>';

console.log(text.match(/<(\w+)>.*<\/\1>/g));
//[ '<b>destaque</b>', '<strong>forte</strong>', '<div>conteudo</div>' ]

const text2 = "Lentamente é mente muito lenta."

console.log(text2.match(/(lenta)(mente).*\2.*\1\./gi)); //\2 represents the second group (mente), and \1 the first one.
//[ 'Lentamente é mente muito lenta.' ]

console.log(text2.match(/(?:lenta)(mente).*\1/gi)); //?: avoid the group to be saved in memory
//[ 'Lentamente é mente' ] // 1 now is a referenced of (mente)

console.log(text2.match(/(lenta)(mente)?/gi));
//[ 'Lentamente', 'lenta' ]

console.log(text2.match(/(lenta)(mente)/gi));
//[ 'Lentamente' ]

console.log(text2.replace(/(lenta)(mente)/gi, '$1')) //replaced every Lentamente to the second $2 = mente
//mente é mente muito lenta. //lenta

console.log(text2.replace(/(lenta)(mente)/gi, 'passaro$1')) //replaced every Lentamente to the second $2 = mente
//passaromente é mente muito lenta. //lenta