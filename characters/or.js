const text = 'Você precisa responder sim, não ou não sei!'

console.log(text.match(/sim|n.o|sei/g)) //alternative (or)
//[ 'sim', 'não', 'não', 'sei' ]