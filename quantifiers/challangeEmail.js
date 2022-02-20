// accept emails like:
// fulano@cod3r.com.br
// xico@gmail.com

const email1 = 'fulano@cod3r.com.br';
const email2 = 'xico@gmail.com';
const email3 = 'xico98@hotmail.com';
const email4 = 'xico98_xico@hotmail.com';
const email5 = 'xico98.xico@hotmail.com';

//wrongs - should return null
const email6 = 'xico98@hotmail';
const email7 = 'xico98*hotmail.com';

console.log('My \n');
const myEmailRegex = /\w+\@\w+\.\w*\.*\w*/g; //miss the dot

console.log(email1.match(myEmailRegex))
console.log(email2.match(myEmailRegex))
console.log(email3.match(myEmailRegex))
console.log(email4.match(myEmailRegex))
console.log(email5.match(myEmailRegex)) //bug
console.log(email6.match(myEmailRegex))
console.log(email7.match(myEmailRegex))


console.log('\n Professor \n');
const professorEmailRegex = /[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g;
//there will be a better way to do this using groups, this will be presented in the group chapter

console.log(email1.match(professorEmailRegex))
console.log(email2.match(professorEmailRegex))
console.log(email3.match(professorEmailRegex))
console.log(email4.match(professorEmailRegex))
console.log(email5.match(professorEmailRegex))
console.log(email6.match(professorEmailRegex))
console.log(email7.match(professorEmailRegex))
