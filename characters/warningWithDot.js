const text = 'Bom\ndia'

console.log(text.match(/./gi)) //do not return \n
//[ 'B', 'o', 'm', 'd', 'i', 'a' ]

console.log(text.match(/..../gi)) //do not exist 4 char in a row, because \n is not identified
//null