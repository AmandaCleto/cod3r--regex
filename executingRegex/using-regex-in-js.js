const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

//creating regex
const regexNine = RegExp('9');

console.log('REGEX Methods...')
console.log(regexNine.test(text)) //returns true if exists the regex inside the text passed
console.log(regexNine.exec(text)) //returns an object
/**
 * [
        '9',
        index: 18,
        input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
        groups: undefined
   ]
 */

const regexLetters = /[a-f]/g;
console.log('STRING Methods')
console.log(text.match(regexLetters)) //returns an array of the matched regex
console.log(text.search(regexLetters)) //returns the index that first matches the regex
console.log(text.replace(regexLetters, ':D')) //replace every match for the second argument passed
console.log(text.split(regexLetters)) //splits each matched regex in a separate coma