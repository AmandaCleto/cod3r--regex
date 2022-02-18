//metacharacteres

/**
 * .        => a character
 * []       => a set of allow characters
 * [^]      => a set of deny characters
 * ?        => 0 or 1
 * *        => 0 or >
 * +        => 1 or >
 * {n,m}    => n to m
 * ^        => init of line
 * $        => end of line
 * \b       => init or end ow a word
 * \        => escape, allows you to find the literal character
 * |        => or operation
 * ()       => define a group
 * \1..\9   => rescue a defined group
 */

const text = '1,2,3,4,5,6,a.b c!d?e';

const regexDot = /\./g;
console.log(text.split(regexDot))
//[ '1,2,3,4,5,6,a', 'b c!d?e' ]

const regexSymbols = /,|\.|\?|!| /g; //coma or dot or ? or !
console.log(text.split(regexSymbols))
// [
//     '1', '2', '3', '4',
//     '5', '6', 'a', 'b',
//     'c', 'd', 'e'
// ]