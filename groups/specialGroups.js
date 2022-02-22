const text = "João é calmo, mas no trânsito fica nervoso.";

console.log(text.match(/[\wÀ-ú]+/g));
//[
//   'João',  'é',
//   'calmo', 'mas',
//   'no',    'trânsito',
//   'fica',  'nervoso'
// ]

//Positive lookahead
console.log(text.match(/[\wÀ-ú]+(?=,)/g)); //bring the word that at the front of it has a match of the group described (?=,) < has a coma
//[ 'calmo' ]

console.log(text.match(/[\wÀ-ú]+(?=\.)/g)); //bring the word that at the front of it has a match of the group described (?=.) < has a coma
//[ 'nervoso' ]

console.log(text.match(/[\wÀ-ú]+(?=\, mas)/g)); //bring the word that at the front of it has a match of the group described (?=, mas) < has a coma
//[ 'calmo' ]


//Positive lookback
console.log(text.match(/[\wÀ-ú]+\b(?!,)/g)); //bring the words that has no , at the front of the word. BUG: the word 'é' wasn't brought because it is a border
//[ 'João', 'mas', 'no', 'trânsito', 'fica', 'nervoso' ]

console.log(text.match(/[\wÀ-ú]+[\s|\.](?!,)/g)); //bring the words that has no , at the front of the word. BUG: Brought also the space a front each word
//[ 'João ', 'é ', 'mas ', 'no ', 'trânsito ', 'fica ', 'nervoso.' ]
