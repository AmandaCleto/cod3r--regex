const text = '.$+*?-'

//inside a character class (or set), most of the character is behaving as literal without the need of scape

console.log(text.match(/[.$+*?-]/g));
//[ '.', '$', '+', '*', '?', '-' ]

console.log(text.match(/[.]/g));
//[ '.' ]

console.log(text.match(/[$-?]/g)); // if you put a - between 2 characters, it will behave as meta character, such as an range
//[ '.', '$', '+', '*', '?', '-' ]


//NOT an range
console.log(text.match(/[$\-?]/g)) //usage of scape blocks the range form
//[ '$', '?', '-' ]

console.log(text.match(/[-?]/g)) //not a range
//[ '?', '-' ]


//may need a scape inside a set => - [] ^